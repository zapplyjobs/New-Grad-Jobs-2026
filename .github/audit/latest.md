# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T11:34:53.504Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T11:34:43.495Z] ========================================
[2025-12-02T11:34:43.497Z] Discord Bot Execution Log
[2025-12-02T11:34:43.497Z] Environment: GitHub Actions
[2025-12-02T11:34:43.497Z] Node Version: v20.19.5
[2025-12-02T11:34:43.497Z] ========================================
[2025-12-02T11:34:43.498Z] Environment Variables Check:
[2025-12-02T11:34:43.498Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T11:34:43.498Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T11:34:43.498Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T11:34:43.498Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T11:34:43.498Z] 
Multi-Channel Configuration:
[2025-12-02T11:34:43.498Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T11:34:43.498Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T11:34:43.498Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T11:34:43.498Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T11:34:43.498Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T11:34:43.499Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T11:34:43.499Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T11:34:43.499Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T11:34:43.499Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T11:34:43.499Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T11:34:43.499Z] 
Data Files Check:
[2025-12-02T11:34:43.499Z] .github/data/new_jobs.json: ✅ Exists (1 items, 4009 bytes)
[2025-12-02T11:34:43.501Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332740 bytes)
[2025-12-02T11:34:43.501Z] 
========================================
[2025-12-02T11:34:43.501Z] Starting Enhanced Discord Bot...
[2025-12-02T11:34:43.501Z] ========================================
[2025-12-02T11:34:44.318Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T11:34:44.318Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-02T11:34:44.318Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T11:34:44.394Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-12-02T11:34:44.395Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-02T11:34:44.395Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
[2025-12-02T11:34:44.395Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T11:34:44.396Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-02T11:34:44.396Z] [BOT] 📍 [ROUTING] "Associate Machine Learning Engineer" @ ORG_6a6f37e5
[2025-12-02T11:34:44.396Z] [BOT] Category: TECH (matched: "machine learning")
[2025-12-02T11:34:44.396Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T11:34:44.401Z] [BOT ERROR] (node:2351) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T11:34:44.611Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Engineer @ ORG_6a6f37e5 in #💻・tech-jobs
  ✅ Industry: Associate Machine Learning Engineer @ ORG_6a6f37e5
[2025-12-02T11:34:46.241Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Engineer @ ORG_6a6f37e5 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-02T11:34:47.743Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T11:34:47.743Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T11:34:47.748Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T11:34:47.749Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T11:34:50.749Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-02T11:34:50.788Z] [BOT] 📂 Loaded 598 existing routing entries
[2025-12-02T11:34:50.826Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-02T11:34:50.827Z] [BOT] Total entries: 599
   Timestamp: 2025-12-02T11:34:50.825Z
[2025-12-02T11:34:52.835Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2351) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*