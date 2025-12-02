# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T05:37:39.995Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T05:37:29.903Z] ========================================
[2025-12-02T05:37:29.905Z] Discord Bot Execution Log
[2025-12-02T05:37:29.906Z] Environment: GitHub Actions
[2025-12-02T05:37:29.906Z] Node Version: v20.19.5
[2025-12-02T05:37:29.906Z] ========================================
[2025-12-02T05:37:29.906Z] Environment Variables Check:
[2025-12-02T05:37:29.906Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T05:37:29.906Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T05:37:29.906Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T05:37:29.906Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T05:37:29.906Z] 
Multi-Channel Configuration:
[2025-12-02T05:37:29.906Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T05:37:29.906Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T05:37:29.907Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T05:37:29.907Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T05:37:29.907Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T05:37:29.907Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T05:37:29.907Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T05:37:29.907Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T05:37:29.907Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T05:37:29.907Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T05:37:29.907Z] 
Data Files Check:
[2025-12-02T05:37:29.908Z] .github/data/new_jobs.json: ✅ Exists (1 items, 5332 bytes)
[2025-12-02T05:37:29.910Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332153 bytes)
[2025-12-02T05:37:29.910Z] 
========================================
[2025-12-02T05:37:29.910Z] Starting Enhanced Discord Bot...
[2025-12-02T05:37:29.910Z] ========================================
[2025-12-02T05:37:30.848Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T05:37:30.849Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-02T05:37:30.849Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T05:37:30.926Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-12-02T05:37:30.926Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-02T05:37:30.927Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-02T05:37:30.927Z] [BOT] 📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T05:37:30.928Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-02T05:37:30.928Z] [BOT] 📍 [ROUTING] "C++ Engineer - ONSITE: Chicago - IL or Denver','CO" @ ORG_a35c6c02
[2025-12-02T05:37:30.929Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T05:37:30.933Z] [BOT ERROR] (node:2299) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T05:37:31.058Z] [BOT] ✅ Created forum post: 🏢 C++ Engineer - ONSITE: Chicago - IL or Denver','CO @ ORG_a35c6c02 in #💻・tech-jobs
[2025-12-02T05:37:31.058Z] [BOT] ✅ Industry: C++ Engineer - ONSITE: Chicago - IL or Denver','CO @ ORG_a35c6c02
[2025-12-02T05:37:32.789Z] [BOT] ✅ Created forum post: 🏢 C++ Engineer - ONSITE: Chicago - IL or Denver','CO @ ORG_a35c6c02 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-02T05:37:34.290Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T05:37:34.290Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T05:37:34.296Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-02T05:37:34.296Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T05:37:37.297Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-02T05:37:37.337Z] [BOT] 📂 Loaded 584 existing routing entries
[2025-12-02T05:37:37.376Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 585
   Timestamp: 2025-12-02T05:37:37.374Z
[2025-12-02T05:37:39.385Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2299) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*