# Discord Bot Execution Audit
**Timestamp:** 2025-12-22T18:44:31.651Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-22T18:44:20.217Z] ========================================
[2025-12-22T18:44:20.219Z] Discord Bot Execution Log
[2025-12-22T18:44:20.219Z] Environment: GitHub Actions
[2025-12-22T18:44:20.219Z] Node Version: v20.19.6
[2025-12-22T18:44:20.219Z] ========================================
[2025-12-22T18:44:20.219Z] Environment Variables Check:
[2025-12-22T18:44:20.219Z] DISCORD_TOKEN: ✅ Set
[2025-12-22T18:44:20.219Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-22T18:44:20.219Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-22T18:44:20.219Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-22T18:44:20.220Z] 
Multi-Channel Configuration:
[2025-12-22T18:44:20.220Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-22T18:44:20.220Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-22T18:44:20.220Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-22T18:44:20.220Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-22T18:44:20.220Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-22T18:44:20.220Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-22T18:44:20.220Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-22T18:44:20.220Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-22T18:44:20.220Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-22T18:44:20.220Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-22T18:44:20.220Z] 
Data Files Check:
[2025-12-22T18:44:20.221Z] .github/data/new_jobs.json: ✅ Exists (2 items, 1378 bytes)
[2025-12-22T18:44:20.225Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 541216 bytes)
[2025-12-22T18:44:20.225Z] 
========================================
[2025-12-22T18:44:20.225Z] Starting Enhanced Discord Bot...
[2025-12-22T18:44:20.225Z] ========================================
[2025-12-22T18:44:20.753Z] [BOT] ✅ Loaded V2 database: 924 jobs
[2025-12-22T18:44:21.492Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-22T18:44:21.493Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-22T18:44:21.493Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-22T18:44:21.493Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-22T18:44:21.607Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 170
[2025-12-22T18:44:21.609Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-22T18:44:21.609Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-22T18:44:21.609Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
[2025-12-22T18:44:21.610Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-22T18:44:21.610Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-22T18:44:21.610Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-22T18:44:21.612Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-22T18:44:21.613Z] [BOT] 📍 [ROUTING] "Product Engineer" @ ORG_1550f0e6 ABLOY
[2025-12-22T18:44:21.614Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-22T18:44:21.618Z] [BOT ERROR] (node:2337) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-22T18:44:22.062Z] [BOT] ✅ Created forum post: 🏢 Product Engineer @ ORG_1550f0e6 ABLOY in #💻・tech-jobs
  ✅ Industry: Product Engineer @ ORG_1550f0e6 ABLOY
[2025-12-22T18:44:23.805Z] [BOT] ✅ Created forum post: 🏢 Product Engineer @ ORG_1550f0e6 ABLOY in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-22T18:44:25.305Z] [BOT] 💾 Marked as posted: Product Engineer @ ORG_1550f0e6 ABLOY (instance #1)
[2025-12-22T18:44:25.305Z] [BOT] 💾 BEFORE ARCHIVING: 925 jobs in database
[2025-12-22T18:44:25.306Z] [BOT] ✅ No jobs to archive (all 925 jobs within 7-day window)
[2025-12-22T18:44:25.316Z] [BOT] 💾 Saved posted_jobs.json: 925 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-22T18:44:28.318Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-22T18:44:28.318Z] [BOT] ⏭️  Skipping duplicate: JID_bde651ec (posted within 7 days)
[2025-12-22T18:44:28.318Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-22T18:44:28.319Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
[2025-12-22T18:44:28.319Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-22T18:44:28.363Z] [BOT] 📂 Loaded 1009 existing routing entries
[2025-12-22T18:44:28.407Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1010
[2025-12-22T18:44:28.408Z] [BOT] Timestamp: 2025-12-22T18:44:28.403Z
[2025-12-22T18:44:28.408Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_0b37efa6.jsonl
[2025-12-22T18:44:28.408Z] [BOT] Total attempts: 3
   Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-22T18:44:28.408Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2025-12-22T18:44:28.408Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
[2025-12-22T18:44:28.409Z] [BOT] 2. #💻・remote-usa: 1 posts
[2025-12-22T18:44:28.409Z] [BOT] [STATS] Channel stats saved
[2025-12-22T18:44:30.418Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2337) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*