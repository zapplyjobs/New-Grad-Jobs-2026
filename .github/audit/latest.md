# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T00:09:36.637Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T00:09:26.250Z] ========================================
[2026-01-02T00:09:26.252Z] Discord Bot Execution Log
[2026-01-02T00:09:26.252Z] Environment: GitHub Actions
[2026-01-02T00:09:26.253Z] Node Version: v20.19.6
[2026-01-02T00:09:26.253Z] ========================================
[2026-01-02T00:09:26.253Z] Environment Variables Check:
[2026-01-02T00:09:26.253Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T00:09:26.253Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T00:09:26.253Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T00:09:26.253Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T00:09:26.253Z] 
Multi-Channel Configuration:
[2026-01-02T00:09:26.253Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T00:09:26.253Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T00:09:26.254Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T00:09:26.254Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T00:09:26.254Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T00:09:26.254Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T00:09:26.254Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T00:09:26.254Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T00:09:26.254Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T00:09:26.254Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T00:09:26.254Z] 
Data Files Check:
[2026-01-02T00:09:26.255Z] .github/data/new_jobs.json: ✅ Exists (1 items, 4217 bytes)
[2026-01-02T00:09:26.255Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 55930 bytes)
[2026-01-02T00:09:26.255Z] 
========================================
[2026-01-02T00:09:26.255Z] Starting Enhanced Discord Bot...
[2026-01-02T00:09:26.255Z] ========================================
[2026-01-02T00:09:26.790Z] [BOT] ✅ Loaded V2 database: 93 jobs
[2026-01-02T00:09:27.250Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T00:09:27.250Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T00:09:27.250Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T00:09:27.250Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-02T00:09:27.300Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-02T00:09:27.345Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 38
[2026-01-02T00:09:27.346Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-02T00:09:27.347Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-02T00:09:27.347Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-02T00:09:27.347Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-02T00:09:27.348Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T00:09:27.353Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-02T00:09:27.354Z] [BOT] 📍 [ROUTING] "Early-Career Geologist or Hydrogeologist" @ ORG_77d789fe Consultants
[2026-01-02T00:09:27.354Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-02T00:09:27.371Z] [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T00:09:27.589Z] [BOT] ✅ Created forum post: 🏢 Early-Career Geologist or Hydrogeologist @ ORG_77d789fe Consultants in #🩺・healthcare-jobs
[2026-01-02T00:09:27.589Z] [BOT] ✅ Industry: Early-Career Geologist or Hydrogeologist @ ORG_77d789fe Consultants
[2026-01-02T00:09:29.279Z] [BOT] ✅ Created forum post: 🏢 Early-Career Geologist or Hydrogeologist @ ORG_77d789fe Consultants in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-02T00:09:30.781Z] [BOT] 💾 Marked as posted: Early-Career Geologist or Hydrogeologist @ ORG_77d789fe Consultants (instance #1)
[2026-01-02T00:09:30.781Z] [BOT] 💾 BEFORE ARCHIVING: 94 jobs in database
[2026-01-02T00:09:30.781Z] [BOT] ✅ No jobs to archive (all 94 jobs within 7-day window)
[2026-01-02T00:09:30.799Z] [BOT] 💾 Saved posted_jobs.json: 94 active jobs
[2026-01-02T00:09:30.799Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T00:09:33.800Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-02T00:09:33.800Z] [BOT] ⏭️  Skipping duplicate: JID_e95cc55e (posted within 7 days)
[2026-01-02T00:09:33.801Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-02T00:09:33.801Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2026-01-02T00:09:33.801Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-02T00:09:33.844Z] [BOT] 📂 Loaded 1166 existing routing entries
[2026-01-02T00:09:33.889Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-02T00:09:33.889Z] [BOT] Total entries: 1167
   Timestamp: 2026-01-02T00:09:33.884Z
[2026-01-02T00:09:33.890Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
[2026-01-02T00:09:33.890Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-02T00:09:33.890Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-02T00:09:33.890Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #🩺・healthcare-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-02T00:09:33.890Z] [BOT] [STATS] Channel stats saved
[2026-01-02T00:09:35.901Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*