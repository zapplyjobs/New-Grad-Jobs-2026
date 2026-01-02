# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T04:45:50.444Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T04:45:38.417Z] ========================================
[2026-01-02T04:45:38.419Z] Discord Bot Execution Log
[2026-01-02T04:45:38.419Z] Environment: GitHub Actions
[2026-01-02T04:45:38.420Z] Node Version: v20.19.6
[2026-01-02T04:45:38.420Z] ========================================
[2026-01-02T04:45:38.420Z] Environment Variables Check:
[2026-01-02T04:45:38.420Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T04:45:38.420Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T04:45:38.420Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T04:45:38.420Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T04:45:38.420Z] 
Multi-Channel Configuration:
[2026-01-02T04:45:38.420Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T04:45:38.420Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T04:45:38.420Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T04:45:38.421Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T04:45:38.421Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T04:45:38.421Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T04:45:38.421Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T04:45:38.421Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T04:45:38.421Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T04:45:38.421Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T04:45:38.421Z] 
Data Files Check:
[2026-01-02T04:45:38.421Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6344 bytes)
[2026-01-02T04:45:38.422Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 62486 bytes)
[2026-01-02T04:45:38.422Z] 
========================================
[2026-01-02T04:45:38.422Z] Starting Enhanced Discord Bot...
[2026-01-02T04:45:38.422Z] ========================================
[2026-01-02T04:45:38.938Z] [BOT] ✅ Loaded V2 database: 104 jobs
[2026-01-02T04:45:40.615Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T04:45:40.615Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T04:45:40.615Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T04:45:40.616Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-02T04:45:40.658Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-02T04:45:40.702Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 39
[2026-01-02T04:45:40.703Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-02T04:45:40.703Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-02T04:45:40.703Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-02T04:45:40.703Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-02T04:45:40.704Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T04:45:40.706Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-02T04:45:40.710Z] [BOT] 📍 [ROUTING] "FTIR Field Scientist - Air Emissions" @ ORG_0ac6b9bc Environmental Group
[2026-01-02T04:45:40.710Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-02T04:45:40.727Z] [BOT ERROR] (node:2409) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T04:45:40.951Z] [BOT] ✅ Created forum post: 🏢 FTIR Field Scientist - Air Emissions @ ORG_0ac6b9bc Environmental Group in #📣・marketing-jobs
  ✅ Industry: FTIR Field Scientist - Air Emissions @ ORG_0ac6b9bc Environmental Group
[2026-01-02T04:45:42.828Z] [BOT] ✅ Created forum post: 🏢 FTIR Field Scientist - Air Emissions @ ORG_0ac6b9bc Environmental Group in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-02T04:45:44.329Z] [BOT] 💾 Marked as posted: FTIR Field Scientist - Air Emissions @ ORG_0ac6b9bc Environmental Group (instance #1)
[2026-01-02T04:45:44.329Z] [BOT] 💾 BEFORE ARCHIVING: 105 jobs in database
[2026-01-02T04:45:44.330Z] [BOT] ✅ No jobs to archive (all 105 jobs within 7-day window)
[2026-01-02T04:45:44.335Z] [BOT] 💾 Saved posted_jobs.json: 105 active jobs
[2026-01-02T04:45:44.335Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T04:45:47.335Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-02T04:45:47.335Z] [BOT] ⏭️  Skipping duplicate: JID_8a21a0c2-_r7552 (posted within 7 days)
[2026-01-02T04:45:47.336Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-02T04:45:47.336Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2026-01-02T04:45:47.336Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-02T04:45:47.379Z] [BOT] 📂 Loaded 1176 existing routing entries
[2026-01-02T04:45:47.425Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-02T04:45:47.426Z] [BOT] Total entries: 1177
   Timestamp: 2026-01-02T04:45:47.420Z
[2026-01-02T04:45:47.426Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
   Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-02T04:45:47.426Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #📣・marketing-jobs: 1 posts
     2. #🌆・chicago: 1 posts
[2026-01-02T04:45:47.427Z] [BOT] [STATS] Channel stats saved
[2026-01-02T04:45:49.437Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2409) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*