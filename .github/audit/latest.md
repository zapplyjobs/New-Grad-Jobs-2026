# Discord Bot Execution Audit
**Timestamp:** 2025-11-25T16:40:40.719Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-25T16:40:23.144Z] ========================================
[2025-11-25T16:40:23.145Z] Discord Bot Execution Log
[2025-11-25T16:40:23.146Z] Environment: GitHub Actions
[2025-11-25T16:40:23.146Z] Node Version: v20.19.5
[2025-11-25T16:40:23.146Z] ========================================
[2025-11-25T16:40:23.146Z] Environment Variables Check:
[2025-11-25T16:40:23.146Z] DISCORD_TOKEN: ✅ Set
[2025-11-25T16:40:23.146Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-25T16:40:23.146Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-25T16:40:23.146Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-25T16:40:23.146Z] 
Multi-Channel Configuration:
[2025-11-25T16:40:23.146Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-25T16:40:23.146Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-25T16:40:23.146Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-25T16:40:23.146Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-25T16:40:23.146Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-25T16:40:23.146Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-25T16:40:23.146Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-25T16:40:23.146Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-25T16:40:23.146Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-25T16:40:23.146Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-25T16:40:23.146Z] 
Data Files Check:
[2025-11-25T16:40:23.147Z] .github/data/new_jobs.json: ✅ Exists (3 items, 19761 bytes)
[2025-11-25T16:40:23.149Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327743 bytes)
[2025-11-25T16:40:23.149Z] 
========================================
[2025-11-25T16:40:23.149Z] Starting Enhanced Discord Bot...
[2025-11-25T16:40:23.149Z] ========================================
[2025-11-25T16:40:24.030Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-25T16:40:24.030Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-11-25T16:40:24.030Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-25T16:40:24.069Z] [BOT] ✅ Export complete: Added 3, Skipped 0, Total 3
[2025-11-25T16:40:24.069Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
📤 Posting 3 jobs...
[2025-11-25T16:40:24.069Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-25T16:40:24.071Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-11-25T16:40:24.071Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_b1b059ca Systems
[2025-11-25T16:40:24.071Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T16:40:24.075Z] [BOT ERROR] (node:2395) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-25T16:40:24.313Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_b1b059ca Systems in #💻・tech-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_b1b059ca Systems
[2025-11-25T16:40:26.076Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_b1b059ca Systems in #💻・remote-usa
[2025-11-25T16:40:26.076Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-25T16:40:27.579Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T16:40:27.579Z] [BOT] 📍 [ROUTING] "Junior Data Scientist" @ ORG_a96b217e
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T16:40:27.981Z] [BOT] ✅ Created forum post: 🏢 Junior Data Scientist @ ORG_a96b217e in #💻・tech-jobs
[2025-11-25T16:40:27.981Z] [BOT] ✅ Industry: Junior Data Scientist @ ORG_a96b217e
[2025-11-25T16:40:29.758Z] [BOT] ✅ Created forum post: 🏢 Junior Data Scientist @ ORG_a96b217e in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-25T16:40:31.260Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T16:40:31.260Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T16:40:31.452Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-25T16:40:33.347Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-25T16:40:34.851Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T16:40:37.852Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-25T16:40:37.890Z] [BOT] 📂 Loaded 71 existing routing entries
[2025-11-25T16:40:37.926Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2025-11-25T16:40:37.926Z] [BOT] Total entries: 74
   Timestamp: 2025-11-25T16:40:37.925Z
[2025-11-25T16:40:39.936Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2395) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*