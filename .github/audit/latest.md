# Discord Bot Execution Audit
**Timestamp:** 2025-12-01T19:11:45.691Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-01T19:11:27.667Z] ========================================
[2025-12-01T19:11:27.669Z] Discord Bot Execution Log
[2025-12-01T19:11:27.669Z] Environment: GitHub Actions
[2025-12-01T19:11:27.669Z] Node Version: v20.19.5
[2025-12-01T19:11:27.669Z] ========================================
[2025-12-01T19:11:27.669Z] Environment Variables Check:
[2025-12-01T19:11:27.669Z] DISCORD_TOKEN: ✅ Set
[2025-12-01T19:11:27.669Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-01T19:11:27.669Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-01T19:11:27.670Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-01T19:11:27.670Z] 
Multi-Channel Configuration:
[2025-12-01T19:11:27.670Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-01T19:11:27.670Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-01T19:11:27.670Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-01T19:11:27.670Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-01T19:11:27.670Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-01T19:11:27.670Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-01T19:11:27.670Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-01T19:11:27.670Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-01T19:11:27.670Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-01T19:11:27.670Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-01T19:11:27.670Z] 
Data Files Check:
[2025-12-01T19:11:27.671Z] .github/data/new_jobs.json: ✅ Exists (2 items, 10935 bytes)
[2025-12-01T19:11:27.673Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 331745 bytes)
[2025-12-01T19:11:27.673Z] 
========================================
[2025-12-01T19:11:27.673Z] Starting Enhanced Discord Bot...
[2025-12-01T19:11:27.673Z] ========================================
[2025-12-01T19:11:28.782Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-01T19:11:28.783Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-12-01T19:11:28.783Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-01T19:11:28.861Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 2
[2025-12-01T19:11:28.862Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-01T19:11:28.862Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-01T19:11:28.862Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-01T19:11:28.865Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-01T19:11:28.865Z] [BOT] 📍 [ROUTING] "RAD Business Systems Analyst" @ ORG_f62822f0
[2025-12-01T19:11:28.865Z] [BOT] Category: MARKETING (matched: "brand")
[2025-12-01T19:11:28.865Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2025-12-01T19:11:28.870Z] [BOT ERROR] (node:2328) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-01T19:11:29.541Z] [BOT] ✅ Created forum post: 🏢 RAD Business Systems Analyst @ ORG_f62822f0 in #📣・marketing-jobs
[2025-12-01T19:11:29.541Z] [BOT] ✅ Industry: RAD Business Systems Analyst @ ORG_f62822f0
[2025-12-01T19:11:31.254Z] [BOT] ✅ Created forum post: 🏢 RAD Business Systems Analyst @ ORG_f62822f0 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-01T19:11:32.755Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T19:11:32.755Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T19:11:32.762Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-01T19:11:32.762Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T19:11:35.763Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-01T19:11:35.763Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-01T19:11:36.086Z] [BOT] ✅ Created forum post: 🏢 Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2025-12-01T19:11:37.829Z] [BOT] ✅ Created forum post: 🏢 Analyst – Data Integration @ ORG_86851bed Decision Technology in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-01T19:11:39.330Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T19:11:39.331Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T19:11:39.335Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-01T19:11:39.335Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T19:11:42.336Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-01T19:11:42.336Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-01T19:11:42.375Z] [BOT] 📂 Loaded 561 existing routing entries
[2025-12-01T19:11:42.415Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-01T19:11:42.415Z] [BOT] Total entries: 563
   Timestamp: 2025-12-01T19:11:42.413Z
[2025-12-01T19:11:44.425Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2328) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*