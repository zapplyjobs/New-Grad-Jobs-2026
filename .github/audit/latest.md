# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T22:36:32.153Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T22:36:21.212Z] ========================================
[2025-12-02T22:36:21.214Z] Discord Bot Execution Log
[2025-12-02T22:36:21.214Z] Environment: GitHub Actions
[2025-12-02T22:36:21.214Z] Node Version: v20.19.5
[2025-12-02T22:36:21.214Z] ========================================
[2025-12-02T22:36:21.214Z] Environment Variables Check:
[2025-12-02T22:36:21.214Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T22:36:21.214Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T22:36:21.214Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T22:36:21.214Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T22:36:21.214Z] 
Multi-Channel Configuration:
[2025-12-02T22:36:21.214Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T22:36:21.215Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T22:36:21.215Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T22:36:21.215Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T22:36:21.215Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T22:36:21.215Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T22:36:21.215Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T22:36:21.215Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T22:36:21.215Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T22:36:21.215Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T22:36:21.215Z] 
Data Files Check:
[2025-12-02T22:36:21.216Z] .github/data/new_jobs.json: ✅ Exists (2 items, 11632 bytes)
[2025-12-02T22:36:21.218Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333125 bytes)
[2025-12-02T22:36:21.218Z] 
========================================
[2025-12-02T22:36:21.218Z] Starting Enhanced Discord Bot...
[2025-12-02T22:36:21.218Z] ========================================
[2025-12-02T22:36:22.165Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T22:36:22.165Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-12-02T22:36:22.166Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T22:36:22.241Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 2
[2025-12-02T22:36:22.242Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-02T22:36:22.242Z] [BOT] 📬 Found 1 new jobs (1 already posted)...
[2025-12-02T22:36:22.242Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-02T22:36:22.242Z] [BOT] 📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T22:36:22.245Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-02T22:36:22.245Z] [BOT] 📍 [ROUTING] "GIS Analyst 1" @ ORG_fc33f732 of Amarillo
[2025-12-02T22:36:22.245Z] [BOT] Category: HR (matched: "human resources")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-02T22:36:22.250Z] [BOT ERROR] (node:2428) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T22:36:22.573Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #📁・JID_e938df7b
  ✅ Industry: GIS Analyst 1 @ ORG_fc33f732 of Amarillo
[2025-12-02T22:36:24.298Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-02T22:36:25.798Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T22:36:25.798Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T22:36:25.803Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T22:36:25.804Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T22:36:28.805Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-02T22:36:28.805Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-02T22:36:28.844Z] [BOT] 📂 Loaded 626 existing routing entries
[2025-12-02T22:36:28.882Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-02T22:36:28.883Z] [BOT] Total entries: 627
   Timestamp: 2025-12-02T22:36:28.881Z
[2025-12-02T22:36:30.891Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2428) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*