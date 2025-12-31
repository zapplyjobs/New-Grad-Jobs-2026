# Discord Bot Execution Audit
**Timestamp:** 2025-12-31T07:38:04.839Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-31T07:37:54.703Z] ========================================
[2025-12-31T07:37:54.705Z] Discord Bot Execution Log
[2025-12-31T07:37:54.705Z] Environment: GitHub Actions
[2025-12-31T07:37:54.705Z] Node Version: v20.19.6
[2025-12-31T07:37:54.705Z] ========================================
[2025-12-31T07:37:54.705Z] Environment Variables Check:
[2025-12-31T07:37:54.705Z] DISCORD_TOKEN: ✅ Set
[2025-12-31T07:37:54.706Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-31T07:37:54.706Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-31T07:37:54.706Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-31T07:37:54.706Z] 
Multi-Channel Configuration:
[2025-12-31T07:37:54.706Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-31T07:37:54.706Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-31T07:37:54.706Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-31T07:37:54.706Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-31T07:37:54.706Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-31T07:37:54.706Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-31T07:37:54.706Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-31T07:37:54.706Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-31T07:37:54.707Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-31T07:37:54.707Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-31T07:37:54.707Z] 
Data Files Check:
[2025-12-31T07:37:54.707Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6833 bytes)
[2025-12-31T07:37:54.708Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 37038 bytes)
[2025-12-31T07:37:54.708Z] 
========================================
[2025-12-31T07:37:54.708Z] Starting Enhanced Discord Bot...
[2025-12-31T07:37:54.708Z] ========================================
[2025-12-31T07:37:55.219Z] [BOT] ✅ Loaded V2 database: 61 jobs
[2025-12-31T07:37:55.695Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-31T07:37:55.696Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-31T07:37:55.696Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-31T07:37:55.697Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2025-12-31T07:37:55.783Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 32
[2025-12-31T07:37:55.784Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-31T07:37:55.784Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-31T07:37:55.784Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-31T07:37:55.785Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-31T07:37:55.785Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-31T07:37:55.786Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-31T07:37:55.787Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_fb8c4aa0
[2025-12-31T07:37:55.787Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-31T07:37:55.792Z] [BOT ERROR] (node:2447) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-31T07:37:55.928Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_fb8c4aa0 in #💻・tech-jobs
[2025-12-31T07:37:55.928Z] [BOT] ✅ Industry: Software Engineer @ ORG_fb8c4aa0
[2025-12-31T07:37:57.612Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_fb8c4aa0 in #🦢・los-angeles
[2025-12-31T07:37:57.613Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-31T07:37:59.114Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_fb8c4aa0 (instance #1)
[2025-12-31T07:37:59.114Z] [BOT] 💾 BEFORE ARCHIVING: 62 jobs in database
[2025-12-31T07:37:59.115Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-31T07:37:59.121Z] [BOT] 📦 Archived 7 jobs to 2025-12.json (7 total in archive)
[2025-12-31T07:37:59.121Z] [BOT] ✅ Archiving complete: 7 archived, 55 active
[2025-12-31T07:37:59.123Z] [BOT] 💾 Saved posted_jobs.json: 55 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-31T07:38:02.123Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-31T07:38:02.123Z] [BOT] ⏭️  Skipping duplicate: JID_3d43dd17-engineer_2533374 (posted within 7 days)
[2025-12-31T07:38:02.124Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2025-12-31T07:38:02.124Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2025-12-31T07:38:02.125Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-31T07:38:02.167Z] [BOT] 📂 Loaded 1114 existing routing entries
[2025-12-31T07:38:02.211Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1115
   Timestamp: 2025-12-31T07:38:02.206Z
[2025-12-31T07:38:02.212Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_28858bfe.jsonl
   Total attempts: 2
[2025-12-31T07:38:02.212Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 0
[2025-12-31T07:38:02.212Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-31T07:38:02.212Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2025-12-31T07:38:02.212Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #🦢・los-angeles: 1 posts
[2025-12-31T07:38:02.213Z] [BOT] [STATS] Channel stats saved
[2025-12-31T07:38:04.222Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2447) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*