# Discord Bot Execution Audit
**Timestamp:** 2025-12-26T23:35:28.943Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-26T23:35:18.063Z] ========================================
[2025-12-26T23:35:18.065Z] Discord Bot Execution Log
[2025-12-26T23:35:18.065Z] Environment: GitHub Actions
[2025-12-26T23:35:18.065Z] Node Version: v20.19.6
[2025-12-26T23:35:18.065Z] ========================================
[2025-12-26T23:35:18.065Z] Environment Variables Check:
[2025-12-26T23:35:18.065Z] DISCORD_TOKEN: ✅ Set
[2025-12-26T23:35:18.066Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-26T23:35:18.066Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-26T23:35:18.066Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-26T23:35:18.066Z] 
Multi-Channel Configuration:
[2025-12-26T23:35:18.066Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-26T23:35:18.066Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-26T23:35:18.066Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-26T23:35:18.066Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-26T23:35:18.066Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-26T23:35:18.066Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-26T23:35:18.066Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-26T23:35:18.066Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-26T23:35:18.067Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-26T23:35:18.067Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-26T23:35:18.067Z] 
Data Files Check:
[2025-12-26T23:35:18.067Z] .github/data/new_jobs.json: ✅ Exists (2 items, 5948 bytes)
[2025-12-26T23:35:18.069Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 289756 bytes)
[2025-12-26T23:35:18.069Z] 
========================================
[2025-12-26T23:35:18.069Z] Starting Enhanced Discord Bot...
[2025-12-26T23:35:18.069Z] ========================================
[2025-12-26T23:35:18.586Z] [BOT] ✅ Loaded V2 database: 496 jobs
[2025-12-26T23:35:19.358Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-26T23:35:19.358Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-26T23:35:19.359Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-26T23:35:19.359Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-26T23:35:19.406Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-26T23:35:19.458Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 71
[2025-12-26T23:35:19.459Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-26T23:35:19.460Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-26T23:35:19.460Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-26T23:35:19.460Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-26T23:35:19.461Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-26T23:35:19.461Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-26T23:35:19.463Z] [BOT] 📍 [ROUTING] "Software Engineer - Entry" @ ORG_7b717950
[2025-12-26T23:35:19.463Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-26T23:35:19.467Z] [BOT ERROR] (node:2335) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-26T23:35:19.786Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Entry @ ORG_7b717950 in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Entry @ ORG_7b717950
[2025-12-26T23:35:21.481Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Entry @ ORG_7b717950 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-26T23:35:22.982Z] [BOT] 💾 Marked as posted: Software Engineer - Entry @ ORG_7b717950 (instance #1)
[2025-12-26T23:35:22.982Z] [BOT] 💾 BEFORE ARCHIVING: 497 jobs in database
[2025-12-26T23:35:22.983Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-26T23:35:22.993Z] [BOT] 📦 Archived 108 jobs to 2025-12.json (108 total in archive)
[2025-12-26T23:35:22.994Z] [BOT] ✅ Archiving complete: 108 archived, 389 active
[2025-12-26T23:35:23.001Z] [BOT] 💾 Saved posted_jobs.json: 389 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-26T23:35:26.002Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-26T23:35:26.002Z] [BOT] ⏭️  Skipping duplicate: JID_8318d2ab (posted within 7 days)
[2025-12-26T23:35:26.003Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-26T23:35:26.004Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
[2025-12-26T23:35:26.004Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-26T23:35:26.047Z] [BOT] 📂 Loaded 1079 existing routing entries
[2025-12-26T23:35:26.092Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1080
   Timestamp: 2025-12-26T23:35:26.087Z
[2025-12-26T23:35:26.093Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bda0a545.jsonl
[2025-12-26T23:35:26.093Z] [BOT] Total attempts: 3
   Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-26T23:35:26.093Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-26T23:35:26.093Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2025-12-26T23:35:26.093Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2025-12-26T23:35:26.093Z] [BOT] [STATS] Channel stats saved
[2025-12-26T23:35:28.103Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2335) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*