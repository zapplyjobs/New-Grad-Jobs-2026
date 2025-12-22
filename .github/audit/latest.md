# Discord Bot Execution Audit
**Timestamp:** 2025-12-22T08:04:18.856Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-22T08:04:08.391Z] ========================================
[2025-12-22T08:04:08.393Z] Discord Bot Execution Log
[2025-12-22T08:04:08.393Z] Environment: GitHub Actions
[2025-12-22T08:04:08.393Z] Node Version: v20.19.6
[2025-12-22T08:04:08.393Z] ========================================
[2025-12-22T08:04:08.393Z] Environment Variables Check:
[2025-12-22T08:04:08.393Z] DISCORD_TOKEN: ✅ Set
[2025-12-22T08:04:08.393Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-22T08:04:08.393Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-22T08:04:08.393Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-22T08:04:08.393Z] 
Multi-Channel Configuration:
[2025-12-22T08:04:08.393Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-22T08:04:08.394Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-22T08:04:08.394Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-22T08:04:08.394Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-22T08:04:08.394Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-22T08:04:08.394Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-22T08:04:08.394Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-22T08:04:08.394Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-22T08:04:08.394Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-22T08:04:08.394Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-22T08:04:08.394Z] 
Data Files Check:
[2025-12-22T08:04:08.395Z] .github/data/new_jobs.json: ✅ Exists (2 items, 9826 bytes)
[2025-12-22T08:04:08.399Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 535097 bytes)
[2025-12-22T08:04:08.399Z] 
========================================
[2025-12-22T08:04:08.399Z] Starting Enhanced Discord Bot...
[2025-12-22T08:04:08.399Z] ========================================
[2025-12-22T08:04:08.926Z] [BOT] ✅ Loaded V2 database: 914 jobs
[2025-12-22T08:04:09.351Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-22T08:04:09.351Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-22T08:04:09.352Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-22T08:04:09.352Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-22T08:04:09.402Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-22T08:04:09.462Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 163
[2025-12-22T08:04:09.464Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-22T08:04:09.464Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-22T08:04:09.464Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-22T08:04:09.465Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-22T08:04:09.465Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-22T08:04:09.468Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-22T08:04:09.469Z] [BOT] 📍 [ROUTING] "Learning Technology Specialist" @ ORG_e5fcdd7e
[2025-12-22T08:04:09.469Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-22T08:04:09.486Z] [BOT ERROR] (node:2317) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-22T08:04:09.766Z] [BOT] ✅ Created forum post: 🏢 Learning Technology Specialist @ ORG_e5fcdd7e in #📣・marketing-jobs
  ✅ Industry: Learning Technology Specialist @ ORG_e5fcdd7e
[2025-12-22T08:04:11.601Z] [BOT] ✅ Created forum post: 🏢 Learning Technology Specialist @ ORG_e5fcdd7e in #💻・remote-usa
[2025-12-22T08:04:11.601Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-22T08:04:13.103Z] [BOT] 💾 Marked as posted: Learning Technology Specialist @ ORG_e5fcdd7e (instance #1)
[2025-12-22T08:04:13.103Z] [BOT] 💾 BEFORE ARCHIVING: 915 jobs in database
[2025-12-22T08:04:13.104Z] [BOT] ✅ No jobs to archive (all 915 jobs within 7-day window)
[2025-12-22T08:04:13.120Z] [BOT] 💾 Saved posted_jobs.json: 915 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-22T08:04:16.120Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-22T08:04:16.121Z] [BOT] ⏭️  Skipping duplicate: JID_783a782c (posted within 7 days)
[2025-12-22T08:04:16.121Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-22T08:04:16.122Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
[2025-12-22T08:04:16.122Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-22T08:04:16.164Z] [BOT] 📂 Loaded 999 existing routing entries
[2025-12-22T08:04:16.207Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1000
   Timestamp: 2025-12-22T08:04:16.203Z
[2025-12-22T08:04:16.208Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_0b37efa6.jsonl
[2025-12-22T08:04:16.208Z] [BOT] Total attempts: 3
   Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-22T08:04:16.208Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2025-12-22T08:04:16.208Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #📣・marketing-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2025-12-22T08:04:16.209Z] [BOT] [STATS] Channel stats saved
[2025-12-22T08:04:18.219Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2317) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*