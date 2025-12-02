# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T22:48:39.573Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T22:48:28.515Z] ========================================
[2025-12-02T22:48:28.517Z] Discord Bot Execution Log
[2025-12-02T22:48:28.517Z] Environment: GitHub Actions
[2025-12-02T22:48:28.517Z] Node Version: v20.19.5
[2025-12-02T22:48:28.517Z] ========================================
[2025-12-02T22:48:28.517Z] Environment Variables Check:
[2025-12-02T22:48:28.517Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T22:48:28.518Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T22:48:28.518Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T22:48:28.518Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T22:48:28.518Z] 
Multi-Channel Configuration:
[2025-12-02T22:48:28.518Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T22:48:28.518Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T22:48:28.518Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T22:48:28.518Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T22:48:28.518Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T22:48:28.518Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T22:48:28.518Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T22:48:28.518Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T22:48:28.519Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T22:48:28.519Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T22:48:28.519Z] 
Data Files Check:
[2025-12-02T22:48:28.519Z] .github/data/new_jobs.json: ✅ Exists (2 items, 10694 bytes)
[2025-12-02T22:48:28.521Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333136 bytes)
[2025-12-02T22:48:28.521Z] 
========================================
[2025-12-02T22:48:28.521Z] Starting Enhanced Discord Bot...
[2025-12-02T22:48:28.522Z] ========================================
[2025-12-02T22:48:29.650Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T22:48:29.651Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-12-02T22:48:29.651Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T22:48:29.728Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 2
[2025-12-02T22:48:29.729Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-02T22:48:29.729Z] [BOT] 📬 Found 1 new jobs (1 already posted)...
📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-02T22:48:29.729Z] [BOT] 📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
[2025-12-02T22:48:29.730Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T22:48:29.730Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-02T22:48:29.730Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
[2025-12-02T22:48:29.731Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T22:48:29.735Z] [BOT ERROR] (node:2418) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T22:48:30.272Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
[2025-12-02T22:48:30.272Z] [BOT] ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-02T22:48:32.110Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
[2025-12-02T22:48:32.111Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-02T22:48:33.610Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T22:48:33.611Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T22:48:33.617Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T22:48:33.617Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T22:48:36.618Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-02T22:48:36.618Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-02T22:48:36.658Z] [BOT] 📂 Loaded 627 existing routing entries
[2025-12-02T22:48:36.696Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-02T22:48:36.697Z] [BOT] Total entries: 628
   Timestamp: 2025-12-02T22:48:36.695Z
[2025-12-02T22:48:38.706Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2418) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*