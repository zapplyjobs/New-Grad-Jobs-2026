# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T03:09:30.457Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T03:09:05.171Z] ========================================
[2025-11-26T03:09:05.172Z] Discord Bot Execution Log
[2025-11-26T03:09:05.172Z] Environment: GitHub Actions
[2025-11-26T03:09:05.172Z] Node Version: v20.19.5
[2025-11-26T03:09:05.172Z] ========================================
[2025-11-26T03:09:05.172Z] Environment Variables Check:
[2025-11-26T03:09:05.172Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T03:09:05.172Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T03:09:05.172Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T03:09:05.172Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T03:09:05.172Z] 
Multi-Channel Configuration:
[2025-11-26T03:09:05.172Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T03:09:05.172Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T03:09:05.172Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T03:09:05.173Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T03:09:05.173Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T03:09:05.173Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T03:09:05.173Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T03:09:05.173Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T03:09:05.173Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T03:09:05.173Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T03:09:05.173Z] 
Data Files Check:
[2025-11-26T03:09:05.173Z] .github/data/new_jobs.json: ✅ Exists (7 items, 44139 bytes)
[2025-11-26T03:09:05.175Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328067 bytes)
[2025-11-26T03:09:05.175Z] 
========================================
[2025-11-26T03:09:05.175Z] Starting Enhanced Discord Bot...
[2025-11-26T03:09:05.175Z] ========================================
[2025-11-26T03:09:06.348Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T03:09:06.348Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 7 jobs to encrypted JSON...
[2025-11-26T03:09:06.349Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T03:09:06.431Z] [BOT] ✅ Export complete: Added 0, Skipped 7, Total 7
[2025-11-26T03:09:06.432Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T03:09:06.432Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 5 new jobs (2 already posted)...
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T03:09:06.433Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-11-26T03:09:06.433Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_5132f94c
[2025-11-26T03:09:06.433Z] [BOT] Category: TECH (matched: "software")
[2025-11-26T03:09:06.433Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T03:09:06.438Z] [BOT ERROR] (node:2802) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T03:09:06.654Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_5132f94c in #💻・tech-jobs
[2025-11-26T03:09:06.654Z] [BOT] ✅ Industry: Software Engineer @ ORG_5132f94c
[2025-11-26T03:09:08.383Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_5132f94c in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-26T03:09:09.885Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T03:09:09.886Z] [BOT] 📍 [ROUTING] "Associate Web Developer" @ Bio-Techne
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T03:09:10.199Z] [BOT] ✅ Created forum post: 🏢 Associate Web Developer @ Bio-Techne in #💻・tech-jobs
  ✅ Industry: Associate Web Developer @ Bio-Techne
[2025-11-26T03:09:11.988Z] [BOT] ✅ Created forum post: 🏢 Associate Web Developer @ Bio-Techne in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T03:09:13.491Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T03:09:13.492Z] [BOT] 📍 [ROUTING] "Software Engineer - Frontend" @ ORG_9e499e4c Commerce
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T03:09:13.724Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Frontend @ ORG_9e499e4c Commerce in #💻・tech-jobs
[2025-11-26T03:09:13.724Z] [BOT] ✅ Industry: Software Engineer - Frontend @ ORG_9e499e4c Commerce
[2025-11-26T03:09:15.524Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Frontend @ ORG_9e499e4c Commerce in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T03:09:17.027Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T03:09:17.027Z] [BOT] 📍 [ROUTING] "Data Technology Analyst - Year Up" @ ORG_676c471b of America
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T03:09:17.211Z] [BOT] ✅ Created forum post: 🏢 Data Technology Analyst - Year Up @ ORG_676c471b of America in #💻・tech-jobs
  ✅ Industry: Data Technology Analyst - Year Up @ ORG_676c471b of America
[2025-11-26T03:09:18.951Z] [BOT] ✅ Created forum post: 🏢 Data Technology Analyst - Year Up @ ORG_676c471b of America in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T03:09:20.454Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T03:09:20.454Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T03:09:20.712Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T03:09:22.573Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T03:09:24.077Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T03:09:27.077Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T03:09:27.115Z] [BOT] 📂 Loaded 121 existing routing entries
[2025-11-26T03:09:27.153Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
   Total entries: 126
[2025-11-26T03:09:27.153Z] [BOT] Timestamp: 2025-11-26T03:09:27.152Z
[2025-11-26T03:09:29.161Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2802) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*