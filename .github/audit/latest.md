# Discord Bot Execution Audit
**Timestamp:** 2025-11-29T00:39:36.685Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-29T00:39:25.948Z] ========================================
[2025-11-29T00:39:25.950Z] Discord Bot Execution Log
[2025-11-29T00:39:25.950Z] Environment: GitHub Actions
[2025-11-29T00:39:25.950Z] Node Version: v20.19.5
[2025-11-29T00:39:25.950Z] ========================================
[2025-11-29T00:39:25.950Z] Environment Variables Check:
[2025-11-29T00:39:25.950Z] DISCORD_TOKEN: ✅ Set
[2025-11-29T00:39:25.950Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-29T00:39:25.950Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-29T00:39:25.950Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-29T00:39:25.951Z] 
Multi-Channel Configuration:
[2025-11-29T00:39:25.951Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-29T00:39:25.951Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-29T00:39:25.951Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-29T00:39:25.951Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-29T00:39:25.951Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-29T00:39:25.951Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-29T00:39:25.951Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-29T00:39:25.951Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-29T00:39:25.951Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-29T00:39:25.951Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-29T00:39:25.951Z] 
Data Files Check:
[2025-11-29T00:39:25.952Z] .github/data/new_jobs.json: ✅ Exists (2 items, 12302 bytes)
[2025-11-29T00:39:25.954Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330571 bytes)
[2025-11-29T00:39:25.954Z] 
========================================
[2025-11-29T00:39:25.954Z] Starting Enhanced Discord Bot...
[2025-11-29T00:39:25.954Z] ========================================
[2025-11-29T00:39:26.911Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-29T00:39:26.911Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-11-29T00:39:26.912Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-29T00:39:26.990Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 2
[2025-11-29T00:39:26.991Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-29T00:39:26.991Z] [BOT] 📬 Found 1 new jobs (1 already posted)...
📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-11-29T00:39:26.991Z] [BOT] 📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-29T00:39:26.992Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-29T00:39:26.992Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_c910d474 Dynamics Information Technology
[2025-11-29T00:39:26.993Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-29T00:39:26.997Z] [BOT ERROR] (node:2382) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-29T00:39:27.192Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
[2025-11-29T00:39:27.192Z] [BOT] ✅ Industry: Data Scientist @ ORG_c910d474 Dynamics Information Technology
[2025-11-29T00:39:28.878Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_c910d474 Dynamics Information Technology in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-29T00:39:30.379Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-29T00:39:30.380Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-29T00:39:30.385Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-29T00:39:30.385Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-29T00:39:33.387Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-11-29T00:39:33.387Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-29T00:39:33.425Z] [BOT] 📂 Loaded 538 existing routing entries
[2025-11-29T00:39:33.463Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-11-29T00:39:33.463Z] [BOT] New entries: 1
   Total entries: 539
   Timestamp: 2025-11-29T00:39:33.461Z
[2025-11-29T00:39:35.470Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2382) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*