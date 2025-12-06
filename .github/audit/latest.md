# Discord Bot Execution Audit
**Timestamp:** 2025-12-06T01:54:07.666Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-06T01:53:38.007Z] ========================================
[2025-12-06T01:53:38.009Z] Discord Bot Execution Log
[2025-12-06T01:53:38.009Z] Environment: GitHub Actions
[2025-12-06T01:53:38.009Z] Node Version: v20.19.6
[2025-12-06T01:53:38.009Z] ========================================
[2025-12-06T01:53:38.009Z] Environment Variables Check:
[2025-12-06T01:53:38.009Z] DISCORD_TOKEN: ✅ Set
[2025-12-06T01:53:38.009Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-06T01:53:38.009Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-06T01:53:38.010Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-06T01:53:38.010Z] 
Multi-Channel Configuration:
[2025-12-06T01:53:38.010Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-06T01:53:38.010Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-06T01:53:38.010Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-06T01:53:38.010Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-06T01:53:38.010Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-06T01:53:38.010Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-06T01:53:38.010Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-06T01:53:38.010Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-06T01:53:38.010Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-06T01:53:38.010Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-06T01:53:38.010Z] 
Data Files Check:
[2025-12-06T01:53:38.011Z] .github/data/new_jobs.json: ✅ Exists (5 items, 76063 bytes)
[2025-12-06T01:53:38.011Z] .github/data/posted_jobs.json: ✅ Exists (59 items, 5779 bytes)
[2025-12-06T01:53:38.011Z] 
========================================
[2025-12-06T01:53:38.011Z] Starting Enhanced Discord Bot...
[2025-12-06T01:53:38.011Z] ========================================
[2025-12-06T01:53:39.373Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-06T01:53:39.374Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-06T01:53:39.374Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-06T01:53:39.374Z] [BOT] 📦 Exporting 5 jobs to encrypted JSON...
[2025-12-06T01:53:39.528Z] [BOT] ✅ Export complete: Added 0, Skipped 5, Total 316
[2025-12-06T01:53:39.529Z] [BOT] 📬 Found 5 new jobs (0 already posted)...
[2025-12-06T01:53:39.530Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
[2025-12-06T01:53:39.530Z] [BOT] 📋 After title+company+location dedup: 5 unique jobs to post
📤 Posting 5 jobs...
[2025-12-06T01:53:39.530Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-06T01:53:39.531Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-06T01:53:39.532Z] [BOT] 📍 [ROUTING] "AI Security Context Engineer" @ ORG_5d14f470
[2025-12-06T01:53:39.532Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-06T01:53:39.536Z] [BOT ERROR] (node:2582) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-06T01:53:39.773Z] [BOT] ✅ Created forum post: 🏢 AI Security Context Engineer @ ORG_5d14f470 in #💻・tech-jobs
  ✅ Industry: AI Security Context Engineer @ ORG_5d14f470
[2025-12-06T01:53:41.276Z] [BOT] 💾 BEFORE SAVE: Database has 60 jobs
[2025-12-06T01:53:41.280Z] [BOT] 💾 Saved 60 posted jobs to database
[2025-12-06T01:53:41.280Z] [BOT] ✅ Verified: Database file contains 60 jobs
[2025-12-06T01:53:41.280Z] [BOT] 📍 [ROUTING] "Data Research Specialist" @ ORG_c47d21c6 Friends
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-06T01:53:41.456Z] [BOT] ✅ Created forum post: 🏢 Data Research Specialist @ ORG_c47d21c6 Friends in #💻・tech-jobs
[2025-12-06T01:53:41.456Z] [BOT] ✅ Industry: Data Research Specialist @ ORG_c47d21c6 Friends
[2025-12-06T01:53:43.346Z] [BOT] ✅ Created forum post: 🏢 Data Research Specialist @ ORG_c47d21c6 Friends in #💻・remote-usa
[2025-12-06T01:53:43.346Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-06T01:53:44.847Z] [BOT] 💾 BEFORE SAVE: Database has 61 jobs
[2025-12-06T01:53:44.848Z] [BOT] 💾 Saved 61 posted jobs to database
[2025-12-06T01:53:44.848Z] [BOT] ✅ Verified: Database file contains 61 jobs
[2025-12-06T01:53:47.849Z] [BOT] 📌 Posting 2 jobs to #JID_fb739488
[2025-12-06T01:53:47.849Z] [BOT] 📍 [ROUTING] "Data Analyst 1" @ ORG_2be898eb Dickinson
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1446...2761)
[2025-12-06T01:53:48.181Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_2be898eb Dickinson in #JID_fb739488
  ✅ Industry: Data Analyst 1 @ ORG_2be898eb Dickinson
[2025-12-06T01:53:50.090Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_2be898eb Dickinson in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-06T01:53:51.592Z] [BOT] 💾 BEFORE SAVE: Database has 62 jobs
[2025-12-06T01:53:51.606Z] [BOT] 💾 Saved 62 posted jobs to database
✅ Verified: Database file contains 62 jobs
[2025-12-06T01:53:51.607Z] [BOT] 📍 [ROUTING] "Data Scientist 1 - Real World Data Science" @ ORG_24068d9f
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1446...2761)
[2025-12-06T01:53:51.914Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 - Real World Data Science @ ORG_24068d9f in #JID_fb739488
  ✅ Industry: Data Scientist 1 - Real World Data Science @ ORG_24068d9f
[2025-12-06T01:53:53.617Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 - Real World Data Science @ ORG_24068d9f in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-06T01:53:55.118Z] [BOT] 💾 BEFORE SAVE: Database has 63 jobs
[2025-12-06T01:53:55.119Z] [BOT] 💾 Saved 63 posted jobs to database
✅ Verified: Database file contains 63 jobs
[2025-12-06T01:53:58.120Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2025-12-06T01:53:58.120Z] [BOT] 📍 [ROUTING] "Mission Integration Engineer - Applied Computing - Starshield" @ ORG_afd623b1
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...1106)
[2025-12-06T01:53:58.347Z] [BOT] ✅ Created forum post: 🚀 Mission Integration Engineer - Applied Computing - Starshield @ ORG_afd623b1 in #ai-jobs
  ✅ Industry: Mission Integration Engineer - Applied Computing - Starshield @ ORG_afd623b1
[2025-12-06T01:54:00.336Z] [BOT] ✅ Created forum post: 🚀 Mission Integration Engineer - Applied Computing - Starshield @ ORG_afd623b1 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-06T01:54:01.837Z] [BOT] 💾 BEFORE SAVE: Database has 64 jobs
[2025-12-06T01:54:01.838Z] [BOT] 💾 Saved 64 posted jobs to database
✅ Verified: Database file contains 64 jobs
[2025-12-06T01:54:04.839Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2025-12-06T01:54:04.840Z] [BOT] ✅ Loaded pending queue: 5 total (0 pending, 5 enriched, 0 posted)
[2025-12-06T01:54:04.841Z] [BOT] ✅ Saved pending queue: 5 total (0 pending, 0 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
[2025-12-06T01:54:04.841Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-06T01:54:04.880Z] [BOT] 📂 Loaded 170 existing routing entries
[2025-12-06T01:54:04.918Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
   Total entries: 175
   Timestamp: 2025-12-06T01:54:04.918Z
[2025-12-06T01:54:06.927Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2582) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*