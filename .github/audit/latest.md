# Discord Bot Execution Audit
**Timestamp:** 2025-12-27T03:15:37.315Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-27T03:15:27.071Z] ========================================
[2025-12-27T03:15:27.073Z] Discord Bot Execution Log
[2025-12-27T03:15:27.073Z] Environment: GitHub Actions
[2025-12-27T03:15:27.073Z] Node Version: v20.19.6
[2025-12-27T03:15:27.073Z] ========================================
[2025-12-27T03:15:27.073Z] Environment Variables Check:
[2025-12-27T03:15:27.073Z] DISCORD_TOKEN: ✅ Set
[2025-12-27T03:15:27.073Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-27T03:15:27.073Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-27T03:15:27.073Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-27T03:15:27.073Z] 
Multi-Channel Configuration:
[2025-12-27T03:15:27.074Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-27T03:15:27.074Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-27T03:15:27.074Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-27T03:15:27.074Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-27T03:15:27.074Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-27T03:15:27.074Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-27T03:15:27.074Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-27T03:15:27.074Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-27T03:15:27.074Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-27T03:15:27.074Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-27T03:15:27.074Z] 
Data Files Check:
[2025-12-27T03:15:27.075Z] .github/data/new_jobs.json: ✅ Exists (2 items, 6008 bytes)
[2025-12-27T03:15:27.076Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 230070 bytes)
[2025-12-27T03:15:27.076Z] 
========================================
[2025-12-27T03:15:27.076Z] Starting Enhanced Discord Bot...
[2025-12-27T03:15:27.076Z] ========================================
[2025-12-27T03:15:27.588Z] [BOT] ✅ Loaded V2 database: 391 jobs
[2025-12-27T03:15:28.026Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-27T03:15:28.026Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-27T03:15:28.027Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-27T03:15:28.027Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-27T03:15:28.073Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-27T03:15:28.125Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 72
[2025-12-27T03:15:28.126Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-27T03:15:28.127Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-27T03:15:28.127Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-27T03:15:28.127Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-27T03:15:28.128Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-27T03:15:28.128Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-27T03:15:28.129Z] [BOT] 📍 [ROUTING] "Business Data Analyst" @ ORG_d31dc978
[2025-12-27T03:15:28.130Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-27T03:15:28.134Z] [BOT ERROR] (node:2539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-27T03:15:28.309Z] [BOT] ✅ Created forum post: 🏢 Business Data Analyst @ ORG_d31dc978 in #🤖・ai-jobs
[2025-12-27T03:15:28.309Z] [BOT] ✅ Industry: Business Data Analyst @ ORG_d31dc978
[2025-12-27T03:15:30.150Z] [BOT] ✅ Created forum post: 🏢 Business Data Analyst @ ORG_d31dc978 in #🗽・new-york
[2025-12-27T03:15:30.150Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-27T03:15:31.650Z] [BOT] 💾 Marked as posted: Business Data Analyst @ ORG_d31dc978 (instance #1)
[2025-12-27T03:15:31.650Z] [BOT] 💾 BEFORE ARCHIVING: 392 jobs in database
[2025-12-27T03:15:31.651Z] [BOT] ✅ No jobs to archive (all 392 jobs within 7-day window)
[2025-12-27T03:15:31.658Z] [BOT] 💾 Saved posted_jobs.json: 392 active jobs
[2025-12-27T03:15:31.658Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-27T03:15:34.659Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-27T03:15:34.660Z] [BOT] ⏭️  Skipping duplicate: JID_6c5ec1fe (posted within 7 days)
[2025-12-27T03:15:34.660Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-27T03:15:34.661Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-27T03:15:34.703Z] [BOT] 📂 Loaded 1082 existing routing entries
[2025-12-27T03:15:34.748Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1083
   Timestamp: 2025-12-27T03:15:34.743Z
[2025-12-27T03:15:34.749Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_22bd1254.jsonl
[2025-12-27T03:15:34.749Z] [BOT] Total attempts: 3
   Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-27T03:15:34.749Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-27T03:15:34.749Z] [BOT] Last cleanup: Never
[2025-12-27T03:15:34.749Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2025-12-27T03:15:34.750Z] [BOT] [STATS] Channel stats saved
[2025-12-27T03:15:36.759Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*