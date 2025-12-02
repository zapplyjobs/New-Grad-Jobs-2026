# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T06:57:43.727Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T06:57:32.965Z] ========================================
[2025-12-02T06:57:32.967Z] Discord Bot Execution Log
[2025-12-02T06:57:32.967Z] Environment: GitHub Actions
[2025-12-02T06:57:32.967Z] Node Version: v20.19.5
[2025-12-02T06:57:32.967Z] ========================================
[2025-12-02T06:57:32.967Z] Environment Variables Check:
[2025-12-02T06:57:32.967Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T06:57:32.968Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T06:57:32.968Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T06:57:32.968Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T06:57:32.968Z] 
Multi-Channel Configuration:
[2025-12-02T06:57:32.968Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T06:57:32.968Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T06:57:32.968Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T06:57:32.968Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T06:57:32.968Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T06:57:32.968Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T06:57:32.968Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T06:57:32.968Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T06:57:32.969Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T06:57:32.969Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T06:57:32.969Z] 
Data Files Check:
[2025-12-02T06:57:32.969Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6155 bytes)
[2025-12-02T06:57:32.971Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332301 bytes)
[2025-12-02T06:57:32.971Z] 
========================================
[2025-12-02T06:57:32.971Z] Starting Enhanced Discord Bot...
[2025-12-02T06:57:32.971Z] ========================================
[2025-12-02T06:57:33.928Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T06:57:33.929Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-02T06:57:33.929Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T06:57:34.005Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-12-02T06:57:34.006Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-02T06:57:34.006Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
[2025-12-02T06:57:34.006Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T06:57:34.007Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-02T06:57:34.007Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
[2025-12-02T06:57:34.007Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T06:57:34.012Z] [BOT ERROR] (node:2309) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T06:57:34.214Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
[2025-12-02T06:57:34.215Z] [BOT] ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-02T06:57:35.895Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-02T06:57:37.395Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T06:57:37.396Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T06:57:37.401Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T06:57:37.401Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T06:57:40.401Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-02T06:57:40.440Z] [BOT] 📂 Loaded 589 existing routing entries
[2025-12-02T06:57:40.479Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-02T06:57:40.479Z] [BOT] Total entries: 590
   Timestamp: 2025-12-02T06:57:40.477Z
[2025-12-02T06:57:42.487Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2309) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*