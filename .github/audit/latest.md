# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T23:48:22.126Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T23:48:08.059Z] ========================================
[2025-12-02T23:48:08.061Z] Discord Bot Execution Log
[2025-12-02T23:48:08.061Z] Environment: GitHub Actions
[2025-12-02T23:48:08.061Z] Node Version: v20.19.6
[2025-12-02T23:48:08.061Z] ========================================
[2025-12-02T23:48:08.061Z] Environment Variables Check:
[2025-12-02T23:48:08.061Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T23:48:08.061Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T23:48:08.061Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T23:48:08.061Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T23:48:08.061Z] 
Multi-Channel Configuration:
[2025-12-02T23:48:08.062Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T23:48:08.062Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T23:48:08.062Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T23:48:08.062Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T23:48:08.062Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T23:48:08.062Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T23:48:08.062Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T23:48:08.062Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T23:48:08.062Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T23:48:08.062Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T23:48:08.062Z] 
Data Files Check:
[2025-12-02T23:48:08.063Z] .github/data/new_jobs.json: ✅ Exists (6 items, 30255 bytes)
[2025-12-02T23:48:08.065Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333277 bytes)
[2025-12-02T23:48:08.065Z] 
========================================
[2025-12-02T23:48:08.065Z] Starting Enhanced Discord Bot...
[2025-12-02T23:48:08.065Z] ========================================
[2025-12-02T23:48:09.107Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T23:48:09.107Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 6 jobs to encrypted JSON...
[2025-12-02T23:48:09.107Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T23:48:09.184Z] [BOT] ✅ Export complete: Added 0, Skipped 6, Total 6
[2025-12-02T23:48:09.185Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-02T23:48:09.185Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-02T23:48:09.185Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-02T23:48:09.185Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
📬 Found 2 new jobs (4 already posted)...
[2025-12-02T23:48:09.186Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-02T23:48:09.186Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
[2025-12-02T23:48:09.186Z] [BOT] 📤 Posting 2 jobs...
[2025-12-02T23:48:09.186Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T23:48:09.187Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-02T23:48:09.187Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
[2025-12-02T23:48:09.187Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T23:48:09.191Z] [BOT ERROR] (node:2433) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T23:48:09.553Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
  ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-02T23:48:11.277Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-02T23:48:12.779Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T23:48:12.779Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T23:48:12.784Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T23:48:12.784Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Data Scientist - Algorithms Pricing - Optimization" @ ORG_571ce021
[2025-12-02T23:48:12.785Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T23:48:13.185Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #💻・tech-jobs
[2025-12-02T23:48:13.185Z] [BOT] ✅ Industry: Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021
[2025-12-02T23:48:14.922Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-02T23:48:16.424Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T23:48:16.424Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T23:48:16.427Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T23:48:16.427Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T23:48:19.429Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-02T23:48:19.429Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-02T23:48:19.468Z] [BOT] 📂 Loaded 635 existing routing entries
[2025-12-02T23:48:19.507Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-02T23:48:19.507Z] [BOT] Total entries: 637
   Timestamp: 2025-12-02T23:48:19.505Z
[2025-12-02T23:48:21.518Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2433) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*