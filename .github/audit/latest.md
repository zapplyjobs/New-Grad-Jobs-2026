# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T00:40:19.676Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T00:39:47.590Z] ========================================
[2025-11-26T00:39:47.591Z] Discord Bot Execution Log
[2025-11-26T00:39:47.591Z] Environment: GitHub Actions
[2025-11-26T00:39:47.591Z] Node Version: v20.19.5
[2025-11-26T00:39:47.591Z] ========================================
[2025-11-26T00:39:47.591Z] Environment Variables Check:
[2025-11-26T00:39:47.591Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T00:39:47.591Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T00:39:47.591Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T00:39:47.591Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T00:39:47.591Z] 
Multi-Channel Configuration:
[2025-11-26T00:39:47.591Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T00:39:47.591Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T00:39:47.591Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T00:39:47.591Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T00:39:47.592Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T00:39:47.592Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T00:39:47.592Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T00:39:47.592Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T00:39:47.592Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T00:39:47.592Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T00:39:47.592Z] 
Data Files Check:
[2025-11-26T00:39:47.592Z] .github/data/new_jobs.json: ✅ Exists (7 items, 33279 bytes)
[2025-11-26T00:39:47.594Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327741 bytes)
[2025-11-26T00:39:47.594Z] 
========================================
[2025-11-26T00:39:47.594Z] Starting Enhanced Discord Bot...
[2025-11-26T00:39:47.594Z] ========================================
[2025-11-26T00:39:48.595Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T00:39:48.596Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 7 jobs to encrypted JSON...
[2025-11-26T00:39:48.596Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T00:39:48.671Z] [BOT] ✅ Export complete: Added 0, Skipped 7, Total 7
[2025-11-26T00:39:48.672Z] [BOT] 📬 Found 7 new jobs (0 already posted)...
[2025-11-26T00:39:48.673Z] [BOT] 📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T00:39:48.674Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2025-11-26T00:39:48.674Z] [BOT] 📍 [ROUTING] "Software Development Engineer - Level 1 - Direct-to-Consumer Streaming" @ ORG_91249fea
[2025-11-26T00:39:48.674Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T00:39:48.678Z] [BOT ERROR] (node:2675) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T00:39:48.991Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer - Level 1 - Direct-to-Consumer Streaming @ ORG_91249fea in #💻・tech-jobs
[2025-11-26T00:39:48.991Z] [BOT] ✅ Industry: Software Development Engineer - Level 1 - Direct-to-Consumer Streaming @ ORG_91249fea
[2025-11-26T00:39:50.696Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer - Level 1 - Direct-to-Consumer Streaming @ ORG_91249fea in #🌉・san-francisco
[2025-11-26T00:39:50.696Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-26T00:39:52.198Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T00:39:52.199Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - AWS - JavaScript" @ ORG_b344d80e Travelers Companies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T00:39:52.371Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - AWS - JavaScript @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
[2025-11-26T00:39:52.371Z] [BOT] ✅ Industry: Software Engineer 1 - AWS - JavaScript @ ORG_b344d80e Travelers Companies
[2025-11-26T00:39:54.116Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - AWS - JavaScript @ ORG_b344d80e Travelers Companies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T00:39:55.618Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T00:39:55.618Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - MIM Platform" @ ORG_e8760198 Healthcare
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T00:39:55.923Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - MIM Platform @ ORG_e8760198 Healthcare in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - MIM Platform @ ORG_e8760198 Healthcare
[2025-11-26T00:39:57.909Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - MIM Platform @ ORG_e8760198 Healthcare in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T00:39:59.412Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T00:39:59.412Z] [BOT] 📍 [ROUTING] "Data Science and Analytics 2 - Data Science & Digital Innovation" @ ORG_6042a4e3
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T00:39:59.738Z] [BOT] ✅ Created forum post: 🏢 Data Science and Analytics 2 - Data Science & Digital Innovation @ ORG_6042a4e3 in #💻・tech-jobs
[2025-11-26T00:39:59.738Z] [BOT] ✅ Industry: Data Science and Analytics 2 - Data Science & Digital Innovation @ ORG_6042a4e3
[2025-11-26T00:40:01.516Z] [BOT] ✅ Created forum post: 🏢 Data Science and Analytics 2 - Data Science & Digital Innovation @ ORG_6042a4e3 in #💻・remote-usa
[2025-11-26T00:40:01.516Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T00:40:03.018Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T00:40:03.019Z] [BOT] 📍 [ROUTING] "Revenue Systems and Analytics Analyst" @ KnowBe4
   Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T00:40:03.296Z] [BOT] ✅ Created forum post: 🏢 Revenue Systems and Analytics Analyst @ KnowBe4 in #💻・tech-jobs
[2025-11-26T00:40:03.296Z] [BOT] ✅ Industry: Revenue Systems and Analytics Analyst @ KnowBe4
[2025-11-26T00:40:05.127Z] [BOT] ✅ Created forum post: 🏢 Revenue Systems and Analytics Analyst @ KnowBe4 in #💻・remote-usa
[2025-11-26T00:40:05.127Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T00:40:06.630Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T00:40:06.630Z] [BOT] 📍 [ROUTING] "Software Engineer 2" @ ORG_32b661b3 Interactive Entertainment
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T00:40:06.950Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2025-11-26T00:40:06.950Z] [BOT] ✅ Industry: Software Engineer 2 @ ORG_32b661b3 Interactive Entertainment
[2025-11-26T00:40:08.708Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 @ ORG_32b661b3 Interactive Entertainment in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-26T00:40:10.211Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T00:40:10.211Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T00:40:10.638Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-26T00:40:10.639Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T00:40:12.358Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
[2025-11-26T00:40:12.358Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-26T00:40:13.861Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T00:40:16.862Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2025-11-26T00:40:16.862Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-26T00:40:16.898Z] [BOT] 📂 Loaded 106 existing routing entries
[2025-11-26T00:40:16.935Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
[2025-11-26T00:40:16.935Z] [BOT] Total entries: 113
   Timestamp: 2025-11-26T00:40:16.934Z
[2025-11-26T00:40:18.943Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2675) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*