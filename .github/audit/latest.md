# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T21:04:13.136Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T21:04:02.554Z] ========================================
[2026-01-01T21:04:02.556Z] Discord Bot Execution Log
[2026-01-01T21:04:02.556Z] Environment: GitHub Actions
[2026-01-01T21:04:02.556Z] Node Version: v20.19.6
[2026-01-01T21:04:02.556Z] ========================================
[2026-01-01T21:04:02.556Z] Environment Variables Check:
[2026-01-01T21:04:02.556Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T21:04:02.556Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T21:04:02.556Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T21:04:02.556Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T21:04:02.556Z] 
Multi-Channel Configuration:
[2026-01-01T21:04:02.556Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T21:04:02.556Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T21:04:02.556Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T21:04:02.556Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T21:04:02.556Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T21:04:02.556Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T21:04:02.556Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T21:04:02.556Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T21:04:02.557Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T21:04:02.557Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T21:04:02.557Z] 
Data Files Check:
[2026-01-01T21:04:02.557Z] .github/data/new_jobs.json: ✅ Exists (1 items, 5614 bytes)
[2026-01-01T21:04:02.557Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 50747 bytes)
[2026-01-01T21:04:02.557Z] 
========================================
[2026-01-01T21:04:02.557Z] Starting Enhanced Discord Bot...
[2026-01-01T21:04:02.557Z] ========================================
[2026-01-01T21:04:03.067Z] [BOT] ✅ Loaded V2 database: 84 jobs
[2026-01-01T21:04:03.742Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T21:04:03.743Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T21:04:03.743Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T21:04:03.743Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-01T21:04:03.841Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 36
[2026-01-01T21:04:03.843Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-01T21:04:03.843Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-01T21:04:03.843Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-01T21:04:03.843Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T21:04:03.846Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-01T21:04:03.847Z] [BOT] 📍 [ROUTING] "Materials Lab Technician" @ ORG_2fa25ffb
[2026-01-01T21:04:03.848Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-01T21:04:03.852Z] [BOT ERROR] (node:2379) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T21:04:04.077Z] [BOT] ✅ Created forum post: 🏢 Materials Lab Technician @ ORG_2fa25ffb in #📣・marketing-jobs
  ✅ Industry: Materials Lab Technician @ ORG_2fa25ffb
[2026-01-01T21:04:05.920Z] [BOT] ✅ Created forum post: 🏢 Materials Lab Technician @ ORG_2fa25ffb in #🦢・los-angeles
[2026-01-01T21:04:05.920Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-01T21:04:07.421Z] [BOT] 💾 Marked as posted: Materials Lab Technician @ ORG_2fa25ffb (instance #1)
[2026-01-01T21:04:07.421Z] [BOT] 💾 BEFORE ARCHIVING: 85 jobs in database
[2026-01-01T21:04:07.422Z] [BOT] ✅ No jobs to archive (all 85 jobs within 7-day window)
[2026-01-01T21:04:07.432Z] [BOT] 💾 Saved posted_jobs.json: 85 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-01T21:04:10.433Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-01T21:04:10.433Z] [BOT] ⏭️  Skipping duplicate: JID_6dabd0c4 (posted within 7 days)
[2026-01-01T21:04:10.433Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-01T21:04:10.434Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2026-01-01T21:04:10.434Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-01T21:04:10.482Z] [BOT] 📂 Loaded 1158 existing routing entries
[2026-01-01T21:04:10.530Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1159
   Timestamp: 2026-01-01T21:04:10.526Z
[2026-01-01T21:04:10.531Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
[2026-01-01T21:04:10.531Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-01T21:04:10.532Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #📣・marketing-jobs: 1 posts
     2. #🦢・los-angeles: 1 posts
[STATS] Channel stats saved
[2026-01-01T21:04:12.543Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2379) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*