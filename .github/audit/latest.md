# Discord Bot Execution Audit
**Timestamp:** 2025-12-08T19:49:05.156Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-08T19:48:27.062Z] ========================================
[2025-12-08T19:48:27.064Z] Discord Bot Execution Log
[2025-12-08T19:48:27.064Z] Environment: GitHub Actions
[2025-12-08T19:48:27.064Z] Node Version: v20.19.6
[2025-12-08T19:48:27.064Z] ========================================
[2025-12-08T19:48:27.064Z] Environment Variables Check:
[2025-12-08T19:48:27.064Z] DISCORD_TOKEN: ✅ Set
[2025-12-08T19:48:27.064Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-08T19:48:27.064Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-08T19:48:27.065Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-08T19:48:27.065Z] 
Multi-Channel Configuration:
[2025-12-08T19:48:27.065Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-08T19:48:27.065Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-08T19:48:27.065Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-08T19:48:27.065Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-08T19:48:27.065Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-08T19:48:27.065Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-08T19:48:27.065Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-08T19:48:27.065Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-08T19:48:27.065Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-08T19:48:27.065Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-08T19:48:27.066Z] 
Data Files Check:
[2025-12-08T19:48:27.066Z] .github/data/new_jobs.json: ✅ Exists (6 items, 93910 bytes)
[2025-12-08T19:48:27.067Z] .github/data/posted_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-08T19:48:27.067Z] 
========================================
[2025-12-08T19:48:27.067Z] Starting Enhanced Discord Bot...
[2025-12-08T19:48:27.067Z] ========================================
[2025-12-08T19:48:28.721Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-08T19:48:28.721Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 6 jobs to encrypted JSON...
[2025-12-08T19:48:28.722Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-08T19:48:28.873Z] [BOT] ✅ Export complete: Added 0, Skipped 6, Total 334
[2025-12-08T19:48:28.874Z] [BOT] 📬 Found 6 new jobs (0 already posted)...
[2025-12-08T19:48:28.874Z] [BOT] 📋 After blacklist filter: 6 jobs (0 blacklisted)
[2025-12-08T19:48:28.875Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
[2025-12-08T19:48:28.875Z] [BOT] 📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-08T19:48:28.878Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-08T19:48:28.878Z] [BOT] 📍 [ROUTING] "Business Data Steward - Consumer and Small Business Banking" @ ORG_b93825c5 Bank
[2025-12-08T19:48:28.879Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-08T19:48:28.883Z] [BOT ERROR] (node:2868) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-08T19:48:29.080Z] [BOT] ✅ Created forum post: 🏢 Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank in #💻・tech-jobs
[2025-12-08T19:48:29.080Z] [BOT] ✅ Industry: Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank
[2025-12-08T19:48:30.793Z] [BOT] ✅ Created forum post: 🏢 Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-08T19:48:32.294Z] [BOT] 💾 BEFORE SAVE: Database has 1 jobs
[2025-12-08T19:48:32.299Z] [BOT] 💾 Saved 1 posted jobs to database
✅ Verified: Database file contains 1 jobs
[2025-12-08T19:48:32.299Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_b344d80e Walt Disney Company
[2025-12-08T19:48:32.299Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-08T19:48:32.529Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_b344d80e Walt Disney Company in #💻・tech-jobs
[2025-12-08T19:48:32.529Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_b344d80e Walt Disney Company
[2025-12-08T19:48:34.400Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_b344d80e Walt Disney Company in #🦢・los-angeles
[2025-12-08T19:48:34.400Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-08T19:48:35.900Z] [BOT] 💾 BEFORE SAVE: Database has 2 jobs
[2025-12-08T19:48:35.901Z] [BOT] 💾 Saved 2 posted jobs to database
✅ Verified: Database file contains 2 jobs
[2025-12-08T19:48:35.901Z] [BOT] 📍 [ROUTING] "Software Engineer - Robotics" @ ORG_3db79629 Robotics
[2025-12-08T19:48:35.902Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-08T19:48:36.141Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Robotics @ ORG_3db79629 Robotics in #💻・tech-jobs
[2025-12-08T19:48:36.142Z] [BOT] ✅ Industry: Software Engineer - Robotics @ ORG_3db79629 Robotics
[2025-12-08T19:48:38.041Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Robotics @ ORG_3db79629 Robotics in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-08T19:48:39.541Z] [BOT] 💾 BEFORE SAVE: Database has 3 jobs
[2025-12-08T19:48:39.542Z] [BOT] 💾 Saved 3 posted jobs to database
✅ Verified: Database file contains 3 jobs
[2025-12-08T19:48:42.543Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2025-12-08T19:48:42.544Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Energy Systems" @ ORG_a867f63f National Laboratory
   Category: SUPPLY-CHAIN (matched: "distribution")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2025-12-08T19:48:42.979Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Energy Systems @ ORG_a867f63f National Laboratory in #🏗️・JID_b7c6683f
  ✅ Industry: Postdoctoral Appointee - Energy Systems @ ORG_a867f63f National Laboratory
[2025-12-08T19:48:44.771Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Energy Systems @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-08T19:48:46.272Z] [BOT] 💾 BEFORE SAVE: Database has 4 jobs
[2025-12-08T19:48:46.273Z] [BOT] 💾 Saved 4 posted jobs to database
[2025-12-08T19:48:46.274Z] [BOT] ✅ Verified: Database file contains 4 jobs
[2025-12-08T19:48:49.274Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-08T19:48:49.274Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-08T19:48:52.099Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🤖・ai-jobs
[2025-12-08T19:48:52.100Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-08T19:48:53.867Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
[2025-12-08T19:48:53.867Z] [BOT] ✅ Location: 🌄・mountain-view
[2025-12-08T19:48:55.367Z] [BOT] 💾 BEFORE SAVE: Database has 5 jobs
[2025-12-08T19:48:55.368Z] [BOT] 💾 Saved 5 posted jobs to database
[2025-12-08T19:48:55.368Z] [BOT] ✅ Verified: Database file contains 5 jobs
📍 [ROUTING] "Data Scientist - New College Grad" @ ORG_0c79a9c2 Materials
   Category: AI (matched: "machine learning")
[2025-12-08T19:48:55.368Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2025-12-08T19:48:55.706Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - New College Grad @ ORG_0c79a9c2 Materials in #🤖・ai-jobs
  ✅ Industry: Data Scientist - New College Grad @ ORG_0c79a9c2 Materials
[2025-12-08T19:48:57.452Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - New College Grad @ ORG_0c79a9c2 Materials in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-08T19:48:58.953Z] [BOT] 💾 BEFORE SAVE: Database has 6 jobs
[2025-12-08T19:48:58.957Z] [BOT] 💾 Saved 6 posted jobs to database
✅ Verified: Database file contains 6 jobs
[2025-12-08T19:49:01.958Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2025-12-08T19:49:01.959Z] [BOT] ✅ Loaded pending queue: 6 total (0 pending, 6 enriched, 0 posted)
[2025-12-08T19:49:01.961Z] [BOT] ✅ Saved pending queue: 6 total (0 pending, 0 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-08T19:49:01.999Z] [BOT] 📂 Loaded 246 existing routing entries
[2025-12-08T19:49:02.038Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
   Total entries: 252
[2025-12-08T19:49:02.038Z] [BOT] Timestamp: 2025-12-08T19:49:02.037Z
[2025-12-08T19:49:04.050Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2868) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*