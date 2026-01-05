# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T22:24:28.168Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T22:24:18.038Z] ========================================
[2026-01-05T22:24:18.039Z] Discord Bot Execution Log
[2026-01-05T22:24:18.039Z] Environment: GitHub Actions
[2026-01-05T22:24:18.040Z] Node Version: v20.19.6
[2026-01-05T22:24:18.040Z] ========================================
[2026-01-05T22:24:18.040Z] Environment Variables Check:
[2026-01-05T22:24:18.040Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T22:24:18.040Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T22:24:18.040Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T22:24:18.040Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T22:24:18.040Z] 
Multi-Channel Configuration:
[2026-01-05T22:24:18.040Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T22:24:18.041Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T22:24:18.041Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T22:24:18.041Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T22:24:18.041Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T22:24:18.041Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T22:24:18.041Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T22:24:18.041Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T22:24:18.041Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T22:24:18.041Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T22:24:18.041Z] 
Data Files Check:
[2026-01-05T22:24:18.042Z] .github/data/new_jobs.json: ✅ Exists (1 items, 10064 bytes)
[2026-01-05T22:24:18.047Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 670909 bytes)
[2026-01-05T22:24:18.047Z] 
========================================
[2026-01-05T22:24:18.047Z] Starting Enhanced Discord Bot...
[2026-01-05T22:24:18.047Z] ========================================
[2026-01-05T22:24:18.584Z] [BOT] ✅ Loaded V2 database: 1318 jobs
[2026-01-05T22:24:19.090Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T22:24:19.090Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T22:24:19.090Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T22:24:19.091Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[BOT] 📬 Found 1 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Software Engineer - Notifications at discord
[2026-01-05T22:24:19.092Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-05T22:24:19.092Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-05T22:24:19.092Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-05T22:24:19.093Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-05T22:24:19.093Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T22:24:19.093Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-05T22:24:19.094Z] [BOT] 📍 [ROUTING] "Senior Software Engineer - Notifications" @ discord
[2026-01-05T22:24:19.095Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-05T22:24:19.099Z] [BOT ERROR] (node:2331) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T22:24:19.251Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - Notifications @ discord in #🤖・ai-jobs
[2026-01-05T22:24:19.252Z] [BOT] ✅ Industry: Senior Software Engineer - Notifications @ discord
[2026-01-05T22:24:20.941Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - Notifications @ discord in #🌉・san-francisco
[2026-01-05T22:24:20.941Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-05T22:24:22.442Z] [BOT] 💾 Marked as posted: Senior Software Engineer - Notifications @ discord (instance #1)
[2026-01-05T22:24:22.442Z] [BOT] 💾 BEFORE ARCHIVING: 1319 jobs in database
[2026-01-05T22:24:22.443Z] [BOT] ✅ No jobs to archive (all 1319 jobs within 7-day window)
[2026-01-05T22:24:22.457Z] [BOT] 💾 Saved posted_jobs.json: 1319 active jobs
[2026-01-05T22:24:22.458Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T22:24:25.459Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-05T22:24:25.459Z] [BOT] ⏭️  Skipping duplicate: JID_7d293a3e (posted within 7 days)
[2026-01-05T22:24:25.460Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-05T22:24:25.460Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2026-01-05T22:24:25.460Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T22:24:25.514Z] [BOT] 📂 Loaded 2229 existing routing entries
[2026-01-05T22:24:25.568Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-05T22:24:25.569Z] [BOT] Total entries: 2230
   Timestamp: 2026-01-05T22:24:25.558Z
[2026-01-05T22:24:25.569Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T22:24:25.569Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-05T22:24:25.569Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-05T22:24:25.570Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-05T22:24:25.570Z] [BOT] [STATS] Channel stats saved
[2026-01-05T22:24:27.580Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2331) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*