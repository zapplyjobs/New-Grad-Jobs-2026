# Discord Bot Execution Audit
**Timestamp:** 2025-12-01T13:32:05.766Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-01T13:31:57.267Z] ========================================
[2025-12-01T13:31:57.269Z] Discord Bot Execution Log
[2025-12-01T13:31:57.269Z] Environment: GitHub Actions
[2025-12-01T13:31:57.269Z] Node Version: v20.19.5
[2025-12-01T13:31:57.269Z] ========================================
[2025-12-01T13:31:57.269Z] Environment Variables Check:
[2025-12-01T13:31:57.269Z] DISCORD_TOKEN: ✅ Set
[2025-12-01T13:31:57.270Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-01T13:31:57.270Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-01T13:31:57.270Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-01T13:31:57.270Z] 
Multi-Channel Configuration:
[2025-12-01T13:31:57.270Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-01T13:31:57.270Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-01T13:31:57.270Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-01T13:31:57.270Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-01T13:31:57.270Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-01T13:31:57.271Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-01T13:31:57.271Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-01T13:31:57.271Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-01T13:31:57.271Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-01T13:31:57.271Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-01T13:31:57.271Z] 
Data Files Check:
[2025-12-01T13:31:57.271Z] .github/data/new_jobs.json: ✅ Exists (1 items, 657 bytes)
[2025-12-01T13:31:57.273Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 331515 bytes)
[2025-12-01T13:31:57.273Z] 
========================================
[2025-12-01T13:31:57.273Z] Starting Enhanced Discord Bot...
[2025-12-01T13:31:57.273Z] ========================================
[2025-12-01T13:31:58.224Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-01T13:31:58.225Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-01T13:31:58.225Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-01T13:31:58.305Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-12-01T13:31:58.305Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-01T13:31:58.306Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
[2025-12-01T13:31:58.306Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-01T13:31:58.306Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-01T13:31:58.307Z] [BOT] 📍 [ROUTING] "Software Developer 1" @ ORG_dc7620eb
[2025-12-01T13:31:58.307Z] [BOT] Category: TECH (matched: "software")
[2025-12-01T13:31:58.307Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-01T13:31:58.311Z] [BOT ERROR] (node:2223) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-01T13:31:58.488Z] [BOT] ✅ Created forum post: 🔴 Software Developer 1 @ ORG_dc7620eb in #💻・tech-jobs
[2025-12-01T13:31:58.489Z] [BOT] ✅ Industry: Software Developer 1 @ ORG_dc7620eb
[2025-12-01T13:31:59.991Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T13:31:59.991Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T13:32:00.003Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-01T13:32:00.003Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T13:32:03.004Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-01T13:32:03.043Z] [BOT] 📂 Loaded 554 existing routing entries
[2025-12-01T13:32:03.081Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 555
   Timestamp: 2025-12-01T13:32:03.080Z
[2025-12-01T13:32:05.093Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2223) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*