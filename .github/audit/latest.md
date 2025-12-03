# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T06:56:45.199Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 44
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T06:56:23.881Z] ========================================
[2025-12-03T06:56:23.883Z] Discord Bot Execution Log
[2025-12-03T06:56:23.883Z] Environment: GitHub Actions
[2025-12-03T06:56:23.883Z] Node Version: v20.19.5
[2025-12-03T06:56:23.883Z] ========================================
[2025-12-03T06:56:23.883Z] Environment Variables Check:
[2025-12-03T06:56:23.883Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T06:56:23.883Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T06:56:23.883Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T06:56:23.883Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T06:56:23.883Z] 
Multi-Channel Configuration:
[2025-12-03T06:56:23.883Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T06:56:23.884Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T06:56:23.884Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T06:56:23.884Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T06:56:23.884Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T06:56:23.884Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T06:56:23.884Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T06:56:23.884Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T06:56:23.884Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T06:56:23.884Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T06:56:23.884Z] 
Data Files Check:
[2025-12-03T06:56:23.887Z] .github/data/new_jobs.json: ✅ Exists (48 items, 274849 bytes)
[2025-12-03T06:56:23.888Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333648 bytes)
[2025-12-03T06:56:23.889Z] 
========================================
[2025-12-03T06:56:23.889Z] Starting Enhanced Discord Bot...
[2025-12-03T06:56:23.889Z] ========================================
[2025-12-03T06:56:25.138Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T06:56:25.138Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T06:56:25.139Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T06:56:25.144Z] [BOT] 📦 Exporting 48 jobs to encrypted JSON...
[2025-12-03T06:56:25.229Z] [BOT] ✅ Export complete: Added 0, Skipped 48, Total 48
[2025-12-03T06:56:25.230Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T06:56:25.230Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T06:56:25.231Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T06:56:25.231Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:56:25.231Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T06:56:25.231Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:56:25.231Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T06:56:25.232Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:56:25.232Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T06:56:25.232Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:56:25.232Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:56:25.232Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T06:56:25.232Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:56:25.232Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T06:56:25.232Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T06:56:25.232Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T06:56:25.233Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T06:56:25.233Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T06:56:25.233Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:56:25.233Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T06:56:25.233Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:56:25.233Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:56:25.233Z] [BOT] 📬 Found 4 new jobs (44 already posted)...
[2025-12-03T06:56:25.234Z] [BOT] 📋 After blacklist filter: 4 jobs (0 blacklisted)
[2025-12-03T06:56:25.234Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-03T06:56:25.234Z] [BOT] 📋 After title+company+location dedup: 3 unique jobs to post
   (1 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 1 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T06:56:25.236Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-03T06:56:25.237Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-03T06:56:25.241Z] [BOT ERROR] (node:2506) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T06:56:25.495Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
[2025-12-03T06:56:25.495Z] [BOT] ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-03T06:56:27.329Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
[2025-12-03T06:56:27.330Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-03T06:56:28.829Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T06:56:28.830Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T06:56:28.835Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T06:56:28.836Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T06:56:31.837Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-03T06:56:31.837Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T06:56:32.085Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
[2025-12-03T06:56:32.085Z] [BOT] ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-03T06:56:34.057Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T06:56:35.558Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T06:56:35.558Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T06:56:35.562Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T06:56:35.562Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Data Scientist - Algorithms Pricing - Optimization" @ ORG_571ce021
   Category: TECH (matched: "data")
[2025-12-03T06:56:35.562Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T06:56:35.793Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #💻・tech-jobs
  ✅ Industry: Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021
[2025-12-03T06:56:37.473Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T06:56:38.974Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T06:56:38.974Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T06:56:38.978Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T06:56:38.978Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T06:56:41.979Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-12-03T06:56:41.981Z] [BOT] ✅ Loaded pending queue: 48 total (0 pending, 48 enriched, 0 posted)
[2025-12-03T06:56:41.984Z] [BOT] ✅ Saved pending queue: 48 total (0 pending, 44 enriched, 4 posted)
[2025-12-03T06:56:41.984Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-03T06:56:42.022Z] [BOT] 📂 Loaded 697 existing routing entries
[2025-12-03T06:56:42.063Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 700
   Timestamp: 2025-12-03T06:56:42.061Z
[2025-12-03T06:56:44.075Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2506) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*