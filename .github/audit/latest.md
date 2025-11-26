# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T02:31:47.439Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T02:31:29.421Z] ========================================
[2025-11-26T02:31:29.422Z] Discord Bot Execution Log
[2025-11-26T02:31:29.422Z] Environment: GitHub Actions
[2025-11-26T02:31:29.422Z] Node Version: v20.19.5
[2025-11-26T02:31:29.422Z] ========================================
[2025-11-26T02:31:29.423Z] Environment Variables Check:
[2025-11-26T02:31:29.423Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T02:31:29.423Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T02:31:29.423Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T02:31:29.423Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T02:31:29.423Z] 
Multi-Channel Configuration:
[2025-11-26T02:31:29.423Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T02:31:29.423Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T02:31:29.423Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T02:31:29.423Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T02:31:29.423Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T02:31:29.423Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T02:31:29.423Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T02:31:29.423Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T02:31:29.423Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T02:31:29.423Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T02:31:29.423Z] 
Data Files Check:
[2025-11-26T02:31:29.424Z] .github/data/new_jobs.json: ✅ Exists (5 items, 30403 bytes)
[2025-11-26T02:31:29.426Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327995 bytes)
[2025-11-26T02:31:29.426Z] 
========================================
[2025-11-26T02:31:29.426Z] Starting Enhanced Discord Bot...
[2025-11-26T02:31:29.426Z] ========================================
[2025-11-26T02:31:30.686Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T02:31:30.686Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 5 jobs to encrypted JSON...
[2025-11-26T02:31:30.687Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T02:31:30.761Z] [BOT] ✅ Export complete: Added 0, Skipped 5, Total 5
[2025-11-26T02:31:30.762Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T02:31:30.762Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-26T02:31:30.762Z] [BOT] 📬 Found 3 new jobs (2 already posted)...
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T02:31:30.764Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-11-26T02:31:30.764Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_7b717950
[2025-11-26T02:31:30.764Z] [BOT] Category: TECH (matched: "software")
[2025-11-26T02:31:30.764Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T02:31:30.769Z] [BOT ERROR] (node:2423) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T02:31:31.046Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7b717950 in #💻・tech-jobs
[2025-11-26T02:31:31.047Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_7b717950
[2025-11-26T02:31:32.819Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7b717950 in #🌉・san-francisco
[2025-11-26T02:31:32.819Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-26T02:31:34.321Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T02:31:34.321Z] [BOT] 📍 [ROUTING] "Digital Data Analyst" @ ORG_85937e82 Inc.
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T02:31:34.520Z] [BOT] ✅ Created forum post: 🏢 Digital Data Analyst @ ORG_85937e82 Inc. in #💻・tech-jobs
[2025-11-26T02:31:34.520Z] [BOT] ✅ Industry: Digital Data Analyst @ ORG_85937e82 Inc.
[2025-11-26T02:31:36.233Z] [BOT] ✅ Created forum post: 🏢 Digital Data Analyst @ ORG_85937e82 Inc. in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-26T02:31:37.736Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T02:31:37.736Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T02:31:37.953Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T02:31:39.663Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T02:31:41.167Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T02:31:44.167Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T02:31:44.204Z] [BOT] 📂 Loaded 118 existing routing entries
[2025-11-26T02:31:44.240Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 121
   Timestamp: 2025-11-26T02:31:44.239Z
[2025-11-26T02:31:46.249Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2423) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*