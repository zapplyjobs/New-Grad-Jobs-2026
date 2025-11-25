# Discord Bot Execution Audit
**Timestamp:** 2025-11-25T01:07:53.312Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-25T01:07:36.175Z] ========================================
[2025-11-25T01:07:36.176Z] Discord Bot Execution Log
[2025-11-25T01:07:36.176Z] Environment: GitHub Actions
[2025-11-25T01:07:36.176Z] Node Version: v20.19.5
[2025-11-25T01:07:36.176Z] ========================================
[2025-11-25T01:07:36.176Z] Environment Variables Check:
[2025-11-25T01:07:36.177Z] DISCORD_TOKEN: ✅ Set
[2025-11-25T01:07:36.177Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-25T01:07:36.177Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-25T01:07:36.177Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-25T01:07:36.177Z] 
Multi-Channel Configuration:
[2025-11-25T01:07:36.177Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-25T01:07:36.177Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-25T01:07:36.177Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-25T01:07:36.177Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-25T01:07:36.177Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-25T01:07:36.177Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-25T01:07:36.177Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-25T01:07:36.177Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-25T01:07:36.177Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-25T01:07:36.177Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-25T01:07:36.177Z] 
Data Files Check:
[2025-11-25T01:07:36.178Z] .github/data/new_jobs.json: ✅ Exists (3 items, 15504 bytes)
[2025-11-25T01:07:36.179Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327573 bytes)
[2025-11-25T01:07:36.180Z] 
========================================
[2025-11-25T01:07:36.180Z] Starting Enhanced Discord Bot...
[2025-11-25T01:07:36.180Z] ========================================
[2025-11-25T01:07:36.919Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-25T01:07:36.920Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-11-25T01:07:36.920Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-25T01:07:36.959Z] [BOT] ✅ Export complete: Added 3, Skipped 0, Total 3
[2025-11-25T01:07:36.960Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2025-11-25T01:07:36.960Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-25T01:07:36.962Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-11-25T01:07:36.962Z] [BOT] 📍 [ROUTING] "Engineer Model-Based" @ ORG_81f16575ington Ingalls Industries
[2025-11-25T01:07:36.962Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T01:07:36.967Z] [BOT ERROR] (node:2287) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-25T01:07:37.242Z] [BOT] ✅ Created forum post: 🏢 Engineer Model-Based @ ORG_81f16575ington Ingalls Industries in #💻・tech-jobs
[2025-11-25T01:07:37.242Z] [BOT] ✅ Industry: Engineer Model-Based @ ORG_81f16575ington Ingalls Industries
[2025-11-25T01:07:39.032Z] [BOT] ✅ Created forum post: 🏢 Engineer Model-Based @ ORG_81f16575ington Ingalls Industries in #💻・remote-usa
[2025-11-25T01:07:39.032Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-25T01:07:40.535Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T01:07:40.536Z] [BOT] 📍 [ROUTING] "Sustaining Product Engineer" @ ORG_dd730736
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T01:07:40.819Z] [BOT] ✅ Created forum post: 🏢 Sustaining Product Engineer @ ORG_dd730736 in #💻・tech-jobs
[2025-11-25T01:07:40.819Z] [BOT] ✅ Industry: Sustaining Product Engineer @ ORG_dd730736
[2025-11-25T01:07:42.478Z] [BOT] ✅ Created forum post: 🏢 Sustaining Product Engineer @ ORG_dd730736 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-25T01:07:43.982Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T01:07:43.982Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_75f04b84
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T01:07:44.402Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_75f04b84
[2025-11-25T01:07:46.134Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_75f04b84 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-25T01:07:47.638Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T01:07:50.639Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-25T01:07:50.677Z] [BOT] 📂 Loaded 10 existing routing entries
[2025-11-25T01:07:50.712Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 13
   Timestamp: 2025-11-25T01:07:50.711Z
[2025-11-25T01:07:52.722Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2287) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*