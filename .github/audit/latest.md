# Discord Bot Execution Audit
**Timestamp:** 2025-12-30T10:32:31.185Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-30T10:32:19.952Z] ========================================
[2025-12-30T10:32:19.953Z] Discord Bot Execution Log
[2025-12-30T10:32:19.954Z] Environment: GitHub Actions
[2025-12-30T10:32:19.954Z] Node Version: v20.19.6
[2025-12-30T10:32:19.954Z] ========================================
[2025-12-30T10:32:19.954Z] Environment Variables Check:
[2025-12-30T10:32:19.954Z] DISCORD_TOKEN: ✅ Set
[2025-12-30T10:32:19.954Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-30T10:32:19.954Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-30T10:32:19.954Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-30T10:32:19.954Z] 
Multi-Channel Configuration:
[2025-12-30T10:32:19.954Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-30T10:32:19.955Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-30T10:32:19.955Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-30T10:32:19.955Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-30T10:32:19.955Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-30T10:32:19.955Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-30T10:32:19.955Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-30T10:32:19.955Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-30T10:32:19.955Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-30T10:32:19.955Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-30T10:32:19.955Z] 
Data Files Check:
[2025-12-30T10:32:19.956Z] .github/data/new_jobs.json: ✅ Exists (1 items, 4021 bytes)
[2025-12-30T10:32:19.956Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 42735 bytes)
[2025-12-30T10:32:19.956Z] 
========================================
[2025-12-30T10:32:19.956Z] Starting Enhanced Discord Bot...
[2025-12-30T10:32:19.956Z] ========================================
[2025-12-30T10:32:20.487Z] [BOT] ✅ Loaded V2 database: 70 jobs
[2025-12-30T10:32:21.166Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-30T10:32:21.166Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-30T10:32:21.167Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-30T10:32:21.167Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2025-12-30T10:32:21.214Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-30T10:32:21.267Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 52
[2025-12-30T10:32:21.268Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-30T10:32:21.268Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-30T10:32:21.268Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-30T10:32:21.269Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-30T10:32:21.269Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-30T10:32:21.270Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-30T10:32:21.271Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_a856179e
[2025-12-30T10:32:21.271Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-30T10:32:21.288Z] [BOT ERROR] (node:2306) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-30T10:32:21.903Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_a856179e in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_a856179e
[2025-12-30T10:32:23.776Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_a856179e in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-30T10:32:25.277Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_a856179e (instance #1)
[2025-12-30T10:32:25.278Z] [BOT] 💾 BEFORE ARCHIVING: 71 jobs in database
[2025-12-30T10:32:25.278Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-30T10:32:25.291Z] [BOT] 📦 Archived 2 jobs to 2025-12.json (2 total in archive)
[2025-12-30T10:32:25.291Z] [BOT] ✅ Archiving complete: 2 archived, 69 active
[2025-12-30T10:32:25.292Z] [BOT] 💾 Saved posted_jobs.json: 69 active jobs
[2025-12-30T10:32:25.292Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-30T10:32:28.293Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-30T10:32:28.294Z] [BOT] ⏭️  Skipping duplicate: JID_0562e194 (posted within 7 days)
[2025-12-30T10:32:28.294Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2025-12-30T10:32:28.295Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2025-12-30T10:32:28.295Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-30T10:32:28.337Z] [BOT] 📂 Loaded 1103 existing routing entries
[2025-12-30T10:32:28.381Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-30T10:32:28.382Z] [BOT] Total entries: 1104
   Timestamp: 2025-12-30T10:32:28.376Z
[2025-12-30T10:32:28.382Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c55b425b.jsonl
[2025-12-30T10:32:28.382Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2025-12-30T10:32:28.382Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-30T10:32:28.382Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2025-12-30T10:32:28.383Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2025-12-30T10:32:28.383Z] [BOT] [STATS] Channel stats saved
[2025-12-30T10:32:30.395Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2306) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*