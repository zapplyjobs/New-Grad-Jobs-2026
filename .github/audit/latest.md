# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T23:22:54.531Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T23:22:44.432Z] ========================================
[2025-12-02T23:22:44.434Z] Discord Bot Execution Log
[2025-12-02T23:22:44.434Z] Environment: GitHub Actions
[2025-12-02T23:22:44.434Z] Node Version: v20.19.5
[2025-12-02T23:22:44.435Z] ========================================
[2025-12-02T23:22:44.435Z] Environment Variables Check:
[2025-12-02T23:22:44.435Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T23:22:44.435Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T23:22:44.435Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T23:22:44.435Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T23:22:44.435Z] 
Multi-Channel Configuration:
[2025-12-02T23:22:44.435Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T23:22:44.435Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T23:22:44.435Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T23:22:44.435Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T23:22:44.435Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T23:22:44.435Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T23:22:44.436Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T23:22:44.436Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T23:22:44.436Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T23:22:44.436Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T23:22:44.436Z] 
Data Files Check:
[2025-12-02T23:22:44.436Z] .github/data/new_jobs.json: ✅ Exists (2 items, 10694 bytes)
[2025-12-02T23:22:44.438Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333136 bytes)
[2025-12-02T23:22:44.438Z] 
========================================
[2025-12-02T23:22:44.439Z] Starting Enhanced Discord Bot...
[2025-12-02T23:22:44.439Z] ========================================
[2025-12-02T23:22:45.206Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T23:22:45.207Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-12-02T23:22:45.207Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T23:22:45.282Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 2
[2025-12-02T23:22:45.283Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-02T23:22:45.283Z] [BOT] 📬 Found 1 new jobs (1 already posted)...
[2025-12-02T23:22:45.283Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-02T23:22:45.283Z] [BOT] 📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T23:22:45.284Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-02T23:22:45.284Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
[2025-12-02T23:22:45.284Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T23:22:45.289Z] [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T23:22:45.590Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
  ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-02T23:22:47.336Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-02T23:22:48.837Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T23:22:48.838Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T23:22:48.843Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T23:22:48.843Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T23:22:51.844Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-02T23:22:51.882Z] [BOT] 📂 Loaded 629 existing routing entries
[2025-12-02T23:22:51.920Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-12-02T23:22:51.921Z] [BOT] New entries: 1
   Total entries: 630
   Timestamp: 2025-12-02T23:22:51.919Z
[2025-12-02T23:22:53.929Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*