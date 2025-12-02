# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T06:06:20.932Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T06:06:10.012Z] ========================================
[2025-12-02T06:06:10.014Z] Discord Bot Execution Log
[2025-12-02T06:06:10.014Z] Environment: GitHub Actions
[2025-12-02T06:06:10.014Z] Node Version: v20.19.5
[2025-12-02T06:06:10.014Z] ========================================
[2025-12-02T06:06:10.014Z] Environment Variables Check:
[2025-12-02T06:06:10.014Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T06:06:10.014Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T06:06:10.014Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T06:06:10.014Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T06:06:10.014Z] 
Multi-Channel Configuration:
[2025-12-02T06:06:10.015Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T06:06:10.015Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T06:06:10.015Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T06:06:10.015Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T06:06:10.015Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T06:06:10.015Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T06:06:10.015Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T06:06:10.015Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T06:06:10.015Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T06:06:10.015Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T06:06:10.015Z] 
Data Files Check:
[2025-12-02T06:06:10.016Z] .github/data/new_jobs.json: ✅ Exists (1 items, 7021 bytes)
[2025-12-02T06:06:10.018Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332208 bytes)
[2025-12-02T06:06:10.018Z] 
========================================
[2025-12-02T06:06:10.018Z] Starting Enhanced Discord Bot...
[2025-12-02T06:06:10.018Z] ========================================
[2025-12-02T06:06:10.950Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T06:06:10.950Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-02T06:06:10.951Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T06:06:11.032Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-12-02T06:06:11.033Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-02T06:06:11.033Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
[2025-12-02T06:06:11.034Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T06:06:11.034Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-02T06:06:11.034Z] [BOT] 📍 [ROUTING] "Data Scientist - Retail Analytics" @ ORG_6bda74c9 Health
[2025-12-02T06:06:11.035Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T06:06:11.039Z] [BOT ERROR] (node:2296) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T06:06:11.370Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Retail Analytics @ ORG_6bda74c9 Health in #💻・tech-jobs
[2025-12-02T06:06:11.370Z] [BOT] ✅ Industry: Data Scientist - Retail Analytics @ ORG_6bda74c9 Health
[2025-12-02T06:06:13.156Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Retail Analytics @ ORG_6bda74c9 Health in #💻・remote-usa
[2025-12-02T06:06:13.156Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-02T06:06:14.655Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T06:06:14.656Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T06:06:14.661Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T06:06:14.661Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T06:06:17.663Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-02T06:06:17.663Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-02T06:06:17.703Z] [BOT] 📂 Loaded 586 existing routing entries
[2025-12-02T06:06:17.743Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-02T06:06:17.743Z] [BOT] Total entries: 587
   Timestamp: 2025-12-02T06:06:17.741Z
[2025-12-02T06:06:19.751Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2296) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*