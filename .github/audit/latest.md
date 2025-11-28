# Discord Bot Execution Audit
**Timestamp:** 2025-11-28T22:36:50.355Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-28T22:36:26.001Z] ========================================
[2025-11-28T22:36:26.003Z] Discord Bot Execution Log
[2025-11-28T22:36:26.003Z] Environment: GitHub Actions
[2025-11-28T22:36:26.003Z] Node Version: v20.19.5
[2025-11-28T22:36:26.003Z] ========================================
[2025-11-28T22:36:26.003Z] Environment Variables Check:
[2025-11-28T22:36:26.003Z] DISCORD_TOKEN: ✅ Set
[2025-11-28T22:36:26.003Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-28T22:36:26.003Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-28T22:36:26.003Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-28T22:36:26.004Z] 
Multi-Channel Configuration:
[2025-11-28T22:36:26.004Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-28T22:36:26.004Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-28T22:36:26.004Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-28T22:36:26.004Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-28T22:36:26.004Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-28T22:36:26.004Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-28T22:36:26.004Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-28T22:36:26.004Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-28T22:36:26.004Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-28T22:36:26.004Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-28T22:36:26.004Z] 
Data Files Check:
[2025-11-28T22:36:26.005Z] .github/data/new_jobs.json: ✅ Exists (5 items, 26541 bytes)
[2025-11-28T22:36:26.007Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330305 bytes)
[2025-11-28T22:36:26.007Z] 
========================================
[2025-11-28T22:36:26.007Z] Starting Enhanced Discord Bot...
[2025-11-28T22:36:26.007Z] ========================================
[2025-11-28T22:36:26.926Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-28T22:36:26.927Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 5 jobs to encrypted JSON...
[2025-11-28T22:36:26.927Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-28T22:36:27.004Z] [BOT] ✅ Export complete: Added 0, Skipped 5, Total 5
[2025-11-28T22:36:27.005Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-28T22:36:27.005Z] [BOT] 📬 Found 4 new jobs (1 already posted)...
📋 After blacklist filter: 4 jobs (0 blacklisted)
[2025-11-28T22:36:27.005Z] [BOT] 📋 After title+company+location dedup: 4 unique jobs to post
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-28T22:36:27.008Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-11-28T22:36:27.008Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst" @ ORG_81f16575ington Bancshares
[2025-11-28T22:36:27.008Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-11-28T22:36:27.013Z] [BOT ERROR] (node:2542) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-28T22:36:27.254Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
[2025-11-28T22:36:27.254Z] [BOT] ✅ Industry: Technology Delivery Analyst @ ORG_81f16575ington Bancshares
[2025-11-28T22:36:28.986Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst @ ORG_81f16575ington Bancshares in #💻・remote-usa
[2025-11-28T22:36:28.987Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-28T22:36:30.488Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-28T22:36:30.488Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-28T22:36:30.494Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-28T22:36:30.494Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-28T22:36:33.494Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-11-28T22:36:33.494Z] [BOT] 📍 [ROUTING] "Power BI Developer 1" @ ORG_df2f8d56 Bank
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-28T22:36:33.827Z] [BOT] ✅ Created forum post: 🏢 Power BI Developer 1 @ ORG_df2f8d56 Bank in #💻・tech-jobs
[2025-11-28T22:36:33.827Z] [BOT] ✅ Industry: Power BI Developer 1 @ ORG_df2f8d56 Bank
[2025-11-28T22:36:35.549Z] [BOT] ✅ Created forum post: 🏢 Power BI Developer 1 @ ORG_df2f8d56 Bank in #🤠・austin
[2025-11-28T22:36:35.549Z] [BOT] ✅ Location: 🤠・austin
[2025-11-28T22:36:37.050Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-28T22:36:37.051Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-28T22:36:37.055Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-28T22:36:37.055Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-28T22:36:37.055Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_7b717950
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-28T22:36:37.396Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7b717950 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_7b717950
[2025-11-28T22:36:39.114Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7b717950 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-28T22:36:40.615Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-28T22:36:40.615Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-28T22:36:40.619Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-28T22:36:40.619Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "New Grad Software Engineer - Backend 2026" @ ORG_b93d3bce
   Category: TECH (matched: "software")
[2025-11-28T22:36:40.620Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-28T22:36:40.807Z] [BOT] ✅ Created forum post: 🏢 New Grad Software Engineer - Backend 2026 @ ORG_b93d3bce in #💻・tech-jobs
[2025-11-28T22:36:40.807Z] [BOT] ✅ Industry: New Grad Software Engineer - Backend 2026 @ ORG_b93d3bce
[2025-11-28T22:36:42.534Z] [BOT] ✅ Created forum post: 🏢 New Grad Software Engineer - Backend 2026 @ ORG_b93d3bce in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-28T22:36:44.035Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-28T22:36:44.036Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-28T22:36:44.040Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-28T22:36:44.040Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-28T22:36:47.041Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-28T22:36:47.079Z] [BOT] 📂 Loaded 533 existing routing entries
[2025-11-28T22:36:47.119Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 537
[2025-11-28T22:36:47.119Z] [BOT] Timestamp: 2025-11-28T22:36:47.117Z
[2025-11-28T22:36:49.128Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2542) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*