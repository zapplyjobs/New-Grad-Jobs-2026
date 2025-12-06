# Discord Bot Execution Audit
**Timestamp:** 2025-12-06T23:04:39.126Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-06T23:04:28.122Z] ========================================
[2025-12-06T23:04:28.124Z] Discord Bot Execution Log
[2025-12-06T23:04:28.124Z] Environment: GitHub Actions
[2025-12-06T23:04:28.124Z] Node Version: v20.19.6
[2025-12-06T23:04:28.124Z] ========================================
[2025-12-06T23:04:28.124Z] Environment Variables Check:
[2025-12-06T23:04:28.125Z] DISCORD_TOKEN: ✅ Set
[2025-12-06T23:04:28.125Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-06T23:04:28.125Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-06T23:04:28.125Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-06T23:04:28.125Z] 
Multi-Channel Configuration:
[2025-12-06T23:04:28.125Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-06T23:04:28.125Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-06T23:04:28.125Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-06T23:04:28.125Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-06T23:04:28.125Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-06T23:04:28.125Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-06T23:04:28.126Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-06T23:04:28.126Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-06T23:04:28.126Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-06T23:04:28.126Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-06T23:04:28.126Z] 
Data Files Check:
[2025-12-06T23:04:28.126Z] .github/data/new_jobs.json: ✅ Exists (1 items, 17275 bytes)
[2025-12-06T23:04:28.127Z] .github/data/posted_jobs.json: ✅ Exists (77 items, 7542 bytes)
[2025-12-06T23:04:28.127Z] 
========================================
[2025-12-06T23:04:28.127Z] Starting Enhanced Discord Bot...
[2025-12-06T23:04:28.127Z] ========================================
[2025-12-06T23:04:29.504Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-06T23:04:29.505Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-06T23:04:29.505Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-06T23:04:29.732Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 330
[2025-12-06T23:04:29.734Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-06T23:04:29.734Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-06T23:04:29.735Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
📍 [ROUTING] "Data Scientist - New College Grad" @ ORG_0c79a9c2 Materials
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...1106)
[2025-12-06T23:04:29.740Z] [BOT ERROR] (node:2372) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-06T23:04:29.905Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - New College Grad @ ORG_0c79a9c2 Materials in #ai-jobs
[2025-12-06T23:04:29.906Z] [BOT] ✅ Industry: Data Scientist - New College Grad @ ORG_0c79a9c2 Materials
[2025-12-06T23:04:31.712Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - New College Grad @ ORG_0c79a9c2 Materials in #🌉・san-francisco
[2025-12-06T23:04:31.712Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-06T23:04:33.211Z] [BOT] 💾 BEFORE SAVE: Database has 78 jobs
[2025-12-06T23:04:33.218Z] [BOT] 💾 Saved 78 posted jobs to database
[2025-12-06T23:04:33.219Z] [BOT] ✅ Verified: Database file contains 78 jobs
[2025-12-06T23:04:36.220Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-06T23:04:36.220Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2025-12-06T23:04:36.221Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2025-12-06T23:04:36.221Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-06T23:04:36.258Z] [BOT] 📂 Loaded 188 existing routing entries
[2025-12-06T23:04:36.294Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-06T23:04:36.294Z] [BOT] Total entries: 189
   Timestamp: 2025-12-06T23:04:36.293Z
[2025-12-06T23:04:38.304Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2372) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*