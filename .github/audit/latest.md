# Discord Bot Execution Audit
**Timestamp:** 2025-12-01T21:04:30.911Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-01T21:04:19.269Z] ========================================
[2025-12-01T21:04:19.271Z] Discord Bot Execution Log
[2025-12-01T21:04:19.271Z] Environment: GitHub Actions
[2025-12-01T21:04:19.271Z] Node Version: v20.19.5
[2025-12-01T21:04:19.271Z] ========================================
[2025-12-01T21:04:19.271Z] Environment Variables Check:
[2025-12-01T21:04:19.271Z] DISCORD_TOKEN: ✅ Set
[2025-12-01T21:04:19.271Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-01T21:04:19.271Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-01T21:04:19.271Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-01T21:04:19.271Z] 
Multi-Channel Configuration:
[2025-12-01T21:04:19.272Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-01T21:04:19.272Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-01T21:04:19.272Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-01T21:04:19.272Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-01T21:04:19.272Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-01T21:04:19.272Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-01T21:04:19.272Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-01T21:04:19.272Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-01T21:04:19.272Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-01T21:04:19.272Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-01T21:04:19.272Z] 
Data Files Check:
[2025-12-01T21:04:19.273Z] .github/data/new_jobs.json: ✅ Exists (1 items, 5095 bytes)
[2025-12-01T21:04:19.275Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 331996 bytes)
[2025-12-01T21:04:19.275Z] 
========================================
[2025-12-01T21:04:19.275Z] Starting Enhanced Discord Bot...
[2025-12-01T21:04:19.275Z] ========================================
[2025-12-01T21:04:20.540Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-01T21:04:20.541Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-01T21:04:20.541Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-01T21:04:20.616Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-12-01T21:04:20.617Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-01T21:04:20.617Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
[2025-12-01T21:04:20.617Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-01T21:04:20.620Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-01T21:04:20.620Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst" @ ORG_81f16575ington Bancshares
[2025-12-01T21:04:20.620Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-01T21:04:20.625Z] [BOT ERROR] (node:2320) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-01T21:04:21.329Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
[2025-12-01T21:04:21.329Z] [BOT] ✅ Industry: Technology Delivery Analyst @ ORG_81f16575ington Bancshares
[2025-12-01T21:04:23.097Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst @ ORG_81f16575ington Bancshares in #💻・remote-usa
[2025-12-01T21:04:23.098Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-01T21:04:24.598Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T21:04:24.599Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T21:04:24.604Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-01T21:04:24.604Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T21:04:27.605Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-01T21:04:27.643Z] [BOT] 📂 Loaded 565 existing routing entries
[2025-12-01T21:04:27.683Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-01T21:04:27.684Z] [BOT] Total entries: 566
   Timestamp: 2025-12-01T21:04:27.682Z
[2025-12-01T21:04:29.692Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2320) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*