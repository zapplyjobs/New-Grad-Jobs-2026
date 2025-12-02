# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T23:35:38.170Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T23:35:10.728Z] ========================================
[2025-12-02T23:35:10.729Z] Discord Bot Execution Log
[2025-12-02T23:35:10.729Z] Environment: GitHub Actions
[2025-12-02T23:35:10.730Z] Node Version: v20.19.5
[2025-12-02T23:35:10.730Z] ========================================
[2025-12-02T23:35:10.730Z] Environment Variables Check:
[2025-12-02T23:35:10.730Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T23:35:10.730Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T23:35:10.730Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T23:35:10.730Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T23:35:10.730Z] 
Multi-Channel Configuration:
[2025-12-02T23:35:10.730Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T23:35:10.730Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T23:35:10.730Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T23:35:10.731Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T23:35:10.731Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T23:35:10.731Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T23:35:10.731Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T23:35:10.731Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T23:35:10.731Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T23:35:10.731Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T23:35:10.731Z] 
Data Files Check:
[2025-12-02T23:35:10.732Z] .github/data/new_jobs.json: ✅ Exists (9 items, 47146 bytes)
[2025-12-02T23:35:10.734Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333125 bytes)
[2025-12-02T23:35:10.734Z] 
========================================
[2025-12-02T23:35:10.734Z] Starting Enhanced Discord Bot...
[2025-12-02T23:35:10.734Z] ========================================
[2025-12-02T23:35:11.678Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T23:35:11.679Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 9 jobs to encrypted JSON...
[2025-12-02T23:35:11.679Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T23:35:11.755Z] [BOT] ✅ Export complete: Added 0, Skipped 9, Total 9
[2025-12-02T23:35:11.756Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-02T23:35:11.756Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-02T23:35:11.756Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-02T23:35:11.757Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
📬 Found 5 new jobs (4 already posted)...
[2025-12-02T23:35:11.757Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
[2025-12-02T23:35:11.757Z] [BOT] 📋 After title+company+location dedup: 5 unique jobs to post
[2025-12-02T23:35:11.757Z] [BOT] 📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T23:35:11.762Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-02T23:35:11.762Z] [BOT] 📍 [ROUTING] "AI Product Specialist" @ ORG_a0a5b7ba
[2025-12-02T23:35:11.762Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T23:35:11.766Z] [BOT ERROR] (node:2564) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T23:35:11.976Z] [BOT] ✅ Created forum post: 🏢 AI Product Specialist @ ORG_a0a5b7ba in #💻・tech-jobs
[2025-12-02T23:35:11.976Z] [BOT] ✅ Industry: AI Product Specialist @ ORG_a0a5b7ba
[2025-12-02T23:35:13.733Z] [BOT] ✅ Created forum post: 🏢 AI Product Specialist @ ORG_a0a5b7ba in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-02T23:35:15.233Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T23:35:15.233Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T23:35:15.238Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-02T23:35:15.238Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Full Stack Software Engineer Graduate" @ ORG_f5f00f52
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T23:35:15.465Z] [BOT] ✅ Created forum post: 🏢 Full Stack Software Engineer Graduate @ ORG_f5f00f52 in #💻・tech-jobs
  ✅ Industry: Full Stack Software Engineer Graduate @ ORG_f5f00f52
[2025-12-02T23:35:17.124Z] [BOT] ✅ Created forum post: 🏢 Full Stack Software Engineer Graduate @ ORG_f5f00f52 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-02T23:35:18.624Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T23:35:18.625Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T23:35:18.628Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T23:35:18.628Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Associate AI & Analytics Engineer" @ ORG_e5e989f2 Energy
   Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T23:35:18.859Z] [BOT] ✅ Created forum post: 🏢 Associate AI & Analytics Engineer @ ORG_e5e989f2 Energy in #💻・tech-jobs
[2025-12-02T23:35:18.859Z] [BOT] ✅ Industry: Associate AI & Analytics Engineer @ ORG_e5e989f2 Energy
[2025-12-02T23:35:20.531Z] [BOT] ✅ Created forum post: 🏢 Associate AI & Analytics Engineer @ ORG_e5e989f2 Energy in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-02T23:35:22.031Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T23:35:22.032Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T23:35:22.036Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T23:35:22.036Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Tech 1 – Mapping" @ ORG_6f8a62f0 Hathaway Energy
[2025-12-02T23:35:22.036Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T23:35:22.411Z] [BOT] ✅ Created forum post: 🏢 Tech 1 – Mapping @ ORG_6f8a62f0 Hathaway Energy in #💻・tech-jobs
  ✅ Industry: Tech 1 – Mapping @ ORG_6f8a62f0 Hathaway Energy
[2025-12-02T23:35:24.343Z] [BOT] ✅ Created forum post: 🏢 Tech 1 – Mapping @ ORG_6f8a62f0 Hathaway Energy in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-02T23:35:25.843Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T23:35:25.844Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T23:35:25.848Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T23:35:25.848Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T23:35:28.848Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-02T23:35:28.849Z] [BOT] 📍 [ROUTING] "GIS Analyst 1" @ ORG_fc33f732 of Amarillo
   Category: HR (matched: "human resources")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-02T23:35:29.141Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #📁・JID_e938df7b
  ✅ Industry: GIS Analyst 1 @ ORG_fc33f732 of Amarillo
[2025-12-02T23:35:30.818Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-02T23:35:32.319Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T23:35:32.319Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T23:35:32.323Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T23:35:32.323Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T23:35:35.324Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-02T23:35:35.362Z] [BOT] 📂 Loaded 630 existing routing entries
[2025-12-02T23:35:35.401Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
   Total entries: 635
   Timestamp: 2025-12-02T23:35:35.399Z
[2025-12-02T23:35:37.410Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2564) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*