# Discord Bot Execution Audit
**Timestamp:** 2025-11-23T13:23:49.529Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-23T13:23:36.840Z] ========================================
[2025-11-23T13:23:36.842Z] Discord Bot Execution Log
[2025-11-23T13:23:36.842Z] Environment: GitHub Actions
[2025-11-23T13:23:36.842Z] Node Version: v20.19.5
[2025-11-23T13:23:36.842Z] ========================================
[2025-11-23T13:23:36.842Z] Environment Variables Check:
[2025-11-23T13:23:36.842Z] DISCORD_TOKEN: ✅ Set
[2025-11-23T13:23:36.842Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-23T13:23:36.842Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-23T13:23:36.842Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-23T13:23:36.842Z] 
Multi-Channel Configuration:
[2025-11-23T13:23:36.842Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-23T13:23:36.842Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-23T13:23:36.842Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-23T13:23:36.842Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-23T13:23:36.842Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-23T13:23:36.842Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-23T13:23:36.842Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-23T13:23:36.842Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-23T13:23:36.842Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-23T13:23:36.842Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-23T13:23:36.843Z] 
Data Files Check:
[2025-11-23T13:23:36.843Z] .github/data/new_jobs.json: ✅ Exists (4 items, 10666 bytes)
[2025-11-23T13:23:36.845Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327572 bytes)
[2025-11-23T13:23:36.845Z] 
========================================
[2025-11-23T13:23:36.845Z] Starting Enhanced Discord Bot...
[2025-11-23T13:23:36.845Z] ========================================
[2025-11-23T13:23:38.002Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-23T13:23:38.002Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 4 jobs to encrypted JSON...
[2025-11-23T13:23:38.003Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-23T13:23:38.041Z] [BOT] ✅ Export complete: Added 4, Skipped 0, Total 4
[2025-11-23T13:23:38.042Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6389278a at Amentum
📬 Found 3 new jobs (1 already posted)...
[2025-11-23T13:23:38.042Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-23T13:23:38.045Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-11-23T13:23:38.045Z] [BOT] 📍 [ROUTING] "Ukrainian Language Specialist (Canada or US-based)" @ ORG_0f2833f9
   Category: TECH (default)
[2025-11-23T13:23:38.045Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-23T13:23:38.050Z] [BOT ERROR] (node:2413) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-23T13:23:38.299Z] [BOT] ✅ Created forum post: 🏢 Ukrainian Language Specialist (Canada or US-based) @ ORG_0f2833f9 in #💻・tech-jobs
  ✅ Industry: Ukrainian Language Specialist (Canada or US-based) @ ORG_0f2833f9
[2025-11-23T13:23:39.802Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-23T13:23:39.803Z] [BOT] 📍 [ROUTING] "Portuguese Language Specialist" @ ORG_0f2833f9
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-23T13:23:40.032Z] [BOT] ✅ Created forum post: 🏢 Portuguese Language Specialist @ ORG_0f2833f9 in #💻・tech-jobs
  ✅ Industry: Portuguese Language Specialist @ ORG_0f2833f9
[2025-11-23T13:23:41.535Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-23T13:23:41.535Z] [BOT] 📍 [ROUTING] "Business Solutions Developer 1" @ ORG_441f2234
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-23T13:23:41.723Z] [BOT] ✅ Created forum post: 🏢 Business Solutions Developer 1 @ ORG_441f2234 in #💻・tech-jobs
[2025-11-23T13:23:41.723Z] [BOT] ✅ Industry: Business Solutions Developer 1 @ ORG_441f2234
[2025-11-23T13:23:43.227Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-23T13:23:46.227Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-11-23T13:23:46.228Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-23T13:23:46.265Z] [BOT] 📂 Loaded 4 existing routing entries
[2025-11-23T13:23:46.301Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-11-23T13:23:46.301Z] [BOT] New entries: 3
   Total entries: 7
   Timestamp: 2025-11-23T13:23:46.300Z
[2025-11-23T13:23:48.308Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2413) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*