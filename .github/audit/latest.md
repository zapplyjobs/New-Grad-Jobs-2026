# Discord Bot Execution Audit
**Timestamp:** 2025-12-01T05:41:56.052Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-01T05:41:32.969Z] ========================================
[2025-12-01T05:41:32.971Z] Discord Bot Execution Log
[2025-12-01T05:41:32.971Z] Environment: GitHub Actions
[2025-12-01T05:41:32.971Z] Node Version: v20.19.5
[2025-12-01T05:41:32.971Z] ========================================
[2025-12-01T05:41:32.971Z] Environment Variables Check:
[2025-12-01T05:41:32.971Z] DISCORD_TOKEN: ✅ Set
[2025-12-01T05:41:32.972Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-01T05:41:32.972Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-01T05:41:32.972Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-01T05:41:32.972Z] 
Multi-Channel Configuration:
[2025-12-01T05:41:32.972Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-01T05:41:32.972Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-01T05:41:32.972Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-01T05:41:32.972Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-01T05:41:32.972Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-01T05:41:32.972Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-01T05:41:32.972Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-01T05:41:32.972Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-01T05:41:32.972Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-01T05:41:32.972Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-01T05:41:32.973Z] 
Data Files Check:
[2025-12-01T05:41:32.973Z] .github/data/new_jobs.json: ✅ Exists (3 items, 17665 bytes)
[2025-12-01T05:41:32.975Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 331212 bytes)
[2025-12-01T05:41:32.975Z] 
========================================
[2025-12-01T05:41:32.975Z] Starting Enhanced Discord Bot...
[2025-12-01T05:41:32.975Z] ========================================
[2025-12-01T05:41:33.764Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-01T05:41:33.765Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-12-01T05:41:33.765Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-01T05:41:33.844Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 3
[2025-12-01T05:41:33.845Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2025-12-01T05:41:33.845Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2025-12-01T05:41:33.845Z] [BOT] 📋 After title+company+location dedup: 3 unique jobs to post
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-01T05:41:33.849Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-01T05:41:33.849Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee" @ ORG_a867f63f National Laboratory
[2025-12-01T05:41:33.849Z] [BOT] Category: HR (matched: "benefits")
[2025-12-01T05:41:33.849Z] [BOT] Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-01T05:41:33.854Z] [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-01T05:41:34.148Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee @ ORG_a867f63f National Laboratory in #📁・JID_e938df7b
[2025-12-01T05:41:34.148Z] [BOT] ✅ Industry: Postdoctoral Appointee @ ORG_a867f63f National Laboratory
[2025-12-01T05:41:36.073Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-01T05:41:37.573Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T05:41:37.573Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T05:41:37.579Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-01T05:41:37.579Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T05:41:40.580Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-01T05:41:40.580Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-01T05:41:40.837Z] [BOT] ✅ Created forum post: 🏢 Technology - Application Development @ ORG_e9591c52 in #📣・marketing-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2025-12-01T05:41:42.476Z] [BOT] ✅ Created forum post: 🏢 Technology - Application Development @ ORG_e9591c52 in #💻・remote-usa
[2025-12-01T05:41:42.476Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-01T05:41:43.976Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T05:41:43.977Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T05:41:43.981Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-01T05:41:43.981Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T05:41:46.981Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-01T05:41:46.982Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-01T05:41:47.187Z] [BOT] ✅ Created forum post: 🏢 Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2025-12-01T05:41:48.832Z] [BOT] ✅ Created forum post: 🏢 Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-01T05:41:50.333Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T05:41:50.334Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T05:41:50.338Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-01T05:41:50.338Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T05:41:53.338Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-01T05:41:53.376Z] [BOT] 📂 Loaded 551 existing routing entries
[2025-12-01T05:41:53.417Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2025-12-01T05:41:53.417Z] [BOT] Total entries: 554
   Timestamp: 2025-12-01T05:41:53.415Z
[2025-12-01T05:41:55.428Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*