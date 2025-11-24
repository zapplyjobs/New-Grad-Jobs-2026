# Discord Bot Execution Audit
**Timestamp:** 2025-11-24T10:38:27.860Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-24T10:38:19.381Z] ========================================
[2025-11-24T10:38:19.382Z] Discord Bot Execution Log
[2025-11-24T10:38:19.382Z] Environment: GitHub Actions
[2025-11-24T10:38:19.382Z] Node Version: v20.19.5
[2025-11-24T10:38:19.382Z] ========================================
[2025-11-24T10:38:19.382Z] Environment Variables Check:
[2025-11-24T10:38:19.382Z] DISCORD_TOKEN: ✅ Set
[2025-11-24T10:38:19.382Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-24T10:38:19.382Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-24T10:38:19.382Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-24T10:38:19.382Z] 
Multi-Channel Configuration:
[2025-11-24T10:38:19.382Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-24T10:38:19.382Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-24T10:38:19.382Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-24T10:38:19.382Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-24T10:38:19.383Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-24T10:38:19.383Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-24T10:38:19.383Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-24T10:38:19.383Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-24T10:38:19.383Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-24T10:38:19.383Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-24T10:38:19.383Z] 
Data Files Check:
[2025-11-24T10:38:19.383Z] .github/data/new_jobs.json: ✅ Exists (1 items, 4844 bytes)
[2025-11-24T10:38:19.384Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327482 bytes)
[2025-11-24T10:38:19.384Z] 
========================================
[2025-11-24T10:38:19.384Z] Starting Enhanced Discord Bot...
[2025-11-24T10:38:19.384Z] ========================================
[2025-11-24T10:38:20.337Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-24T10:38:20.337Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-24T10:38:20.338Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-24T10:38:20.375Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 1
[2025-11-24T10:38:20.376Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-11-24T10:38:20.376Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-24T10:38:20.378Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-11-24T10:38:20.379Z] [BOT] 📍 [ROUTING] "Research Scientist – New College Grad 2026 - Programming Systems" @ ORG_0890f456
[2025-11-24T10:38:20.379Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-11-24T10:38:20.383Z] [BOT ERROR] (node:2414) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-24T10:38:20.646Z] [BOT] ✅ Created forum post: 🏢 Research Scientist – New College Grad 2026 - Programming Systems @ ORG_0890f456 in #📁・JID_e938df7b
[2025-11-24T10:38:20.646Z] [BOT] ✅ Industry: Research Scientist – New College Grad 2026 - Programming Systems @ ORG_0890f456
[2025-11-24T10:38:22.149Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-24T10:38:25.150Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-11-24T10:38:25.150Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-24T10:38:25.187Z] [BOT] 📂 Loaded 3 existing routing entries
[2025-11-24T10:38:25.222Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-11-24T10:38:25.222Z] [BOT] New entries: 1
   Total entries: 4
   Timestamp: 2025-11-24T10:38:25.222Z
[2025-11-24T10:38:27.234Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2414) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*