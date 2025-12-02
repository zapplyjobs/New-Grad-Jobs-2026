# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T19:10:21.259Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T19:09:50.440Z] ========================================
[2025-12-02T19:09:50.442Z] Discord Bot Execution Log
[2025-12-02T19:09:50.442Z] Environment: GitHub Actions
[2025-12-02T19:09:50.442Z] Node Version: v20.19.5
[2025-12-02T19:09:50.442Z] ========================================
[2025-12-02T19:09:50.442Z] Environment Variables Check:
[2025-12-02T19:09:50.442Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T19:09:50.442Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T19:09:50.442Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T19:09:50.442Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T19:09:50.442Z] 
Multi-Channel Configuration:
[2025-12-02T19:09:50.442Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T19:09:50.443Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T19:09:50.443Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T19:09:50.443Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T19:09:50.443Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T19:09:50.443Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T19:09:50.443Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T19:09:50.443Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T19:09:50.443Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T19:09:50.443Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T19:09:50.443Z] 
Data Files Check:
[2025-12-02T19:09:50.444Z] .github/data/new_jobs.json: ✅ Exists (6 items, 34671 bytes)
[2025-12-02T19:09:50.446Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332864 bytes)
[2025-12-02T19:09:50.446Z] 
========================================
[2025-12-02T19:09:50.446Z] Starting Enhanced Discord Bot...
[2025-12-02T19:09:50.446Z] ========================================
[2025-12-02T19:09:51.554Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T19:09:51.555Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 6 jobs to encrypted JSON...
[2025-12-02T19:09:51.555Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T19:09:51.634Z] [BOT] ✅ Export complete: Added 0, Skipped 6, Total 6
[2025-12-02T19:09:51.635Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-02T19:09:51.635Z] [BOT] 📬 Found 5 new jobs (1 already posted)...
📋 After blacklist filter: 5 jobs (0 blacklisted)
[2025-12-02T19:09:51.636Z] [BOT] 📋 After title+company+location dedup: 5 unique jobs to post
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T19:09:51.639Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-02T19:09:51.639Z] [BOT] 📍 [ROUTING] "Research Assistant" @ ORG_15a5b314 Mellon University
[2025-12-02T19:09:51.639Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-02T19:09:51.644Z] [BOT ERROR] (node:3029) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T19:09:51.937Z] [BOT] ✅ Created forum post: 🏢 Research Assistant @ ORG_15a5b314 Mellon University in #📣・marketing-jobs
  ✅ Industry: Research Assistant @ ORG_15a5b314 Mellon University
[2025-12-02T19:09:53.702Z] [BOT] ✅ Created forum post: 🏢 Research Assistant @ ORG_15a5b314 Mellon University in #💻・remote-usa
[2025-12-02T19:09:53.702Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-02T19:09:55.202Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T19:09:55.203Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T19:09:55.208Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-02T19:09:55.208Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T19:09:58.209Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-02T19:09:58.210Z] [BOT] 📍 [ROUTING] "Data Science Analyst" @ ORG_6c742cbbin Financial
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T19:09:58.523Z] [BOT] ✅ Created forum post: 🏢 Data Science Analyst @ ORG_6c742cbbin Financial in #💻・tech-jobs
[2025-12-02T19:09:58.523Z] [BOT] ✅ Industry: Data Science Analyst @ ORG_6c742cbbin Financial
[2025-12-02T19:10:00.240Z] [BOT] ✅ Created forum post: 🏢 Data Science Analyst @ ORG_6c742cbbin Financial in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-02T19:10:01.741Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T19:10:01.741Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T19:10:01.746Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-02T19:10:01.746Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Associate Advanced Analytics Analyst" @ ORG_fa31032b
   Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T19:10:01.941Z] [BOT] ✅ Created forum post: 🏢 Associate Advanced Analytics Analyst @ ORG_fa31032b in #💻・tech-jobs
  ✅ Industry: Associate Advanced Analytics Analyst @ ORG_fa31032b
[2025-12-02T19:10:03.678Z] [BOT] ✅ Created forum post: 🏢 Associate Advanced Analytics Analyst @ ORG_fa31032b in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-02T19:10:05.179Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T19:10:05.179Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T19:10:05.182Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-02T19:10:05.182Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Research Data Analyst" @ ORG_1954b120
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T19:10:05.439Z] [BOT] ✅ Created forum post: 🏢 Research Data Analyst @ ORG_1954b120 in #💻・tech-jobs
  ✅ Industry: Research Data Analyst @ ORG_1954b120
[2025-12-02T19:10:07.195Z] [BOT] ✅ Created forum post: 🏢 Research Data Analyst @ ORG_1954b120 in #💻・remote-usa
[2025-12-02T19:10:07.195Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-02T19:10:08.696Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T19:10:08.696Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T19:10:08.700Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T19:10:08.700Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T19:10:11.701Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-02T19:10:11.701Z] [BOT] 📍 [ROUTING] "GIS Analyst 1" @ ORG_fc33f732 of Amarillo
   Category: HR (matched: "human resources")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-02T19:10:12.026Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #📁・JID_e938df7b
[2025-12-02T19:10:12.026Z] [BOT] ✅ Industry: GIS Analyst 1 @ ORG_fc33f732 of Amarillo
[2025-12-02T19:10:13.755Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #🤠・austin
[2025-12-02T19:10:13.755Z] [BOT] ✅ Location: 🤠・austin
[2025-12-02T19:10:15.255Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T19:10:15.256Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T19:10:15.260Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T19:10:15.260Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T19:10:18.260Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2025-12-02T19:10:18.260Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-02T19:10:18.300Z] [BOT] 📂 Loaded 605 existing routing entries
[2025-12-02T19:10:18.341Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2025-12-02T19:10:18.341Z] [BOT] Total entries: 610
   Timestamp: 2025-12-02T19:10:18.339Z
[2025-12-02T19:10:20.351Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3029) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*