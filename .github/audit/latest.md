# Discord Bot Execution Audit
**Timestamp:** 2025-12-01T00:18:28.567Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-01T00:18:14.067Z] ========================================
[2025-12-01T00:18:14.069Z] Discord Bot Execution Log
[2025-12-01T00:18:14.069Z] Environment: GitHub Actions
[2025-12-01T00:18:14.069Z] Node Version: v20.19.5
[2025-12-01T00:18:14.069Z] ========================================
[2025-12-01T00:18:14.069Z] Environment Variables Check:
[2025-12-01T00:18:14.069Z] DISCORD_TOKEN: ✅ Set
[2025-12-01T00:18:14.069Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-01T00:18:14.069Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-01T00:18:14.069Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-01T00:18:14.069Z] 
Multi-Channel Configuration:
[2025-12-01T00:18:14.070Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-01T00:18:14.070Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-01T00:18:14.070Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-01T00:18:14.070Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-01T00:18:14.070Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-01T00:18:14.070Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-01T00:18:14.070Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-01T00:18:14.070Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-01T00:18:14.070Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-01T00:18:14.070Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-01T00:18:14.070Z] 
Data Files Check:
[2025-12-01T00:18:14.071Z] .github/data/new_jobs.json: ✅ Exists (2 items, 17205 bytes)
[2025-12-01T00:18:14.073Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330993 bytes)
[2025-12-01T00:18:14.073Z] 
========================================
[2025-12-01T00:18:14.073Z] Starting Enhanced Discord Bot...
[2025-12-01T00:18:14.073Z] ========================================
[2025-12-01T00:18:14.997Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-01T00:18:14.997Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-12-01T00:18:14.998Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-01T00:18:15.075Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 2
[2025-12-01T00:18:15.075Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-01T00:18:15.076Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-01T00:18:15.076Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-01T00:18:15.077Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-01T00:18:15.078Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2025-12-01T00:18:15.078Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-01T00:18:15.082Z] [BOT ERROR] (node:2430) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-01T00:18:15.305Z] [BOT] ✅ Created forum post: 🏢 Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2025-12-01T00:18:17.073Z] [BOT] ✅ Created forum post: 🏢 Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-01T00:18:18.573Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T00:18:18.573Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T00:18:18.579Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-01T00:18:18.579Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Research Engineering/Scientist Associate 1" @ ORG_9d38443e of Texas - Austin
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-01T00:18:18.838Z] [BOT] ✅ Created forum post: 🏢 Research Engineering/Scientist Associate 1 @ ORG_9d38443e of Texas - Austin in #💻・tech-jobs
  ✅ Industry: Research Engineering/Scientist Associate 1 @ ORG_9d38443e of Texas - Austin
[2025-12-01T00:18:20.690Z] [BOT] ✅ Created forum post: 🏢 Research Engineering/Scientist Associate 1 @ ORG_9d38443e of Texas - Austin in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-01T00:18:22.190Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T00:18:22.190Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T00:18:22.195Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-01T00:18:22.195Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T00:18:25.196Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-01T00:18:25.234Z] [BOT] 📂 Loaded 547 existing routing entries
[2025-12-01T00:18:25.273Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-01T00:18:25.274Z] [BOT] Total entries: 549
   Timestamp: 2025-12-01T00:18:25.272Z
[2025-12-01T00:18:27.283Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2430) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*