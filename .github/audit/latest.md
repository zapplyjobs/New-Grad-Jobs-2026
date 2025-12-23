# Discord Bot Execution Audit
**Timestamp:** 2025-12-23T07:37:49.868Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-23T07:37:40.884Z] ========================================
[2025-12-23T07:37:40.886Z] Discord Bot Execution Log
[2025-12-23T07:37:40.886Z] Environment: GitHub Actions
[2025-12-23T07:37:40.886Z] Node Version: v20.19.6
[2025-12-23T07:37:40.886Z] ========================================
[2025-12-23T07:37:40.886Z] Environment Variables Check:
[2025-12-23T07:37:40.886Z] DISCORD_TOKEN: ✅ Set
[2025-12-23T07:37:40.886Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-23T07:37:40.886Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-23T07:37:40.887Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-23T07:37:40.887Z] 
Multi-Channel Configuration:
[2025-12-23T07:37:40.887Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-23T07:37:40.887Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-23T07:37:40.887Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-23T07:37:40.887Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-23T07:37:40.887Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-23T07:37:40.887Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-23T07:37:40.887Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-23T07:37:40.887Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-23T07:37:40.887Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-23T07:37:40.887Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-23T07:37:40.888Z] 
Data Files Check:
[2025-12-23T07:37:40.888Z] .github/data/new_jobs.json: ✅ Exists (2 items, 4033 bytes)
[2025-12-23T07:37:40.892Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 508452 bytes)
[2025-12-23T07:37:40.892Z] 
========================================
[2025-12-23T07:37:40.892Z] Starting Enhanced Discord Bot...
[2025-12-23T07:37:40.892Z] ========================================
[2025-12-23T07:37:41.422Z] [BOT] ✅ Loaded V2 database: 870 jobs
[2025-12-23T07:37:42.188Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-23T07:37:42.189Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-23T07:37:42.189Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-23T07:37:42.189Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-23T07:37:42.303Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 164
[2025-12-23T07:37:42.304Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-23T07:37:42.304Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-23T07:37:42.305Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
[2025-12-23T07:37:42.305Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-23T07:37:42.305Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-23T07:37:42.305Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-23T07:37:42.306Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-23T07:37:42.308Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_6468cf88
[2025-12-23T07:37:42.308Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-23T07:37:42.312Z] [BOT ERROR] (node:2416) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-23T07:37:42.484Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_6468cf88 in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_6468cf88
[2025-12-23T07:37:43.986Z] [BOT] 💾 Marked as posted: Software Developer @ ORG_6468cf88 (instance #1)
[2025-12-23T07:37:43.987Z] [BOT] 💾 BEFORE ARCHIVING: 871 jobs in database
[2025-12-23T07:37:43.988Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-23T07:37:43.993Z] [BOT] 📦 Archived 144 jobs to 2025-12.json (144 total in archive)
[2025-12-23T07:37:43.993Z] [BOT] ✅ Archiving complete: 144 archived, 727 active
[2025-12-23T07:37:43.999Z] [BOT] 💾 Saved posted_jobs.json: 727 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-23T07:37:46.999Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-23T07:37:46.999Z] [BOT] ⏭️  Skipping duplicate: JID_679ebc85-developer_jr100173 (posted within 7 days)
[2025-12-23T07:37:47.000Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-23T07:37:47.000Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2025-12-23T07:37:47.000Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-23T07:37:47.042Z] [BOT] 📂 Loaded 1034 existing routing entries
[2025-12-23T07:37:47.086Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1035
   Timestamp: 2025-12-23T07:37:47.081Z
[2025-12-23T07:37:47.086Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_805c58df.jsonl
[2025-12-23T07:37:47.086Z] [BOT] Total attempts: 2
   Successful: 1
   Failed: 0
   Skipped: 1
[2025-12-23T07:37:47.086Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-23T07:37:47.086Z] [BOT] Last cleanup: Never
   Total posts: 1
   Channels used: 1
   Top channels:
[2025-12-23T07:37:47.086Z] [BOT] 1. #💻・tech-jobs: 1 posts
[2025-12-23T07:37:47.087Z] [BOT] [STATS] Channel stats saved
[2025-12-23T07:37:49.102Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2416) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*