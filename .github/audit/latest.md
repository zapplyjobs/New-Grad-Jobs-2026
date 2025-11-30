# Discord Bot Execution Audit
**Timestamp:** 2025-11-30T07:33:18.474Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-30T07:33:07.369Z] ========================================
[2025-11-30T07:33:07.371Z] Discord Bot Execution Log
[2025-11-30T07:33:07.371Z] Environment: GitHub Actions
[2025-11-30T07:33:07.371Z] Node Version: v20.19.5
[2025-11-30T07:33:07.371Z] ========================================
[2025-11-30T07:33:07.371Z] Environment Variables Check:
[2025-11-30T07:33:07.371Z] DISCORD_TOKEN: ✅ Set
[2025-11-30T07:33:07.371Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-30T07:33:07.371Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-30T07:33:07.371Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-30T07:33:07.371Z] 
Multi-Channel Configuration:
[2025-11-30T07:33:07.372Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-30T07:33:07.372Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-30T07:33:07.372Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-30T07:33:07.372Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-30T07:33:07.372Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-30T07:33:07.372Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-30T07:33:07.372Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-30T07:33:07.372Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-30T07:33:07.372Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-30T07:33:07.372Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-30T07:33:07.372Z] 
Data Files Check:
[2025-11-30T07:33:07.373Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6293 bytes)
[2025-11-30T07:33:07.375Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330696 bytes)
[2025-11-30T07:33:07.375Z] 
========================================
[2025-11-30T07:33:07.375Z] Starting Enhanced Discord Bot...
[2025-11-30T07:33:07.375Z] ========================================
[2025-11-30T07:33:08.466Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-30T07:33:08.466Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-30T07:33:08.467Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-30T07:33:08.546Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-11-30T07:33:08.546Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-11-30T07:33:08.547Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
[2025-11-30T07:33:08.547Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-30T07:33:08.548Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-30T07:33:08.548Z] [BOT] 📍 [ROUTING] "Data Analyst 1" @ ORG_2a78025d Milk Producers
[2025-11-30T07:33:08.548Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-30T07:33:08.553Z] [BOT ERROR] (node:2298) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-30T07:33:08.878Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_2a78025d Milk Producers  in #💻・tech-jobs
  ✅ Industry: Data Analyst 1 @ ORG_2a78025d Milk Producers
[2025-11-30T07:33:10.611Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_2a78025d Milk Producers  in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-30T07:33:12.111Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-30T07:33:12.112Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-30T07:33:12.118Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-30T07:33:12.118Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-30T07:33:15.119Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-30T07:33:15.158Z] [BOT] 📂 Loaded 540 existing routing entries
[2025-11-30T07:33:15.197Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 541
[2025-11-30T07:33:15.197Z] [BOT] Timestamp: 2025-11-30T07:33:15.196Z
[2025-11-30T07:33:17.206Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2298) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*