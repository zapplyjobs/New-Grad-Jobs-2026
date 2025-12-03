# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T06:44:35.055Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 40
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T06:44:14.418Z] ========================================
[2025-12-03T06:44:14.420Z] Discord Bot Execution Log
[2025-12-03T06:44:14.420Z] Environment: GitHub Actions
[2025-12-03T06:44:14.420Z] Node Version: v20.19.6
[2025-12-03T06:44:14.420Z] ========================================
[2025-12-03T06:44:14.420Z] Environment Variables Check:
[2025-12-03T06:44:14.420Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T06:44:14.420Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T06:44:14.420Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T06:44:14.421Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T06:44:14.421Z] 
Multi-Channel Configuration:
[2025-12-03T06:44:14.421Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T06:44:14.421Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T06:44:14.421Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T06:44:14.421Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T06:44:14.421Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T06:44:14.421Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T06:44:14.421Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T06:44:14.421Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T06:44:14.421Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T06:44:14.421Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T06:44:14.422Z] 
Data Files Check:
[2025-12-03T06:44:14.424Z] .github/data/new_jobs.json: ✅ Exists (44 items, 253953 bytes)
[2025-12-03T06:44:14.425Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333652 bytes)
[2025-12-03T06:44:14.425Z] 
========================================
[2025-12-03T06:44:14.426Z] Starting Enhanced Discord Bot...
[2025-12-03T06:44:14.426Z] ========================================
[2025-12-03T06:44:15.751Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T06:44:15.751Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T06:44:15.752Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T06:44:15.753Z] [BOT] 📦 Exporting 44 jobs to encrypted JSON...
[2025-12-03T06:44:15.841Z] [BOT] ✅ Export complete: Added 0, Skipped 44, Total 44
[2025-12-03T06:44:15.841Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T06:44:15.842Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T06:44:15.842Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T06:44:15.842Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:44:15.842Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T06:44:15.843Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:44:15.843Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T06:44:15.843Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:44:15.843Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T06:44:15.843Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T06:44:15.843Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T06:44:15.843Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T06:44:15.844Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T06:44:15.844Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T06:44:15.844Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T06:44:15.844Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:44:15.844Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T06:44:15.844Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:44:15.844Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T06:44:15.844Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:44:15.844Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T06:44:15.845Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
📬 Found 4 new jobs (40 already posted)...
[2025-12-03T06:44:15.845Z] [BOT] 📋 After blacklist filter: 4 jobs (0 blacklisted)
[2025-12-03T06:44:15.845Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-03T06:44:15.845Z] [BOT] 📋 After title+company+location dedup: 3 unique jobs to post
   (1 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 1 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T06:44:15.848Z] [BOT] 📌 Posting 2 jobs to #📁・JID_e938df7b
[2025-12-03T06:44:15.849Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst" @ ORG_81f16575ington Bancshares
[2025-12-03T06:44:15.849Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-03T06:44:15.853Z] [BOT ERROR] (node:2814) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T06:44:16.071Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
  ✅ Industry: Technology Delivery Analyst @ ORG_81f16575ington Bancshares
[2025-12-03T06:44:17.789Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst @ ORG_81f16575ington Bancshares in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T06:44:19.290Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T06:44:19.290Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T06:44:19.296Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T06:44:19.296Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "GIS Analyst 1" @ ORG_fc33f732 of Amarillo
   Category: HR (matched: "human resources")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-03T06:44:19.450Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #📁・JID_e938df7b
  ✅ Industry: GIS Analyst 1 @ ORG_fc33f732 of Amarillo
[2025-12-03T06:44:21.342Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-03T06:44:22.843Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T06:44:22.844Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T06:44:22.848Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T06:44:22.848Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T06:44:25.849Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-03T06:44:25.849Z] [BOT] 📍 [ROUTING] "IT Data Warehouse Specialist" @ ORG_969850e5 Therapies
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T06:44:26.141Z] [BOT] ✅ Created forum post: 🏢 IT Data Warehouse Specialist @ ORG_969850e5 Therapies in #💻・tech-jobs
[2025-12-03T06:44:26.141Z] [BOT] ✅ Industry: IT Data Warehouse Specialist @ ORG_969850e5 Therapies
[2025-12-03T06:44:27.786Z] [BOT] ✅ Created forum post: 🏢 IT Data Warehouse Specialist @ ORG_969850e5 Therapies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T06:44:29.287Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T06:44:29.288Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T06:44:29.292Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T06:44:29.292Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T06:44:32.292Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-12-03T06:44:32.295Z] [BOT] ✅ Loaded pending queue: 44 total (0 pending, 44 enriched, 0 posted)
[2025-12-03T06:44:32.298Z] [BOT] ✅ Saved pending queue: 44 total (0 pending, 41 enriched, 3 posted)
[2025-12-03T06:44:32.298Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-03T06:44:32.337Z] [BOT] 📂 Loaded 694 existing routing entries
[2025-12-03T06:44:32.378Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2025-12-03T06:44:32.378Z] [BOT] Total entries: 697
   Timestamp: 2025-12-03T06:44:32.375Z
[2025-12-03T06:44:34.389Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2814) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*