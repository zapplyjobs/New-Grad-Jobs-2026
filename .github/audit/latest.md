# Discord Bot Execution Audit
**Timestamp:** 2025-12-07T14:36:11.217Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-07T14:35:53.351Z] ========================================
[2025-12-07T14:35:53.352Z] Discord Bot Execution Log
[2025-12-07T14:35:53.353Z] Environment: GitHub Actions
[2025-12-07T14:35:53.353Z] Node Version: v20.19.6
[2025-12-07T14:35:53.353Z] ========================================
[2025-12-07T14:35:53.353Z] Environment Variables Check:
[2025-12-07T14:35:53.353Z] DISCORD_TOKEN: ✅ Set
[2025-12-07T14:35:53.353Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-07T14:35:53.353Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-07T14:35:53.353Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-07T14:35:53.353Z] 
Multi-Channel Configuration:
[2025-12-07T14:35:53.353Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-07T14:35:53.353Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-07T14:35:53.354Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-07T14:35:53.354Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-07T14:35:53.354Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-07T14:35:53.354Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-07T14:35:53.354Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-07T14:35:53.354Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-07T14:35:53.354Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-07T14:35:53.354Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-07T14:35:53.354Z] 
Data Files Check:
[2025-12-07T14:35:53.355Z] .github/data/new_jobs.json: ✅ Exists (2 items, 36827 bytes)
[2025-12-07T14:35:53.355Z] .github/data/posted_jobs.json: ✅ Exists (49 items, 4819 bytes)
[2025-12-07T14:35:53.355Z] 
========================================
[2025-12-07T14:35:53.355Z] Starting Enhanced Discord Bot...
[2025-12-07T14:35:53.355Z] ========================================
[2025-12-07T14:35:54.940Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-07T14:35:54.940Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-12-07T14:35:54.941Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-07T14:35:55.092Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 334
[2025-12-07T14:35:55.094Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-07T14:35:55.094Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-07T14:35:55.094Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-07T14:35:55.097Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-07T14:35:55.097Z] [BOT] 📍 [ROUTING] "Business Data Steward - Consumer and Small Business Banking" @ ORG_b93825c5 Bank
[2025-12-07T14:35:55.098Z] [BOT] Category: TECH (matched: "data")
[2025-12-07T14:35:55.098Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T14:35:55.102Z] [BOT ERROR] (node:2528) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-07T14:35:55.314Z] [BOT] ✅ Created forum post: 🏢 Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank in #💻・tech-jobs
[2025-12-07T14:35:55.314Z] [BOT] ✅ Industry: Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank
[2025-12-07T14:35:57.179Z] [BOT] ✅ Created forum post: 🏢 Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-07T14:35:58.680Z] [BOT] 💾 BEFORE SAVE: Database has 50 jobs
[2025-12-07T14:35:58.685Z] [BOT] 💾 Saved 50 posted jobs to database
[2025-12-07T14:35:58.685Z] [BOT] ✅ Verified: Database file contains 50 jobs
[2025-12-07T14:36:01.685Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2025-12-07T14:36:01.685Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Energy Systems" @ ORG_a867f63f National Laboratory
   Category: SUPPLY-CHAIN (matched: "distribution")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2025-12-07T14:36:01.933Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Energy Systems @ ORG_a867f63f National Laboratory in #🏗️・JID_b7c6683f
[2025-12-07T14:36:01.933Z] [BOT] ✅ Industry: Postdoctoral Appointee - Energy Systems @ ORG_a867f63f National Laboratory
[2025-12-07T14:36:03.592Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Energy Systems @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-07T14:36:05.093Z] [BOT] 💾 BEFORE SAVE: Database has 51 jobs
[2025-12-07T14:36:05.140Z] [BOT] 💾 Saved 51 posted jobs to database
✅ Verified: Database file contains 51 jobs
[2025-12-07T14:36:08.141Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-07T14:36:08.141Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-07T14:36:08.142Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-07T14:36:08.180Z] [BOT] 📂 Loaded 238 existing routing entries
[2025-12-07T14:36:08.219Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 240
   Timestamp: 2025-12-07T14:36:08.218Z
[2025-12-07T14:36:10.229Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2528) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*