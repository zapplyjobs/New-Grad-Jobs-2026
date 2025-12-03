# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T03:59:40.079Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T03:59:28.244Z] ========================================
[2025-12-03T03:59:28.246Z] Discord Bot Execution Log
[2025-12-03T03:59:28.246Z] Environment: GitHub Actions
[2025-12-03T03:59:28.246Z] Node Version: v20.19.6
[2025-12-03T03:59:28.247Z] ========================================
[2025-12-03T03:59:28.247Z] Environment Variables Check:
[2025-12-03T03:59:28.247Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T03:59:28.247Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T03:59:28.247Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T03:59:28.247Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T03:59:28.247Z] 
Multi-Channel Configuration:
[2025-12-03T03:59:28.247Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T03:59:28.247Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T03:59:28.247Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T03:59:28.248Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T03:59:28.248Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T03:59:28.248Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T03:59:28.248Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T03:59:28.248Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T03:59:28.248Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T03:59:28.248Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T03:59:28.248Z] 
Data Files Check:
[2025-12-03T03:59:28.248Z] .github/data/new_jobs.json: ✅ Exists (5 items, 29590 bytes)
[2025-12-03T03:59:28.250Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333840 bytes)
[2025-12-03T03:59:28.250Z] 
========================================
[2025-12-03T03:59:28.250Z] Starting Enhanced Discord Bot...
[2025-12-03T03:59:28.251Z] ========================================
[2025-12-03T03:59:29.417Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T03:59:29.418Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 5 jobs to encrypted JSON...
[2025-12-03T03:59:29.418Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T03:59:29.497Z] [BOT] ✅ Export complete: Added 0, Skipped 5, Total 5
[2025-12-03T03:59:29.497Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T03:59:29.498Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T03:59:29.498Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T03:59:29.498Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
📬 Found 1 new jobs (4 already posted)...
[2025-12-03T03:59:29.498Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-03T03:59:29.498Z] [BOT] 📋 After title+company+location dedup: 1 unique jobs to post
[2025-12-03T03:59:29.498Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T03:59:29.499Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-03T03:59:29.499Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
   Category: TECH (matched: "software")
[2025-12-03T03:59:29.499Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T03:59:29.504Z] [BOT ERROR] (node:2394) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T03:59:29.640Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
[2025-12-03T03:59:29.641Z] [BOT] ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-03T03:59:32.825Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T03:59:34.325Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T03:59:34.326Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T03:59:34.332Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T03:59:34.332Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T03:59:37.332Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-03T03:59:37.333Z] [BOT] ✅ Loaded pending queue: 5 total (0 pending, 5 enriched, 0 posted)
[2025-12-03T03:59:37.349Z] [BOT] ✅ Saved pending queue: 5 total (0 pending, 4 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2025-12-03T03:59:37.349Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-03T03:59:37.390Z] [BOT] 📂 Loaded 669 existing routing entries
[2025-12-03T03:59:37.444Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 670
[2025-12-03T03:59:37.444Z] [BOT] Timestamp: 2025-12-03T03:59:37.429Z
[2025-12-03T03:59:39.454Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2394) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*