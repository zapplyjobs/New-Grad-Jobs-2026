# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T23:06:04.438Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T23:05:52.998Z] ========================================
[2026-01-04T23:05:53.000Z] Discord Bot Execution Log
[2026-01-04T23:05:53.000Z] Environment: GitHub Actions
[2026-01-04T23:05:53.000Z] Node Version: v20.19.6
[2026-01-04T23:05:53.000Z] ========================================
[2026-01-04T23:05:53.000Z] Environment Variables Check:
[2026-01-04T23:05:53.000Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T23:05:53.000Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T23:05:53.000Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T23:05:53.000Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T23:05:53.000Z] 
Multi-Channel Configuration:
[2026-01-04T23:05:53.000Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T23:05:53.001Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T23:05:53.001Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T23:05:53.001Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T23:05:53.001Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T23:05:53.001Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T23:05:53.001Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T23:05:53.001Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T23:05:53.001Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T23:05:53.001Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T23:05:53.001Z] 
Data Files Check:
[2026-01-04T23:05:53.002Z] .github/data/new_jobs.json: ✅ Exists (10 items, 21363 bytes)
[2026-01-04T23:05:53.006Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 649304 bytes)
[2026-01-04T23:05:53.006Z] 
========================================
[2026-01-04T23:05:53.006Z] Starting Enhanced Discord Bot...
[2026-01-04T23:05:53.007Z] ========================================
[2026-01-04T23:05:53.523Z] [BOT] ✅ Loaded V2 database: 1276 jobs
[2026-01-04T23:05:54.255Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T23:05:54.256Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T23:05:54.256Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T23:05:54.256Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T23:05:54.322Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2026-01-04T23:05:54.410Z] [BOT] ✅ Export complete: Added 2, Skipped 8, Total 210
[2026-01-04T23:05:54.412Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T23:05:54.412Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-04T23:05:54.413Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-04T23:05:54.413Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-04T23:05:54.414Z] [BOT] ✅ Loaded pending queue: 51 total (31 pending, 20 enriched, 0 posted)
[2026-01-04T23:05:54.416Z] [BOT] ✅ Saved pending queue: 42 total (31 pending, 11 enriched, 0 posted)
🗑️ Removed 9 blacklisted jobs from pending queue
[2026-01-04T23:05:54.416Z] [BOT] 📋 After blacklist filter: 1 jobs (9 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-04T23:05:54.417Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-04T23:05:54.417Z] [BOT] ⏸️ Limiting to 10 jobs this run, 9 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T23:05:54.420Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-04T23:05:54.421Z] [BOT] 📍 [ROUTING] "Director, Finance Strategic Initiatives" @ anthropic
[2026-01-04T23:05:54.421Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-04T23:05:54.426Z] [BOT ERROR] (node:2792) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T23:05:54.781Z] [BOT] ✅ Created forum post: 🏢 Director, Finance Strategic Initiatives @ anthropic in #💰・finance-jobs
[2026-01-04T23:05:54.782Z] [BOT] ✅ Industry: Director, Finance Strategic Initiatives @ anthropic
[2026-01-04T23:05:56.498Z] [BOT] ✅ Created forum post: 🏢 Director, Finance Strategic Initiatives @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T23:05:57.999Z] [BOT] 💾 Marked as posted: Director, Finance Strategic Initiatives @ anthropic (instance #1)
[2026-01-04T23:05:57.999Z] [BOT] 💾 BEFORE ARCHIVING: 1277 jobs in database
[2026-01-04T23:05:58.000Z] [BOT] ✅ No jobs to archive (all 1277 jobs within 7-day window)
[2026-01-04T23:05:58.016Z] [BOT] 💾 Saved posted_jobs.json: 1277 active jobs
[2026-01-04T23:05:58.016Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T23:06:01.017Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-04T23:06:01.017Z] [BOT] ⏭️  Skipping duplicate: JID_9d3ee7bb (posted within 7 days)
[2026-01-04T23:06:01.018Z] [BOT] ✅ Loaded pending queue: 42 total (31 pending, 11 enriched, 0 posted)
[2026-01-04T23:06:01.019Z] [BOT] ✅ Saved pending queue: 42 total (31 pending, 10 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T23:06:01.069Z] [BOT] 📂 Loaded 2186 existing routing entries
[2026-01-04T23:06:01.121Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-04T23:06:01.121Z] [BOT] Total entries: 2187
   Timestamp: 2026-01-04T23:06:01.111Z
[2026-01-04T23:06:01.122Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 11
   Successful: 2
   Failed: 0
   Skipped: 9
[2026-01-04T23:06:01.122Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T23:06:01.122Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💰・finance-jobs: 1 posts
[2026-01-04T23:06:01.122Z] [BOT] 2. #🌉・san-francisco: 1 posts
[STATS] Channel stats saved
[2026-01-04T23:06:03.137Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2792) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*