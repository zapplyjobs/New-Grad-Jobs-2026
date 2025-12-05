# Discord Bot Execution Audit
**Timestamp:** 2025-12-05T13:33:42.236Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-05T13:33:15.469Z] ========================================
[2025-12-05T13:33:15.471Z] Discord Bot Execution Log
[2025-12-05T13:33:15.471Z] Environment: GitHub Actions
[2025-12-05T13:33:15.471Z] Node Version: v20.19.6
[2025-12-05T13:33:15.471Z] ========================================
[2025-12-05T13:33:15.471Z] Environment Variables Check:
[2025-12-05T13:33:15.471Z] DISCORD_TOKEN: ✅ Set
[2025-12-05T13:33:15.471Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-05T13:33:15.471Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-05T13:33:15.472Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-05T13:33:15.472Z] 
Multi-Channel Configuration:
[2025-12-05T13:33:15.472Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-05T13:33:15.472Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-05T13:33:15.472Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-05T13:33:15.472Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-05T13:33:15.472Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-05T13:33:15.472Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-05T13:33:15.472Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-05T13:33:15.472Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-05T13:33:15.472Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-05T13:33:15.472Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-05T13:33:15.472Z] 
Data Files Check:
[2025-12-05T13:33:15.476Z] .github/data/new_jobs.json: ✅ Exists (50 items, 469506 bytes)
[2025-12-05T13:33:15.477Z] .github/data/posted_jobs.json: ✅ Exists (3 items, 254 bytes)
[2025-12-05T13:33:15.477Z] 
========================================
[2025-12-05T13:33:15.477Z] Starting Enhanced Discord Bot...
[2025-12-05T13:33:15.477Z] ========================================
[2025-12-05T13:33:16.773Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-05T13:33:16.773Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-05T13:33:16.774Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-05T13:33:16.775Z] [BOT] 📦 Exporting 50 jobs to encrypted JSON...
[2025-12-05T13:33:16.874Z] [BOT] ✅ Export complete: Added 0, Skipped 50, Total 100
[2025-12-05T13:33:16.877Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2025-12-05T13:33:16.877Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2025-12-05T13:33:16.878Z] [BOT] ⏭️ Skipping duplicate title+company+location: Java Software Engineer 1 at Esri, West Redlands (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer - Backend - Platform at Astranis, SF (already posting one with this combination)
[2025-12-05T13:33:16.878Z] [BOT] ⏭️ Skipping duplicate title+company+location: Java Software Engineer 1 at Esri, West Redlands (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer - Backend - Platform at Astranis, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Java Software Engineer 1 at Esri, West Redlands (already posting one with this combination)
[2025-12-05T13:33:16.878Z] [BOT] ⏭️ Skipping duplicate title+company+location: Software Engineer - Backend - Platform at Astranis, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Java Software Engineer 1 at Esri, West Redlands (already posting one with this combination)
[2025-12-05T13:33:16.878Z] [BOT] ⏭️ Skipping duplicate title+company+location: Software Engineer - Backend - Platform at Astranis, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Java Software Engineer 1 at Esri, West Redlands (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer - Backend - Platform at Astranis, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Java Software Engineer 1 at Esri, West Redlands (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer - Backend - Platform at Astranis, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Java Software Engineer 1 at Esri, West Redlands (already posting one with this combination)
[2025-12-05T13:33:16.879Z] [BOT] ⏭️ Skipping duplicate title+company+location: Software Engineer - Backend - Platform at Astranis, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Java Software Engineer 1 at Esri, West Redlands (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer - Backend - Platform at Astranis, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Java Software Engineer 1 at Esri, West Redlands (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer - Backend - Platform at Astranis, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Java Software Engineer 1 at Esri, West Redlands (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer - Backend - Platform at Astranis, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Java Software Engineer 1 at Esri, West Redlands (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer - Backend - Platform at Astranis, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Java Software Engineer 1 at Esri, West Redlands (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer - Backend - Platform at Astranis, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at GumGum, Santa Monica (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Postdoctoral Researcher at National Renewable Energy Laboratory, Golden (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Java Software Engineer 1 at Esri, West Redlands (already posting one with this combination)
[2025-12-05T13:33:16.879Z] [BOT] ⏭️ Skipping duplicate title+company+location: Software Engineer - Backend - Platform at Astranis, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at GumGum, Santa Monica (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Postdoctoral Researcher at National Renewable Energy Laboratory, Golden (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Java Software Engineer 1 at Esri, West Redlands (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer - Backend - Platform at Astranis, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Scientist 1 at GAP, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at GumGum, Santa Monica (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Postdoctoral Researcher at National Renewable Energy Laboratory, Golden (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Java Software Engineer 1 at Esri, West Redlands (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer - Backend - Platform at Astranis, SF (already posting one with this combination)
[2025-12-05T13:33:16.879Z] [BOT] ⏭️ Skipping duplicate title+company+location: Data Scientist 1 at GAP, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at GumGum, Santa Monica (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Postdoctoral Researcher at National Renewable Energy Laboratory, Golden (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Java Software Engineer 1 at Esri, West Redlands (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer - Backend - Platform at Astranis, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Scientist 1 at GAP, SF (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at GumGum, Santa Monica (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Postdoctoral Researcher at National Renewable Energy Laboratory, Golden (already posting one with this combination)
[2025-12-05T13:33:16.879Z] [BOT] 📋 After title+company+location dedup: 5 unique jobs to post
   (45 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 45 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-05T13:33:16.881Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-05T13:33:16.882Z] [BOT] 📍 [ROUTING] "Java Software Engineer 1" @ ORG_0fb6ee9c
[2025-12-05T13:33:16.882Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T13:33:16.886Z] [BOT ERROR] (node:3884) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-05T13:33:17.155Z] [BOT] ✅ Created forum post: 🏢 Java Software Engineer 1 @ ORG_0fb6ee9c in #💻・tech-jobs
[2025-12-05T13:33:17.156Z] [BOT] ✅ Industry: Java Software Engineer 1 @ ORG_0fb6ee9c
[2025-12-05T13:33:18.658Z] [BOT] 💾 BEFORE SAVE: Database has 4 jobs
[2025-12-05T13:33:18.662Z] [BOT] 💾 Saved 4 posted jobs to database
[2025-12-05T13:33:18.663Z] [BOT] ✅ Verified: Database file contains 4 jobs
📍 [ROUTING] "Software Engineer - Backend - Platform" @ ORG_9ee5b96f
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T13:33:19.025Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Backend - Platform @ ORG_9ee5b96f in #💻・tech-jobs
  ✅ Industry: Software Engineer - Backend - Platform @ ORG_9ee5b96f
[2025-12-05T13:33:20.729Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Backend - Platform @ ORG_9ee5b96f in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-05T13:33:22.230Z] [BOT] 💾 BEFORE SAVE: Database has 5 jobs
[2025-12-05T13:33:22.231Z] [BOT] 💾 Saved 5 posted jobs to database
[2025-12-05T13:33:22.231Z] [BOT] ✅ Verified: Database file contains 5 jobs
📍 [ROUTING] "Software Engineer 1" @ ORG_655fad25
   Category: TECH (matched: "software")
[2025-12-05T13:33:22.231Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T13:33:22.463Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_655fad25 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_655fad25
[2025-12-05T13:33:24.169Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_655fad25 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-05T13:33:25.669Z] [BOT] 💾 BEFORE SAVE: Database has 6 jobs
[2025-12-05T13:33:25.671Z] [BOT] 💾 Saved 6 posted jobs to database
✅ Verified: Database file contains 6 jobs
[2025-12-05T13:33:25.671Z] [BOT] 📍 [ROUTING] "Data Scientist 1" @ ORG_62de62f4
   Category: TECH (matched: "data")
[2025-12-05T13:33:25.671Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T13:33:25.987Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_62de62f4 in #💻・tech-jobs
[2025-12-05T13:33:25.987Z] [BOT] ✅ Industry: Data Scientist 1 @ ORG_62de62f4
[2025-12-05T13:33:27.826Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_62de62f4 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-05T13:33:29.327Z] [BOT] 💾 BEFORE SAVE: Database has 7 jobs
[2025-12-05T13:33:29.328Z] [BOT] 💾 Saved 7 posted jobs to database
✅ Verified: Database file contains 7 jobs
[2025-12-05T13:33:32.329Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-05T13:33:32.329Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher" @ ORG_865b30e2 Renewable Energy Laboratory
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-05T13:33:32.580Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #📣・marketing-jobs
  ✅ Industry: Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory
[2025-12-05T13:33:34.346Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #💻・remote-usa
[2025-12-05T13:33:34.346Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T13:33:35.846Z] [BOT] 💾 BEFORE SAVE: Database has 8 jobs
[2025-12-05T13:33:35.848Z] [BOT] 💾 Saved 8 posted jobs to database
[2025-12-05T13:33:35.848Z] [BOT] ✅ Verified: Database file contains 8 jobs
[2025-12-05T13:33:38.849Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2025-12-05T13:33:38.858Z] [BOT] ✅ Loaded pending queue: 1292 total (1242 pending, 50 enriched, 0 posted)
[2025-12-05T13:33:38.873Z] [BOT] ✅ Saved pending queue: 1292 total (827 pending, 0 enriched, 465 posted)
📋 Updated queue: marked 465 jobs as posted
[2025-12-05T13:33:38.874Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-05T13:33:38.910Z] [BOT] 📂 Loaded 3 existing routing entries
[2025-12-05T13:33:38.946Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2025-12-05T13:33:38.947Z] [BOT] Total entries: 8
   Timestamp: 2025-12-05T13:33:38.946Z
[2025-12-05T13:33:40.960Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3884) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*