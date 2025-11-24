# Discord Bot Execution Audit
**Timestamp:** 2025-11-24T12:23:36.818Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-24T12:23:21.915Z] ========================================
[2025-11-24T12:23:21.916Z] Discord Bot Execution Log
[2025-11-24T12:23:21.916Z] Environment: GitHub Actions
[2025-11-24T12:23:21.916Z] Node Version: v20.19.5
[2025-11-24T12:23:21.916Z] ========================================
[2025-11-24T12:23:21.916Z] Environment Variables Check:
[2025-11-24T12:23:21.916Z] DISCORD_TOKEN: ✅ Set
[2025-11-24T12:23:21.916Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-24T12:23:21.916Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-24T12:23:21.916Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-24T12:23:21.916Z] 
Multi-Channel Configuration:
[2025-11-24T12:23:21.917Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-24T12:23:21.917Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-24T12:23:21.917Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-24T12:23:21.917Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-24T12:23:21.917Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-24T12:23:21.917Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-24T12:23:21.917Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-24T12:23:21.917Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-24T12:23:21.917Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-24T12:23:21.917Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-24T12:23:21.917Z] 
Data Files Check:
[2025-11-24T12:23:21.917Z] .github/data/new_jobs.json: ✅ Exists (3 items, 14266 bytes)
[2025-11-24T12:23:21.919Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327590 bytes)
[2025-11-24T12:23:21.919Z] 
========================================
[2025-11-24T12:23:21.919Z] Starting Enhanced Discord Bot...
[2025-11-24T12:23:21.919Z] ========================================
[2025-11-24T12:23:22.842Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-24T12:23:22.842Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-11-24T12:23:22.842Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-24T12:23:22.881Z] [BOT] ✅ Export complete: Added 3, Skipped 0, Total 3
[2025-11-24T12:23:22.882Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
📤 Posting 3 jobs...
[2025-11-24T12:23:22.882Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-24T12:23:22.884Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-24T12:23:22.884Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_47633304
[2025-11-24T12:23:22.884Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-24T12:23:22.889Z] [BOT ERROR] (node:2320) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-24T12:23:23.125Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_47633304 in #💻・tech-jobs
[2025-11-24T12:23:23.125Z] [BOT] ✅ Industry: Data Scientist @ ORG_47633304
[2025-11-24T12:23:24.628Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-24T12:23:24.628Z] [BOT] 📍 [ROUTING] "Skillbridge Software Engineer" @ ORG_fa549ffc
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-24T12:23:24.794Z] [BOT] ✅ Created forum post: 🏢 Skillbridge Software Engineer @ ORG_fa549ffc in #💻・tech-jobs
[2025-11-24T12:23:24.794Z] [BOT] ✅ Industry: Skillbridge Software Engineer @ ORG_fa549ffc
[2025-11-24T12:23:26.297Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-24T12:23:29.299Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-11-24T12:23:29.299Z] [BOT] 📍 [ROUTING] "Seismic Imaging Analyst" @ ORG_b253f799
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-11-24T12:23:29.505Z] [BOT] ✅ Created forum post: 🏢 Seismic Imaging Analyst @ ORG_b253f799 in #📣・marketing-jobs
[2025-11-24T12:23:29.506Z] [BOT] ✅ Industry: Seismic Imaging Analyst @ ORG_b253f799
[2025-11-24T12:23:31.009Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-24T12:23:34.010Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-24T12:23:34.050Z] [BOT] 📂 Loaded 4 existing routing entries
[2025-11-24T12:23:34.087Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 7
   Timestamp: 2025-11-24T12:23:34.086Z
[2025-11-24T12:23:36.095Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2320) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*