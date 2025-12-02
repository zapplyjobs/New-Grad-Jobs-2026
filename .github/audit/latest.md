# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T20:25:00.389Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T20:24:45.327Z] ========================================
[2025-12-02T20:24:45.329Z] Discord Bot Execution Log
[2025-12-02T20:24:45.329Z] Environment: GitHub Actions
[2025-12-02T20:24:45.329Z] Node Version: v20.19.5
[2025-12-02T20:24:45.329Z] ========================================
[2025-12-02T20:24:45.329Z] Environment Variables Check:
[2025-12-02T20:24:45.329Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T20:24:45.329Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T20:24:45.330Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T20:24:45.330Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T20:24:45.330Z] 
Multi-Channel Configuration:
[2025-12-02T20:24:45.330Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T20:24:45.330Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T20:24:45.330Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T20:24:45.330Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T20:24:45.330Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T20:24:45.330Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T20:24:45.330Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T20:24:45.330Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T20:24:45.331Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T20:24:45.331Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T20:24:45.331Z] 
Data Files Check:
[2025-12-02T20:24:45.331Z] .github/data/new_jobs.json: ✅ Exists (3 items, 15427 bytes)
[2025-12-02T20:24:45.333Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333126 bytes)
[2025-12-02T20:24:45.333Z] 
========================================
[2025-12-02T20:24:45.333Z] Starting Enhanced Discord Bot...
[2025-12-02T20:24:45.333Z] ========================================
[2025-12-02T20:24:46.689Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T20:24:46.689Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-12-02T20:24:46.690Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T20:24:46.772Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 3
[2025-12-02T20:24:46.773Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-02T20:24:46.773Z] [BOT] 📬 Found 2 new jobs (1 already posted)...
📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-02T20:24:46.773Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T20:24:46.774Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-02T20:24:46.774Z] [BOT] 📍 [ROUTING] "Data Science Associate" @ ORG_6a6f37e5
[2025-12-02T20:24:46.774Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T20:24:46.779Z] [BOT ERROR] (node:2521) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T20:24:47.004Z] [BOT] ✅ Created forum post: 🏢 Data Science Associate @ ORG_6a6f37e5 in #💻・tech-jobs
[2025-12-02T20:24:47.005Z] [BOT] ✅ Industry: Data Science Associate @ ORG_6a6f37e5
[2025-12-02T20:24:48.834Z] [BOT] ✅ Created forum post: 🏢 Data Science Associate @ ORG_6a6f37e5 in #🌉・san-francisco
[2025-12-02T20:24:48.835Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-02T20:24:50.336Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T20:24:50.336Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T20:24:50.342Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-02T20:24:50.342Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T20:24:50.657Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
  ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-02T20:24:52.387Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-02T20:24:53.888Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T20:24:53.889Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T20:24:53.893Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T20:24:53.893Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T20:24:56.894Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-02T20:24:56.935Z] [BOT] 📂 Loaded 616 existing routing entries
[2025-12-02T20:24:56.976Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 618
[2025-12-02T20:24:56.977Z] [BOT] Timestamp: 2025-12-02T20:24:56.975Z
[2025-12-02T20:24:58.987Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2521) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*