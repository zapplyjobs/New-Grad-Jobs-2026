# Discord Bot Execution Audit
**Timestamp:** 2025-12-08T18:46:17.676Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-08T18:45:42.554Z] ========================================
[2025-12-08T18:45:42.556Z] Discord Bot Execution Log
[2025-12-08T18:45:42.556Z] Environment: GitHub Actions
[2025-12-08T18:45:42.556Z] Node Version: v20.19.6
[2025-12-08T18:45:42.556Z] ========================================
[2025-12-08T18:45:42.556Z] Environment Variables Check:
[2025-12-08T18:45:42.556Z] DISCORD_TOKEN: ✅ Set
[2025-12-08T18:45:42.556Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-08T18:45:42.556Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-08T18:45:42.556Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-08T18:45:42.556Z] 
Multi-Channel Configuration:
[2025-12-08T18:45:42.556Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-08T18:45:42.557Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-08T18:45:42.557Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-08T18:45:42.557Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-08T18:45:42.557Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-08T18:45:42.557Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-08T18:45:42.557Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-08T18:45:42.557Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-08T18:45:42.557Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-08T18:45:42.557Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-08T18:45:42.557Z] 
Data Files Check:
[2025-12-08T18:45:42.558Z] .github/data/new_jobs.json: ✅ Exists (6 items, 93910 bytes)
[2025-12-08T18:45:42.558Z] .github/data/posted_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-08T18:45:42.558Z] 
========================================
[2025-12-08T18:45:42.558Z] Starting Enhanced Discord Bot...
[2025-12-08T18:45:42.558Z] ========================================
[2025-12-08T18:45:43.818Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-08T18:45:43.819Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-08T18:45:43.819Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-08T18:45:43.820Z] [BOT] 📦 Exporting 6 jobs to encrypted JSON...
[2025-12-08T18:45:43.966Z] [BOT] ✅ Export complete: Added 0, Skipped 6, Total 334
[2025-12-08T18:45:43.968Z] [BOT] 📬 Found 6 new jobs (0 already posted)...
[2025-12-08T18:45:43.968Z] [BOT] 📋 After blacklist filter: 6 jobs (0 blacklisted)
[2025-12-08T18:45:43.968Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
[2025-12-08T18:45:43.968Z] [BOT] 📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-08T18:45:43.971Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-08T18:45:43.972Z] [BOT] 📍 [ROUTING] "Business Data Steward - Consumer and Small Business Banking" @ ORG_b93825c5 Bank
[2025-12-08T18:45:43.972Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-08T18:45:43.976Z] [BOT ERROR] (node:2833) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-08T18:45:44.226Z] [BOT] ✅ Created forum post: 🏢 Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank in #💻・tech-jobs
[2025-12-08T18:45:44.226Z] [BOT] ✅ Industry: Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank
[2025-12-08T18:45:45.938Z] [BOT] ✅ Created forum post: 🏢 Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank in #🌉・san-francisco
[2025-12-08T18:45:45.938Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-08T18:45:47.439Z] [BOT] 💾 BEFORE SAVE: Database has 1 jobs
[2025-12-08T18:45:47.444Z] [BOT] 💾 Saved 1 posted jobs to database
[2025-12-08T18:45:47.444Z] [BOT] ✅ Verified: Database file contains 1 jobs
📍 [ROUTING] "Software Engineer 1" @ ORG_b344d80e Walt Disney Company
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-08T18:45:47.694Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_b344d80e Walt Disney Company in #💻・tech-jobs
[2025-12-08T18:45:47.694Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_b344d80e Walt Disney Company
[2025-12-08T18:45:49.674Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_b344d80e Walt Disney Company in #🦢・los-angeles
[2025-12-08T18:45:49.674Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-08T18:45:51.175Z] [BOT] 💾 BEFORE SAVE: Database has 2 jobs
[2025-12-08T18:45:51.177Z] [BOT] 💾 Saved 2 posted jobs to database
[2025-12-08T18:45:51.178Z] [BOT] ✅ Verified: Database file contains 2 jobs
📍 [ROUTING] "Software Engineer - Robotics" @ ORG_3db79629 Robotics
   Category: TECH (matched: "software")
[2025-12-08T18:45:51.178Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-08T18:45:51.437Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Robotics @ ORG_3db79629 Robotics in #💻・tech-jobs
[2025-12-08T18:45:51.438Z] [BOT] ✅ Industry: Software Engineer - Robotics @ ORG_3db79629 Robotics
[2025-12-08T18:45:53.319Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Robotics @ ORG_3db79629 Robotics in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-08T18:45:54.820Z] [BOT] 💾 BEFORE SAVE: Database has 3 jobs
[2025-12-08T18:45:54.821Z] [BOT] 💾 Saved 3 posted jobs to database
✅ Verified: Database file contains 3 jobs
[2025-12-08T18:45:57.823Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2025-12-08T18:45:57.823Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Energy Systems" @ ORG_a867f63f National Laboratory
   Category: SUPPLY-CHAIN (matched: "distribution")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2025-12-08T18:45:58.055Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Energy Systems @ ORG_a867f63f National Laboratory in #🏗️・JID_b7c6683f
[2025-12-08T18:45:58.055Z] [BOT] ✅ Industry: Postdoctoral Appointee - Energy Systems @ ORG_a867f63f National Laboratory
[2025-12-08T18:45:59.850Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Energy Systems @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-08T18:46:01.351Z] [BOT] 💾 BEFORE SAVE: Database has 4 jobs
[2025-12-08T18:46:01.352Z] [BOT] 💾 Saved 4 posted jobs to database
✅ Verified: Database file contains 4 jobs
[2025-12-08T18:46:04.352Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-08T18:46:04.352Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-08T18:46:04.620Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-08T18:46:06.338Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-08T18:46:07.839Z] [BOT] 💾 BEFORE SAVE: Database has 5 jobs
[2025-12-08T18:46:07.840Z] [BOT] 💾 Saved 5 posted jobs to database
[2025-12-08T18:46:07.840Z] [BOT] ✅ Verified: Database file contains 5 jobs
📍 [ROUTING] "Data Scientist - New College Grad" @ ORG_0c79a9c2 Materials
   Category: AI (matched: "machine learning")
[2025-12-08T18:46:07.840Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2025-12-08T18:46:08.034Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - New College Grad @ ORG_0c79a9c2 Materials in #🤖・ai-jobs
[2025-12-08T18:46:08.035Z] [BOT] ✅ Industry: Data Scientist - New College Grad @ ORG_0c79a9c2 Materials
[2025-12-08T18:46:09.796Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - New College Grad @ ORG_0c79a9c2 Materials in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-08T18:46:11.297Z] [BOT] 💾 BEFORE SAVE: Database has 6 jobs
[2025-12-08T18:46:11.299Z] [BOT] 💾 Saved 6 posted jobs to database
[2025-12-08T18:46:11.299Z] [BOT] ✅ Verified: Database file contains 6 jobs
[2025-12-08T18:46:14.300Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2025-12-08T18:46:14.301Z] [BOT] ✅ Loaded pending queue: 6 total (0 pending, 6 enriched, 0 posted)
[2025-12-08T18:46:14.302Z] [BOT] ✅ Saved pending queue: 6 total (0 pending, 0 enriched, 6 posted)
[2025-12-08T18:46:14.303Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-08T18:46:14.340Z] [BOT] 📂 Loaded 240 existing routing entries
[2025-12-08T18:46:14.377Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
[2025-12-08T18:46:14.377Z] [BOT] Total entries: 246
   Timestamp: 2025-12-08T18:46:14.376Z
[2025-12-08T18:46:16.387Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2833) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*