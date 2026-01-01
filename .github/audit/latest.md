# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T09:39:51.735Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T09:39:41.397Z] ========================================
[2026-01-01T09:39:41.399Z] Discord Bot Execution Log
[2026-01-01T09:39:41.399Z] Environment: GitHub Actions
[2026-01-01T09:39:41.399Z] Node Version: v20.19.6
[2026-01-01T09:39:41.399Z] ========================================
[2026-01-01T09:39:41.399Z] Environment Variables Check:
[2026-01-01T09:39:41.399Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T09:39:41.400Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T09:39:41.400Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T09:39:41.400Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T09:39:41.400Z] 
Multi-Channel Configuration:
[2026-01-01T09:39:41.400Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T09:39:41.400Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T09:39:41.400Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T09:39:41.400Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T09:39:41.400Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T09:39:41.400Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T09:39:41.400Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T09:39:41.400Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T09:39:41.401Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T09:39:41.401Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T09:39:41.401Z] 
Data Files Check:
[2026-01-01T09:39:41.401Z] .github/data/new_jobs.json: ✅ Exists (1 items, 5307 bytes)
[2026-01-01T09:39:41.402Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 31188 bytes)
[2026-01-01T09:39:41.402Z] 
========================================
[2026-01-01T09:39:41.402Z] Starting Enhanced Discord Bot...
[2026-01-01T09:39:41.402Z] ========================================
[2026-01-01T09:39:41.915Z] [BOT] ✅ Loaded V2 database: 53 jobs
[2026-01-01T09:39:42.316Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T09:39:42.317Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T09:39:42.317Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T09:39:42.317Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-01T09:39:42.359Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-01T09:39:42.403Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 33
[2026-01-01T09:39:42.404Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-01T09:39:42.404Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-01T09:39:42.405Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-01T09:39:42.406Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T09:39:42.408Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-01T09:39:42.409Z] [BOT] 📍 [ROUTING] "Marketing Science Analyst - February 16th - 2026 Start" @ ORG_a7dddf79 Partners
[2026-01-01T09:39:42.409Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-01T09:39:42.426Z] [BOT ERROR] (node:2463) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T09:39:42.665Z] [BOT] ✅ Created forum post: 🏢 Marketing Science Analyst - February 16th - 2026 Start @ ORG_a7dddf79 Partners in #📣・marketing-jobs
[2026-01-01T09:39:42.666Z] [BOT] ✅ Industry: Marketing Science Analyst - February 16th - 2026 Start @ ORG_a7dddf79 Partners
[2026-01-01T09:39:44.436Z] [BOT] ✅ Created forum post: 🏢 Marketing Science Analyst - February 16th - 2026 Start @ ORG_a7dddf79 Partners in #🗽・new-york
[2026-01-01T09:39:44.437Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-01T09:39:45.937Z] [BOT] 💾 Marked as posted: Marketing Science Analyst - February 16th - 2026 Start @ ORG_a7dddf79 Partners (instance #1)
[2026-01-01T09:39:45.937Z] [BOT] 💾 BEFORE ARCHIVING: 54 jobs in database
[2026-01-01T09:39:45.938Z] [BOT] ✅ No jobs to archive (all 54 jobs within 7-day window)
[2026-01-01T09:39:45.943Z] [BOT] 💾 Saved posted_jobs.json: 54 active jobs
[2026-01-01T09:39:45.943Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T09:39:48.944Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-01T09:39:48.944Z] [BOT] ⏭️  Skipping duplicate: JID_1defcaff (posted within 7 days)
[2026-01-01T09:39:48.945Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-01T09:39:48.945Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-01T09:39:48.988Z] [BOT] 📂 Loaded 1126 existing routing entries
[2026-01-01T09:39:49.032Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-01T09:39:49.032Z] [BOT] Total entries: 1127
   Timestamp: 2026-01-01T09:39:49.027Z
[2026-01-01T09:39:49.032Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
[2026-01-01T09:39:49.032Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-01T09:39:49.032Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-01T09:39:49.033Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-01T09:39:49.033Z] [BOT] 1. #📣・marketing-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-01T09:39:49.033Z] [BOT] [STATS] Channel stats saved
[2026-01-01T09:39:51.043Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2463) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*