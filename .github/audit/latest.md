# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T03:27:09.867Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T03:26:59.669Z] ========================================
[2026-01-05T03:26:59.671Z] Discord Bot Execution Log
[2026-01-05T03:26:59.671Z] Environment: GitHub Actions
[2026-01-05T03:26:59.671Z] Node Version: v20.19.6
[2026-01-05T03:26:59.671Z] ========================================
[2026-01-05T03:26:59.671Z] Environment Variables Check:
[2026-01-05T03:26:59.671Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T03:26:59.671Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T03:26:59.672Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T03:26:59.672Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T03:26:59.672Z] 
Multi-Channel Configuration:
[2026-01-05T03:26:59.672Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T03:26:59.672Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T03:26:59.672Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T03:26:59.672Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T03:26:59.672Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T03:26:59.672Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T03:26:59.672Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T03:26:59.672Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T03:26:59.672Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T03:26:59.672Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T03:26:59.673Z] 
Data Files Check:
[2026-01-05T03:26:59.673Z] .github/data/new_jobs.json: ✅ Exists (10 items, 15344 bytes)
[2026-01-05T03:26:59.678Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 649810 bytes)
[2026-01-05T03:26:59.678Z] 
========================================
[2026-01-05T03:26:59.678Z] Starting Enhanced Discord Bot...
[2026-01-05T03:26:59.678Z] ========================================
[2026-01-05T03:27:00.199Z] [BOT] ✅ Loaded V2 database: 1277 jobs
[2026-01-05T03:27:00.678Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T03:27:00.679Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T03:27:00.679Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T03:27:00.682Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-05T03:27:00.749Z] [BOT] 🧹 Cleaned up 3 jobs older than 7 days
[2026-01-05T03:27:00.837Z] [BOT] ✅ Export complete: Added 3, Skipped 7, Total 210
[2026-01-05T03:27:00.840Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-05T03:27:00.840Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T03:27:00.840Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T03:27:00.840Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T03:27:00.840Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T03:27:00.841Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T03:27:00.842Z] [BOT] ✅ Loaded pending queue: 51 total (31 pending, 20 enriched, 0 posted)
[2026-01-05T03:27:00.843Z] [BOT] ✅ Saved pending queue: 42 total (31 pending, 11 enriched, 0 posted)
[2026-01-05T03:27:00.843Z] [BOT] 🗑️ Removed 9 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (9 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-05T03:27:00.844Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-05T03:27:00.844Z] [BOT] ⏸️ Limiting to 10 jobs this run, 9 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T03:27:00.844Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-05T03:27:00.847Z] [BOT] 📍 [ROUTING] "Senior Manager, Music Label Deal Analysis - FP&A" @ spotify
[2026-01-05T03:27:00.847Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-05T03:27:00.851Z] [BOT ERROR] (node:2757) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T03:27:01.004Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Music Label Deal Analysis - FP&A @ spotify in #🤖・ai-jobs
  ✅ Industry: Senior Manager, Music Label Deal Analysis - FP&A @ spotify
[2026-01-05T03:27:02.647Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Music Label Deal Analysis - FP&A @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-05T03:27:04.148Z] [BOT] 💾 Marked as posted: Senior Manager, Music Label Deal Analysis - FP&A @ spotify (instance #1)
[2026-01-05T03:27:04.149Z] [BOT] 💾 BEFORE ARCHIVING: 1278 jobs in database
[2026-01-05T03:27:04.150Z] [BOT] ✅ No jobs to archive (all 1278 jobs within 7-day window)
[2026-01-05T03:27:04.161Z] [BOT] 💾 Saved posted_jobs.json: 1278 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T03:27:07.162Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-05T03:27:07.162Z] [BOT] ⏭️  Skipping duplicate: JID_fb43f40b (posted within 7 days)
[2026-01-05T03:27:07.163Z] [BOT] ✅ Loaded pending queue: 42 total (31 pending, 11 enriched, 0 posted)
[2026-01-05T03:27:07.164Z] [BOT] ✅ Saved pending queue: 42 total (31 pending, 10 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T03:27:07.212Z] [BOT] 📂 Loaded 2187 existing routing entries
[2026-01-05T03:27:07.264Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2188
   Timestamp: 2026-01-05T03:27:07.255Z
[2026-01-05T03:27:07.265Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
   Total attempts: 11
   Successful: 2
   Failed: 0
   Skipped: 9
[2026-01-05T03:27:07.265Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-05T03:27:07.265Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-05T03:27:07.265Z] [BOT] [STATS] Channel stats saved
[2026-01-05T03:27:09.281Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2757) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*