# Discord Bot Execution Audit
**Timestamp:** 2025-11-29T03:09:29.259Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-29T03:09:20.230Z] ========================================
[2025-11-29T03:09:20.232Z] Discord Bot Execution Log
[2025-11-29T03:09:20.232Z] Environment: GitHub Actions
[2025-11-29T03:09:20.232Z] Node Version: v20.19.5
[2025-11-29T03:09:20.232Z] ========================================
[2025-11-29T03:09:20.232Z] Environment Variables Check:
[2025-11-29T03:09:20.232Z] DISCORD_TOKEN: ✅ Set
[2025-11-29T03:09:20.232Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-29T03:09:20.232Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-29T03:09:20.233Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-29T03:09:20.233Z] 
Multi-Channel Configuration:
[2025-11-29T03:09:20.233Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-29T03:09:20.233Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-29T03:09:20.233Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-29T03:09:20.233Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-29T03:09:20.233Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-29T03:09:20.233Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-29T03:09:20.233Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-29T03:09:20.233Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-29T03:09:20.233Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-29T03:09:20.233Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-29T03:09:20.233Z] 
Data Files Check:
[2025-11-29T03:09:20.234Z] .github/data/new_jobs.json: ✅ Exists (1 items, 4713 bytes)
[2025-11-29T03:09:20.236Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330629 bytes)
[2025-11-29T03:09:20.236Z] 
========================================
[2025-11-29T03:09:20.236Z] Starting Enhanced Discord Bot...
[2025-11-29T03:09:20.236Z] ========================================
[2025-11-29T03:09:21.336Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-29T03:09:21.337Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-29T03:09:21.337Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-29T03:09:21.413Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-11-29T03:09:21.414Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-11-29T03:09:21.414Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
[2025-11-29T03:09:21.414Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-29T03:09:21.415Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-29T03:09:21.415Z] [BOT] 📍 [ROUTING] "Application Developer" @ ORG_6bda74c9 Health
[2025-11-29T03:09:21.415Z] [BOT] Category: TECH (matched: "software")
[2025-11-29T03:09:21.415Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-29T03:09:21.420Z] [BOT ERROR] (node:2400) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-29T03:09:21.612Z] [BOT] ✅ Created forum post: 🏢 Application Developer @ ORG_6bda74c9 Health in #💻・tech-jobs
  ✅ Industry: Application Developer @ ORG_6bda74c9 Health
[2025-11-29T03:09:23.114Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-29T03:09:23.115Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-29T03:09:23.121Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-29T03:09:23.121Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-29T03:09:26.122Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-29T03:09:26.160Z] [BOT] 📂 Loaded 539 existing routing entries
[2025-11-29T03:09:26.198Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 540
   Timestamp: 2025-11-29T03:09:26.196Z
[2025-11-29T03:09:28.208Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2400) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*