# Discord Bot Execution Audit
**Timestamp:** 2025-12-01T20:05:31.980Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-01T20:05:18.024Z] ========================================
[2025-12-01T20:05:18.026Z] Discord Bot Execution Log
[2025-12-01T20:05:18.026Z] Environment: GitHub Actions
[2025-12-01T20:05:18.026Z] Node Version: v20.19.5
[2025-12-01T20:05:18.026Z] ========================================
[2025-12-01T20:05:18.026Z] Environment Variables Check:
[2025-12-01T20:05:18.026Z] DISCORD_TOKEN: ✅ Set
[2025-12-01T20:05:18.027Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-01T20:05:18.027Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-01T20:05:18.027Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-01T20:05:18.027Z] 
Multi-Channel Configuration:
[2025-12-01T20:05:18.027Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-01T20:05:18.027Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-01T20:05:18.027Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-01T20:05:18.027Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-01T20:05:18.027Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-01T20:05:18.027Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-01T20:05:18.027Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-01T20:05:18.027Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-01T20:05:18.028Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-01T20:05:18.028Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-01T20:05:18.028Z] 
Data Files Check:
[2025-12-01T20:05:18.028Z] .github/data/new_jobs.json: ✅ Exists (2 items, 15267 bytes)
[2025-12-01T20:05:18.030Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 331789 bytes)
[2025-12-01T20:05:18.030Z] 
========================================
[2025-12-01T20:05:18.030Z] Starting Enhanced Discord Bot...
[2025-12-01T20:05:18.030Z] ========================================
[2025-12-01T20:05:19.067Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-01T20:05:19.068Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-12-01T20:05:19.068Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-01T20:05:19.146Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 2
[2025-12-01T20:05:19.146Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-01T20:05:19.147Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
📋 After title+company+location dedup: 2 unique jobs to post
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-01T20:05:19.148Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-01T20:05:19.148Z] [BOT] 📍 [ROUTING] "Fleet Data Management Customer Data Analyst" @ ORG_75f04b84
[2025-12-01T20:05:19.148Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-01T20:05:19.153Z] [BOT ERROR] (node:2405) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-01T20:05:19.460Z] [BOT] ✅ Created forum post: 🏢 Fleet Data Management Customer Data Analyst @ ORG_75f04b84 in #💻・tech-jobs
[2025-12-01T20:05:19.460Z] [BOT] ✅ Industry: Fleet Data Management Customer Data Analyst @ ORG_75f04b84
[2025-12-01T20:05:21.168Z] [BOT] ✅ Created forum post: 🏢 Fleet Data Management Customer Data Analyst @ ORG_75f04b84 in #💻・remote-usa
[2025-12-01T20:05:21.169Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-01T20:05:22.669Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T20:05:22.670Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T20:05:22.676Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-01T20:05:22.676Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T20:05:22.676Z] [BOT] 📍 [ROUTING] "Packaging Engineer - Sustainability" @ ORG_b344d80e Campbell's Company
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-01T20:05:22.882Z] [BOT] ✅ Created forum post: 🏢 Packaging Engineer - Sustainability @ ORG_b344d80e Campbell's Company in #💻・tech-jobs
  ✅ Industry: Packaging Engineer - Sustainability @ ORG_b344d80e Campbell's Company
[2025-12-01T20:05:24.607Z] [BOT] ✅ Created forum post: 🏢 Packaging Engineer - Sustainability @ ORG_b344d80e Campbell's Company in #💻・remote-usa
[2025-12-01T20:05:24.607Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-01T20:05:26.108Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T20:05:26.109Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T20:05:26.114Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-01T20:05:26.114Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T20:05:29.115Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-01T20:05:29.154Z] [BOT] 📂 Loaded 563 existing routing entries
[2025-12-01T20:05:29.195Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 565
[2025-12-01T20:05:29.195Z] [BOT] Timestamp: 2025-12-01T20:05:29.193Z
[2025-12-01T20:05:31.205Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2405) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*