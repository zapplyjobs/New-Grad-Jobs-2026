# Discord Bot Execution Audit
**Timestamp:** 2025-11-28T00:14:40.278Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-28T00:14:29.864Z] ========================================
[2025-11-28T00:14:29.866Z] Discord Bot Execution Log
[2025-11-28T00:14:29.866Z] Environment: GitHub Actions
[2025-11-28T00:14:29.866Z] Node Version: v20.19.5
[2025-11-28T00:14:29.866Z] ========================================
[2025-11-28T00:14:29.866Z] Environment Variables Check:
[2025-11-28T00:14:29.866Z] DISCORD_TOKEN: ✅ Set
[2025-11-28T00:14:29.867Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-28T00:14:29.867Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-28T00:14:29.867Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-28T00:14:29.867Z] 
Multi-Channel Configuration:
[2025-11-28T00:14:29.867Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-28T00:14:29.867Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-28T00:14:29.867Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-28T00:14:29.867Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-28T00:14:29.867Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-28T00:14:29.867Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-28T00:14:29.868Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-28T00:14:29.868Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-28T00:14:29.868Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-28T00:14:29.868Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-28T00:14:29.868Z] 
Data Files Check:
[2025-11-28T00:14:29.869Z] .github/data/new_jobs.json: ✅ Exists (14 items, 41907 bytes)
[2025-11-28T00:14:29.871Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 329747 bytes)
[2025-11-28T00:14:29.871Z] 
========================================
[2025-11-28T00:14:29.871Z] Starting Enhanced Discord Bot...
[2025-11-28T00:14:29.871Z] ========================================
[2025-11-28T00:14:30.899Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-28T00:14:30.900Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 14 jobs to encrypted JSON...
[2025-11-28T00:14:30.900Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-28T00:14:30.980Z] [BOT] ✅ Export complete: Added 0, Skipped 14, Total 14
[2025-11-28T00:14:30.981Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-28T00:14:30.981Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-28T00:14:30.981Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-28T00:14:30.982Z] [BOT] 📬 Found 10 new jobs (4 already posted)...
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
[2025-11-28T00:14:30.982Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
📋 After blacklist filter: 1 jobs (9 blacklisted)
[2025-11-28T00:14:30.982Z] [BOT] 📋 After title+company+location dedup: 1 unique jobs to post
[2025-11-28T00:14:30.982Z] [BOT] ⏸️ Limiting to 50 jobs this run, 9 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-28T00:14:30.983Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-28T00:14:30.983Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Web" @ ORG_9cc3a043
[2025-11-28T00:14:30.983Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-28T00:14:30.988Z] [BOT ERROR] (node:2207) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-28T00:14:31.156Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad - Web @ ORG_9cc3a043 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad - Web @ ORG_9cc3a043
[2025-11-28T00:14:32.879Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad - Web @ ORG_9cc3a043 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-28T00:14:34.381Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-28T00:14:34.382Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-28T00:14:34.387Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-28T00:14:34.387Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-28T00:14:37.387Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-11-28T00:14:37.388Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-28T00:14:37.427Z] [BOT] 📂 Loaded 520 existing routing entries
[2025-11-28T00:14:37.466Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 521
   Timestamp: 2025-11-28T00:14:37.465Z
[2025-11-28T00:14:39.475Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2207) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*