# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T01:53:31.319Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T01:53:16.854Z] ========================================
[2025-12-03T01:53:16.856Z] Discord Bot Execution Log
[2025-12-03T01:53:16.856Z] Environment: GitHub Actions
[2025-12-03T01:53:16.856Z] Node Version: v20.19.5
[2025-12-03T01:53:16.856Z] ========================================
[2025-12-03T01:53:16.856Z] Environment Variables Check:
[2025-12-03T01:53:16.856Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T01:53:16.856Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T01:53:16.856Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T01:53:16.857Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T01:53:16.857Z] 
Multi-Channel Configuration:
[2025-12-03T01:53:16.857Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T01:53:16.857Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T01:53:16.857Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T01:53:16.857Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T01:53:16.857Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T01:53:16.857Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T01:53:16.857Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T01:53:16.857Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T01:53:16.857Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T01:53:16.857Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T01:53:16.858Z] 
Data Files Check:
[2025-12-03T01:53:16.858Z] .github/data/new_jobs.json: ✅ Exists (6 items, 30373 bytes)
[2025-12-03T01:53:16.860Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333253 bytes)
[2025-12-03T01:53:16.860Z] 
========================================
[2025-12-03T01:53:16.860Z] Starting Enhanced Discord Bot...
[2025-12-03T01:53:16.860Z] ========================================
[2025-12-03T01:53:18.272Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T01:53:18.273Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T01:53:18.273Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T01:53:18.275Z] [BOT] 📦 Exporting 6 jobs to encrypted JSON...
[2025-12-03T01:53:18.355Z] [BOT] ✅ Export complete: Added 0, Skipped 6, Total 6
[2025-12-03T01:53:18.356Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T01:53:18.356Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T01:53:18.356Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T01:53:18.356Z] [BOT] 📬 Found 2 new jobs (4 already posted)...
[2025-12-03T01:53:18.357Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-03T01:53:18.357Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
[2025-12-03T01:53:18.357Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T01:53:18.358Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-03T01:53:18.358Z] [BOT] 📍 [ROUTING] "Associate Data Analyst" @ ORG_578d5e7d
[2025-12-03T01:53:18.358Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T01:53:18.363Z] [BOT ERROR] (node:2427) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T01:53:18.587Z] [BOT] ✅ Created forum post: 🏢 Associate Data Analyst @ ORG_578d5e7d in #💻・tech-jobs
  ✅ Industry: Associate Data Analyst @ ORG_578d5e7d
[2025-12-03T01:53:20.274Z] [BOT] ✅ Created forum post: 🏢 Associate Data Analyst @ ORG_578d5e7d in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-03T01:53:21.775Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T01:53:21.775Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T01:53:21.781Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T01:53:21.782Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
[2025-12-03T01:53:21.782Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T01:53:22.051Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
[2025-12-03T01:53:22.052Z] [BOT] ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-03T01:53:23.870Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
[2025-12-03T01:53:23.870Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-03T01:53:25.370Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T01:53:25.371Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T01:53:25.375Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T01:53:25.375Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T01:53:28.376Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-03T01:53:28.377Z] [BOT] ✅ Loaded pending queue: 6 total (0 pending, 6 enriched, 0 posted)
[2025-12-03T01:53:28.377Z] [BOT] ✅ Saved pending queue: 6 total (0 pending, 4 enriched, 2 posted)
[2025-12-03T01:53:28.377Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-03T01:53:28.416Z] [BOT] 📂 Loaded 646 existing routing entries
[2025-12-03T01:53:28.456Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 648
[2025-12-03T01:53:28.456Z] [BOT] Timestamp: 2025-12-03T01:53:28.453Z
[2025-12-03T01:53:30.469Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2427) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*