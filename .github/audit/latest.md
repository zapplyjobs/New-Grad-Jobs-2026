# Discord Bot Execution Audit
**Timestamp:** 2025-12-24T08:04:23.274Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-24T08:04:12.215Z] ========================================
[2025-12-24T08:04:12.217Z] Discord Bot Execution Log
[2025-12-24T08:04:12.217Z] Environment: GitHub Actions
[2025-12-24T08:04:12.217Z] Node Version: v20.19.6
[2025-12-24T08:04:12.217Z] ========================================
[2025-12-24T08:04:12.217Z] Environment Variables Check:
[2025-12-24T08:04:12.217Z] DISCORD_TOKEN: ✅ Set
[2025-12-24T08:04:12.217Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-24T08:04:12.217Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-24T08:04:12.217Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-24T08:04:12.217Z] 
Multi-Channel Configuration:
[2025-12-24T08:04:12.217Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-24T08:04:12.218Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-24T08:04:12.218Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-24T08:04:12.218Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-24T08:04:12.218Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-24T08:04:12.218Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-24T08:04:12.218Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-24T08:04:12.218Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-24T08:04:12.218Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-24T08:04:12.218Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-24T08:04:12.218Z] 
Data Files Check:
[2025-12-24T08:04:12.219Z] .github/data/new_jobs.json: ✅ Exists (2 items, 7305 bytes)
[2025-12-24T08:04:12.221Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 386820 bytes)
[2025-12-24T08:04:12.221Z] 
========================================
[2025-12-24T08:04:12.221Z] Starting Enhanced Discord Bot...
[2025-12-24T08:04:12.221Z] ========================================
[2025-12-24T08:04:12.761Z] [BOT] ✅ Loaded V2 database: 667 jobs
[2025-12-24T08:04:13.675Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-24T08:04:13.676Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-24T08:04:13.676Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-24T08:04:13.676Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-24T08:04:13.731Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-24T08:04:13.791Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 159
[2025-12-24T08:04:13.792Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-24T08:04:13.792Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-24T08:04:13.792Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
[2025-12-24T08:04:13.793Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-24T08:04:13.793Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-24T08:04:13.793Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
[2025-12-24T08:04:13.793Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-24T08:04:13.794Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-24T08:04:13.796Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2025-12-24T08:04:13.796Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-24T08:04:13.800Z] [BOT ERROR] (node:2430) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-24T08:04:14.172Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2025-12-24T08:04:15.913Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・remote-usa
[2025-12-24T08:04:15.913Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-24T08:04:17.414Z] [BOT] 💾 Marked as posted: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman (instance #1)
[2025-12-24T08:04:17.414Z] [BOT] 💾 BEFORE ARCHIVING: 668 jobs in database
[2025-12-24T08:04:17.415Z] [BOT] ✅ No jobs to archive (all 668 jobs within 7-day window)
[2025-12-24T08:04:17.424Z] [BOT] 💾 Saved posted_jobs.json: 668 active jobs
[2025-12-24T08:04:17.424Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-24T08:04:20.426Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-24T08:04:20.426Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_d46b6e81-engineer_r10217878 (posted within 7 days)
[2025-12-24T08:04:20.426Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-24T08:04:20.427Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2025-12-24T08:04:20.427Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-24T08:04:20.469Z] [BOT] 📂 Loaded 1060 existing routing entries
[2025-12-24T08:04:20.513Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1061
   Timestamp: 2025-12-24T08:04:20.508Z
[2025-12-24T08:04:20.513Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_1a414558.jsonl
[2025-12-24T08:04:20.513Z] [BOT] Total attempts: 3
   Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-24T08:04:20.513Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2025-12-24T08:04:20.514Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2025-12-24T08:04:20.514Z] [BOT] [STATS] Channel stats saved
[2025-12-24T08:04:22.522Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2430) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*