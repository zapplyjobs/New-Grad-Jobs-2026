# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T06:06:44.274Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 32
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T06:06:26.672Z] ========================================
[2025-12-03T06:06:26.673Z] Discord Bot Execution Log
[2025-12-03T06:06:26.674Z] Environment: GitHub Actions
[2025-12-03T06:06:26.674Z] Node Version: v20.19.5
[2025-12-03T06:06:26.674Z] ========================================
[2025-12-03T06:06:26.674Z] Environment Variables Check:
[2025-12-03T06:06:26.674Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T06:06:26.674Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T06:06:26.674Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T06:06:26.674Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T06:06:26.674Z] 
Multi-Channel Configuration:
[2025-12-03T06:06:26.674Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T06:06:26.674Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T06:06:26.674Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T06:06:26.674Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T06:06:26.674Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T06:06:26.674Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T06:06:26.675Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T06:06:26.675Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T06:06:26.675Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T06:06:26.675Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T06:06:26.675Z] 
Data Files Check:
[2025-12-03T06:06:26.676Z] .github/data/new_jobs.json: ✅ Exists (34 items, 197453 bytes)
[2025-12-03T06:06:26.678Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333652 bytes)
[2025-12-03T06:06:26.678Z] 
========================================
[2025-12-03T06:06:26.678Z] Starting Enhanced Discord Bot...
[2025-12-03T06:06:26.678Z] ========================================
[2025-12-03T06:06:28.088Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T06:06:28.089Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T06:06:28.089Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T06:06:28.091Z] [BOT] 📦 Exporting 34 jobs to encrypted JSON...
[2025-12-03T06:06:28.179Z] [BOT] ✅ Export complete: Added 0, Skipped 34, Total 34
[2025-12-03T06:06:28.180Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T06:06:28.180Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T06:06:28.180Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T06:06:28.180Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:06:28.180Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T06:06:28.180Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:06:28.181Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T06:06:28.181Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T06:06:28.181Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T06:06:28.181Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T06:06:28.181Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T06:06:28.181Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:06:28.181Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T06:06:28.181Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:06:28.181Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T06:06:28.181Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T06:06:28.181Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
📬 Found 2 new jobs (32 already posted)...
[2025-12-03T06:06:28.182Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-03T06:06:28.182Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
📤 Posting 2 jobs...
[2025-12-03T06:06:28.182Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T06:06:28.185Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-03T06:06:28.185Z] [BOT] 📍 [ROUTING] "IT Data Warehouse Specialist" @ ORG_969850e5 Therapies
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T06:06:28.190Z] [BOT ERROR] (node:2540) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T06:06:28.414Z] [BOT] ✅ Created forum post: 🏢 IT Data Warehouse Specialist @ ORG_969850e5 Therapies in #💻・tech-jobs
  ✅ Industry: IT Data Warehouse Specialist @ ORG_969850e5 Therapies
[2025-12-03T06:06:30.242Z] [BOT] ✅ Created forum post: 🏢 IT Data Warehouse Specialist @ ORG_969850e5 Therapies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T06:06:31.743Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T06:06:31.743Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T06:06:31.748Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T06:06:31.748Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T06:06:34.748Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-03T06:06:34.748Z] [BOT] 📍 [ROUTING] "GIS Analyst 1" @ ORG_fc33f732 of Amarillo
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-03T06:06:34.983Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #📣・marketing-jobs
  ✅ Industry: GIS Analyst 1 @ ORG_fc33f732 of Amarillo
[2025-12-03T06:06:36.657Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-03T06:06:38.158Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T06:06:38.159Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T06:06:38.162Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T06:06:38.163Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T06:06:41.163Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-03T06:06:41.164Z] [BOT] ✅ Loaded pending queue: 34 total (0 pending, 34 enriched, 0 posted)
[2025-12-03T06:06:41.167Z] [BOT] ✅ Saved pending queue: 34 total (0 pending, 32 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-03T06:06:41.207Z] [BOT] 📂 Loaded 690 existing routing entries
[2025-12-03T06:06:41.249Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 692
   Timestamp: 2025-12-03T06:06:41.247Z
[2025-12-03T06:06:43.257Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2540) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*