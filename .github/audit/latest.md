# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T07:23:55.983Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 48
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T07:23:42.561Z] ========================================
[2025-12-03T07:23:42.563Z] Discord Bot Execution Log
[2025-12-03T07:23:42.563Z] Environment: GitHub Actions
[2025-12-03T07:23:42.563Z] Node Version: v20.19.5
[2025-12-03T07:23:42.563Z] ========================================
[2025-12-03T07:23:42.563Z] Environment Variables Check:
[2025-12-03T07:23:42.563Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T07:23:42.563Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T07:23:42.563Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T07:23:42.564Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T07:23:42.564Z] 
Multi-Channel Configuration:
[2025-12-03T07:23:42.564Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T07:23:42.564Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T07:23:42.564Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T07:23:42.564Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T07:23:42.564Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T07:23:42.564Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T07:23:42.564Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T07:23:42.564Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T07:23:42.564Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T07:23:42.564Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T07:23:42.565Z] 
Data Files Check:
[2025-12-03T07:23:42.567Z] .github/data/new_jobs.json: ✅ Exists (50 items, 293435 bytes)
[2025-12-03T07:23:42.569Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333670 bytes)
[2025-12-03T07:23:42.569Z] 
========================================
[2025-12-03T07:23:42.569Z] Starting Enhanced Discord Bot...
[2025-12-03T07:23:42.569Z] ========================================
[2025-12-03T07:23:43.527Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T07:23:43.528Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T07:23:43.528Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T07:23:43.531Z] [BOT] 📦 Exporting 50 jobs to encrypted JSON...
[2025-12-03T07:23:43.619Z] [BOT] ✅ Export complete: Added 0, Skipped 50, Total 50
[2025-12-03T07:23:43.620Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T07:23:43.620Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T07:23:43.620Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T07:23:43.621Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T07:23:43.621Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T07:23:43.621Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T07:23:43.621Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T07:23:43.621Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T07:23:43.621Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T07:23:43.621Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T07:23:43.622Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T07:23:43.622Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T07:23:43.622Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T07:23:43.622Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T07:23:43.622Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T07:23:43.622Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T07:23:43.622Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T07:23:43.622Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T07:23:43.623Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T07:23:43.623Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T07:23:43.623Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T07:23:43.623Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T07:23:43.623Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T07:23:43.623Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
📬 Found 2 new jobs (48 already posted)...
[2025-12-03T07:23:43.623Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-03T07:23:43.624Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T07:23:43.629Z] [BOT] 📌 Posting 2 jobs to #📁・JID_e938df7b
[2025-12-03T07:23:43.629Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-03T07:23:43.633Z] [BOT ERROR] (node:2423) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T07:23:43.760Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
  ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-03T07:23:45.425Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
[2025-12-03T07:23:45.425Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-03T07:23:46.926Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T07:23:46.926Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T07:23:46.932Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T07:23:46.932Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "GIS Analyst 1" @ ORG_fc33f732 of Amarillo
[2025-12-03T07:23:46.932Z] [BOT] Category: HR (matched: "human resources")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-03T07:23:47.053Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #📁・JID_e938df7b
[2025-12-03T07:23:47.053Z] [BOT] ✅ Industry: GIS Analyst 1 @ ORG_fc33f732 of Amarillo
[2025-12-03T07:23:48.763Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #🤠・austin
[2025-12-03T07:23:48.763Z] [BOT] ✅ Location: 🤠・austin
[2025-12-03T07:23:50.264Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T07:23:50.264Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T07:23:50.269Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T07:23:50.269Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T07:23:53.270Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-03T07:23:53.272Z] [BOT] ✅ Loaded pending queue: 58 total (8 pending, 50 enriched, 0 posted)
[2025-12-03T07:23:53.276Z] [BOT] ✅ Saved pending queue: 58 total (6 pending, 48 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-03T07:23:53.314Z] [BOT] 📂 Loaded 702 existing routing entries
[2025-12-03T07:23:53.354Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-03T07:23:53.354Z] [BOT] Total entries: 704
   Timestamp: 2025-12-03T07:23:53.352Z
[2025-12-03T07:23:55.365Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2423) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*