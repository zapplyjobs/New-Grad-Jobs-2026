# Discord Bot Execution Audit
**Timestamp:** 2025-12-27T00:09:24.214Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-27T00:09:12.915Z] ========================================
[2025-12-27T00:09:12.917Z] Discord Bot Execution Log
[2025-12-27T00:09:12.917Z] Environment: GitHub Actions
[2025-12-27T00:09:12.917Z] Node Version: v20.19.6
[2025-12-27T00:09:12.917Z] ========================================
[2025-12-27T00:09:12.917Z] Environment Variables Check:
[2025-12-27T00:09:12.917Z] DISCORD_TOKEN: ✅ Set
[2025-12-27T00:09:12.917Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-27T00:09:12.917Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-27T00:09:12.917Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-27T00:09:12.917Z] 
Multi-Channel Configuration:
[2025-12-27T00:09:12.917Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-27T00:09:12.918Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-27T00:09:12.918Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-27T00:09:12.918Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-27T00:09:12.918Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-27T00:09:12.918Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-27T00:09:12.918Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-27T00:09:12.918Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-27T00:09:12.918Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-27T00:09:12.918Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-27T00:09:12.918Z] 
Data Files Check:
[2025-12-27T00:09:12.919Z] .github/data/new_jobs.json: ✅ Exists (2 items, 18492 bytes)
[2025-12-27T00:09:12.920Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 229114 bytes)
[2025-12-27T00:09:12.920Z] 
========================================
[2025-12-27T00:09:12.920Z] Starting Enhanced Discord Bot...
[2025-12-27T00:09:12.920Z] ========================================
[2025-12-27T00:09:13.455Z] [BOT] ✅ Loaded V2 database: 389 jobs
[2025-12-27T00:09:14.230Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-27T00:09:14.230Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-27T00:09:14.231Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-27T00:09:14.231Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-27T00:09:14.278Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-27T00:09:14.330Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 71
[2025-12-27T00:09:14.331Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-27T00:09:14.331Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-27T00:09:14.331Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
[2025-12-27T00:09:14.332Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-27T00:09:14.332Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-27T00:09:14.332Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
[2025-12-27T00:09:14.332Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-27T00:09:14.333Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-27T00:09:14.334Z] [BOT] 📍 [ROUTING] "Associate AI Research & Operations Analyst" @ ORG_57e8a431 Brands
[2025-12-27T00:09:14.335Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-27T00:09:14.339Z] [BOT ERROR] (node:2375) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-27T00:09:14.664Z] [BOT] ✅ Created forum post: 🏢 Associate AI Research & Operations Analyst @ ORG_57e8a431 Brands in #🤖・ai-jobs
[2025-12-27T00:09:14.664Z] [BOT] ✅ Industry: Associate AI Research & Operations Analyst @ ORG_57e8a431 Brands
[2025-12-27T00:09:16.400Z] [BOT] ✅ Created forum post: 🏢 Associate AI Research & Operations Analyst @ ORG_57e8a431 Brands in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-27T00:09:17.900Z] [BOT] 💾 Marked as posted: Associate AI Research & Operations Analyst @ ORG_57e8a431 Brands (instance #1)
[2025-12-27T00:09:17.901Z] [BOT] 💾 BEFORE ARCHIVING: 390 jobs in database
[2025-12-27T00:09:17.901Z] [BOT] ✅ No jobs to archive (all 390 jobs within 7-day window)
[2025-12-27T00:09:17.915Z] [BOT] 💾 Saved posted_jobs.json: 390 active jobs
[2025-12-27T00:09:17.915Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-27T00:09:20.915Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-27T00:09:20.916Z] [BOT] ⏭️  Skipping duplicate: JID_5f0286fc (posted within 7 days)
[2025-12-27T00:09:20.916Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-27T00:09:20.917Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
[2025-12-27T00:09:20.917Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-27T00:09:20.960Z] [BOT] 📂 Loaded 1080 existing routing entries
[2025-12-27T00:09:21.005Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1081
   Timestamp: 2025-12-27T00:09:21.000Z
[2025-12-27T00:09:21.006Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_22bd1254.jsonl
[2025-12-27T00:09:21.006Z] [BOT] Total attempts: 3
   Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-27T00:09:21.006Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🦢・los-angeles: 1 posts
[2025-12-27T00:09:21.007Z] [BOT] [STATS] Channel stats saved
[2025-12-27T00:09:23.017Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2375) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*