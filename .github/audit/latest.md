# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T13:51:37.765Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T13:51:22.737Z] ========================================
[2026-01-05T13:51:22.739Z] Discord Bot Execution Log
[2026-01-05T13:51:22.739Z] Environment: GitHub Actions
[2026-01-05T13:51:22.739Z] Node Version: v20.19.6
[2026-01-05T13:51:22.739Z] ========================================
[2026-01-05T13:51:22.739Z] Environment Variables Check:
[2026-01-05T13:51:22.739Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T13:51:22.739Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T13:51:22.739Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T13:51:22.740Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T13:51:22.740Z] 
Multi-Channel Configuration:
[2026-01-05T13:51:22.740Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T13:51:22.740Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T13:51:22.740Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T13:51:22.740Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T13:51:22.740Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T13:51:22.740Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T13:51:22.740Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T13:51:22.740Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T13:51:22.740Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T13:51:22.740Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T13:51:22.741Z] 
Data Files Check:
[2026-01-05T13:51:22.741Z] .github/data/new_jobs.json: ✅ Exists (10 items, 42165 bytes)
[2026-01-05T13:51:22.746Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 653524 bytes)
[2026-01-05T13:51:22.746Z] 
========================================
[2026-01-05T13:51:22.746Z] Starting Enhanced Discord Bot...
[2026-01-05T13:51:22.746Z] ========================================
[2026-01-05T13:51:23.259Z] [BOT] ✅ Loaded V2 database: 1284 jobs
[2026-01-05T13:51:24.148Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T13:51:24.149Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T13:51:24.149Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T13:51:24.149Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-05T13:51:24.304Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 213
[2026-01-05T13:51:24.306Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-05T13:51:24.306Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T13:51:24.306Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T13:51:24.307Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T13:51:24.307Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T13:51:24.307Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T13:51:24.308Z] [BOT] ✅ Loaded pending queue: 52 total (32 pending, 20 enriched, 0 posted)
[2026-01-05T13:51:24.310Z] [BOT] ✅ Saved pending queue: 44 total (32 pending, 12 enriched, 0 posted)
[2026-01-05T13:51:24.310Z] [BOT] 🗑️ Removed 8 blacklisted jobs from pending queue
📋 After blacklist filter: 2 jobs (8 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-05T13:51:24.311Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-05T13:51:24.311Z] [BOT] ⏸️ Limiting to 10 jobs this run, 8 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T13:51:24.314Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-05T13:51:24.314Z] [BOT] 📍 [ROUTING] "Head of Asset & Wealth Management, GTM Sales" @ anthropic
[2026-01-05T13:51:24.315Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-05T13:51:24.319Z] [BOT ERROR] (node:2825) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T13:51:24.502Z] [BOT] ✅ Created forum post: 🏢 Head of Asset & Wealth Management, GTM Sales @ anthropic in #💲・sales-jobs
[2026-01-05T13:51:24.502Z] [BOT] ✅ Industry: Head of Asset & Wealth Management, GTM Sales @ anthropic
[2026-01-05T13:51:26.441Z] [BOT] ✅ Created forum post: 🏢 Head of Asset & Wealth Management, GTM Sales @ anthropic in #🌉・san-francisco
[2026-01-05T13:51:26.441Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-05T13:51:27.942Z] [BOT] 💾 Marked as posted: Head of Asset & Wealth Management, GTM Sales @ anthropic (instance #1)
[2026-01-05T13:51:27.942Z] [BOT] 💾 BEFORE ARCHIVING: 1285 jobs in database
[2026-01-05T13:51:27.943Z] [BOT] ✅ No jobs to archive (all 1285 jobs within 7-day window)
[2026-01-05T13:51:27.955Z] [BOT] 💾 Saved posted_jobs.json: 1285 active jobs
[2026-01-05T13:51:27.955Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T13:51:27.955Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Retail & Commercial Banking" @ anthropic
[2026-01-05T13:51:27.955Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-05T13:51:28.263Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Retail & Commercial Banking @ anthropic in #💲・sales-jobs
[2026-01-05T13:51:28.263Z] [BOT] ✅ Industry: Strategic Account Executive, Retail & Commercial Banking @ anthropic
[2026-01-05T13:51:30.058Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Retail & Commercial Banking @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-05T13:51:31.559Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Retail & Commercial Banking @ anthropic (instance #1)
[2026-01-05T13:51:31.559Z] [BOT] 💾 BEFORE ARCHIVING: 1286 jobs in database
[2026-01-05T13:51:31.560Z] [BOT] ✅ No jobs to archive (all 1286 jobs within 7-day window)
[2026-01-05T13:51:31.569Z] [BOT] 💾 Saved posted_jobs.json: 1286 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T13:51:34.571Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-05T13:51:34.571Z] [BOT] ⏭️  Skipping duplicate: JID_0cafa48d (posted within 7 days)
[2026-01-05T13:51:34.571Z] [BOT] ⏭️  Skipping duplicate: JID_53e922ae (posted within 7 days)
[2026-01-05T13:51:34.572Z] [BOT] ✅ Loaded pending queue: 44 total (32 pending, 12 enriched, 0 posted)
[2026-01-05T13:51:34.574Z] [BOT] ✅ Saved pending queue: 44 total (32 pending, 10 enriched, 2 posted)
[2026-01-05T13:51:34.574Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T13:51:34.623Z] [BOT] 📂 Loaded 2194 existing routing entries
[2026-01-05T13:51:34.680Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-05T13:51:34.680Z] [BOT] Total entries: 2196
   Timestamp: 2026-01-05T13:51:34.669Z
[2026-01-05T13:51:34.680Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T13:51:34.680Z] [BOT] Total attempts: 12
   Successful: 4
   Failed: 0
   Skipped: 8
[2026-01-05T13:51:34.681Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-05T13:51:34.681Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 2
   Top channels:
[2026-01-05T13:51:34.681Z] [BOT] 1. #💲・sales-jobs: 2 posts
     2. #🌉・san-francisco: 2 posts
[2026-01-05T13:51:34.681Z] [BOT] [STATS] Channel stats saved
[2026-01-05T13:51:36.691Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2825) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*