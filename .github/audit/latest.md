# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T02:39:36.944Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T02:39:26.486Z] ========================================
[2026-01-02T02:39:26.487Z] Discord Bot Execution Log
[2026-01-02T02:39:26.488Z] Environment: GitHub Actions
[2026-01-02T02:39:26.488Z] Node Version: v20.19.6
[2026-01-02T02:39:26.488Z] ========================================
[2026-01-02T02:39:26.488Z] Environment Variables Check:
[2026-01-02T02:39:26.488Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T02:39:26.488Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T02:39:26.488Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T02:39:26.488Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T02:39:26.488Z] 
Multi-Channel Configuration:
[2026-01-02T02:39:26.488Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T02:39:26.488Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T02:39:26.489Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T02:39:26.489Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T02:39:26.489Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T02:39:26.489Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T02:39:26.489Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T02:39:26.489Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T02:39:26.489Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T02:39:26.489Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T02:39:26.489Z] 
Data Files Check:
[2026-01-02T02:39:26.490Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6294 bytes)
[2026-01-02T02:39:26.490Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 61422 bytes)
[2026-01-02T02:39:26.490Z] 
========================================
[2026-01-02T02:39:26.490Z] Starting Enhanced Discord Bot...
[2026-01-02T02:39:26.490Z] ========================================
[2026-01-02T02:39:27.021Z] [BOT] ✅ Loaded V2 database: 102 jobs
[2026-01-02T02:39:27.493Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T02:39:27.493Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T02:39:27.494Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T02:39:27.494Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-02T02:39:27.538Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-02T02:39:27.587Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 39
[2026-01-02T02:39:27.588Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-02T02:39:27.588Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-02T02:39:27.589Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-02T02:39:27.589Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-02T02:39:27.589Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T02:39:27.590Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-02T02:39:27.591Z] [BOT] 📍 [ROUTING] "Digital Marketing Analyst 1" @ ORG_83f14822
[2026-01-02T02:39:27.592Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-02T02:39:27.596Z] [BOT ERROR] (node:2373) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T02:39:27.913Z] [BOT] ✅ Created forum post: 🏢 Digital Marketing Analyst 1 @ ORG_83f14822 in #💻・tech-jobs
  ✅ Industry: Digital Marketing Analyst 1 @ ORG_83f14822
[2026-01-02T02:39:29.627Z] [BOT] ✅ Created forum post: 🏢 Digital Marketing Analyst 1 @ ORG_83f14822 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-02T02:39:31.128Z] [BOT] 💾 Marked as posted: Digital Marketing Analyst 1 @ ORG_83f14822 (instance #1)
[2026-01-02T02:39:31.129Z] [BOT] 💾 BEFORE ARCHIVING: 103 jobs in database
[2026-01-02T02:39:31.129Z] [BOT] ✅ No jobs to archive (all 103 jobs within 7-day window)
[2026-01-02T02:39:31.139Z] [BOT] 💾 Saved posted_jobs.json: 103 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-02T02:39:34.140Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-02T02:39:34.140Z] [BOT] ⏭️  Skipping duplicate: JID_5f6db3d5 (posted within 7 days)
[2026-01-02T02:39:34.141Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-02T02:39:34.141Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-02T02:39:34.142Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-02T02:39:34.184Z] [BOT] 📂 Loaded 1174 existing routing entries
[2026-01-02T02:39:34.228Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1175
   Timestamp: 2026-01-02T02:39:34.223Z
[2026-01-02T02:39:34.229Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
   Total attempts: 2
[2026-01-02T02:39:34.229Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-02T02:39:34.229Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-02T02:39:34.229Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-02T02:39:34.230Z] [BOT] [STATS] Channel stats saved
[2026-01-02T02:39:36.239Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2373) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*