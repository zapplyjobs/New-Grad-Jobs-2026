# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T06:44:43.896Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T06:44:32.947Z] ========================================
[2025-12-02T06:44:32.949Z] Discord Bot Execution Log
[2025-12-02T06:44:32.949Z] Environment: GitHub Actions
[2025-12-02T06:44:32.949Z] Node Version: v20.19.5
[2025-12-02T06:44:32.950Z] ========================================
[2025-12-02T06:44:32.950Z] Environment Variables Check:
[2025-12-02T06:44:32.950Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T06:44:32.950Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T06:44:32.950Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T06:44:32.950Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T06:44:32.950Z] 
Multi-Channel Configuration:
[2025-12-02T06:44:32.950Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T06:44:32.950Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T06:44:32.951Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T06:44:32.951Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T06:44:32.951Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T06:44:32.951Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T06:44:32.951Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T06:44:32.951Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T06:44:32.951Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T06:44:32.951Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T06:44:32.951Z] 
Data Files Check:
[2025-12-02T06:44:32.951Z] .github/data/new_jobs.json: ✅ Exists (1 items, 4993 bytes)
[2025-12-02T06:44:32.953Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332255 bytes)
[2025-12-02T06:44:32.953Z] 
========================================
[2025-12-02T06:44:32.953Z] Starting Enhanced Discord Bot...
[2025-12-02T06:44:32.953Z] ========================================
[2025-12-02T06:44:33.934Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T06:44:33.934Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-02T06:44:33.935Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T06:44:34.015Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-12-02T06:44:34.015Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-02T06:44:34.016Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-02T06:44:34.016Z] [BOT] 📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T06:44:34.017Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-02T06:44:34.017Z] [BOT] 📍 [ROUTING] "Sustainability Engineer" @ ORG_271c5356 Global
[2025-12-02T06:44:34.017Z] [BOT] Category: TECH (matched: "engineer/engineering")
[2025-12-02T06:44:34.018Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T06:44:34.022Z] [BOT ERROR] (node:2303) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T06:44:34.343Z] [BOT] ✅ Created forum post: 🏢 Sustainability Engineer @ ORG_271c5356 Global in #💻・tech-jobs
  ✅ Industry: Sustainability Engineer @ ORG_271c5356 Global
[2025-12-02T06:44:36.102Z] [BOT] ✅ Created forum post: 🏢 Sustainability Engineer @ ORG_271c5356 Global in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-02T06:44:37.603Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T06:44:37.603Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T06:44:37.608Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T06:44:37.609Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T06:44:40.610Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-02T06:44:40.649Z] [BOT] 📂 Loaded 588 existing routing entries
[2025-12-02T06:44:40.688Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 589
[2025-12-02T06:44:40.689Z] [BOT] Timestamp: 2025-12-02T06:44:40.687Z
[2025-12-02T06:44:42.698Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2303) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*