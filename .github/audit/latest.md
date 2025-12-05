# Discord Bot Execution Audit
**Timestamp:** 2025-12-05T13:46:15.506Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-05T13:46:03.197Z] ========================================
[2025-12-05T13:46:03.199Z] Discord Bot Execution Log
[2025-12-05T13:46:03.199Z] Environment: GitHub Actions
[2025-12-05T13:46:03.199Z] Node Version: v20.19.6
[2025-12-05T13:46:03.199Z] ========================================
[2025-12-05T13:46:03.199Z] Environment Variables Check:
[2025-12-05T13:46:03.199Z] DISCORD_TOKEN: ✅ Set
[2025-12-05T13:46:03.199Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-05T13:46:03.199Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-05T13:46:03.200Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-05T13:46:03.200Z] 
Multi-Channel Configuration:
[2025-12-05T13:46:03.200Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-05T13:46:03.200Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-05T13:46:03.200Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-05T13:46:03.200Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-05T13:46:03.200Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-05T13:46:03.200Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-05T13:46:03.200Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-05T13:46:03.200Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-05T13:46:03.200Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-05T13:46:03.200Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-05T13:46:03.200Z] 
Data Files Check:
[2025-12-05T13:46:03.206Z] .github/data/new_jobs.json: ✅ Exists (50 items, 821474 bytes)
[2025-12-05T13:46:03.206Z] .github/data/posted_jobs.json: ✅ Exists (8 items, 651 bytes)
[2025-12-05T13:46:03.206Z] 
========================================
[2025-12-05T13:46:03.206Z] Starting Enhanced Discord Bot...
[2025-12-05T13:46:03.206Z] ========================================
[2025-12-05T13:46:04.476Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-05T13:46:04.476Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-05T13:46:04.477Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-05T13:46:04.480Z] [BOT] 📦 Exporting 50 jobs to encrypted JSON...
[2025-12-05T13:46:04.589Z] [BOT] ✅ Export complete: Added 0, Skipped 50, Total 150
[2025-12-05T13:46:04.593Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2025-12-05T13:46:04.593Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2025-12-05T13:46:04.593Z] [BOT] ⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
[2025-12-05T13:46:04.593Z] [BOT] ⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
[2025-12-05T13:46:04.594Z] [BOT] ⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
[2025-12-05T13:46:04.594Z] [BOT] ⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
[2025-12-05T13:46:04.594Z] [BOT] ⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
[2025-12-05T13:46:04.594Z] [BOT] ⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Revenue Integrity Data Analyst 1 at University of Maryland Medical System, Halethorpe (already posting one with this combination)
📋 After title+company+location dedup: 2 unique jobs to post
   (48 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 48 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-05T13:46:04.595Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-05T13:46:04.595Z] [BOT] 📍 [ROUTING] "Revenue Integrity Data Analyst 1" @ ORG_9d38443e of Maryland Medical System
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T13:46:04.600Z] [BOT ERROR] (node:2288) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-05T13:46:04.787Z] [BOT] ✅ Created forum post: 🏢 Revenue Integrity Data Analyst 1 @ ORG_9d38443e of Maryland Medical System in #💻・tech-jobs
[2025-12-05T13:46:04.787Z] [BOT] ✅ Industry: Revenue Integrity Data Analyst 1 @ ORG_9d38443e of Maryland Medical System
[2025-12-05T13:46:06.554Z] [BOT] ✅ Created forum post: 🏢 Revenue Integrity Data Analyst 1 @ ORG_9d38443e of Maryland Medical System in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T13:46:08.055Z] [BOT] 💾 BEFORE SAVE: Database has 9 jobs
[2025-12-05T13:46:08.059Z] [BOT] 💾 Saved 9 posted jobs to database
[2025-12-05T13:46:08.060Z] [BOT] ✅ Verified: Database file contains 9 jobs
📍 [ROUTING] "Business Data Analyst" @ ORG_05d2f9ea Electric
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T13:46:08.287Z] [BOT] ✅ Created forum post: 🏢 Business Data Analyst @ ORG_05d2f9ea Electric in #💻・tech-jobs
[2025-12-05T13:46:08.288Z] [BOT] ✅ Industry: Business Data Analyst @ ORG_05d2f9ea Electric
[2025-12-05T13:46:09.789Z] [BOT] 💾 BEFORE SAVE: Database has 10 jobs
[2025-12-05T13:46:09.791Z] [BOT] 💾 Saved 10 posted jobs to database
[2025-12-05T13:46:09.791Z] [BOT] ✅ Verified: Database file contains 10 jobs
[2025-12-05T13:46:12.792Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-05T13:46:12.801Z] [BOT] ✅ Loaded pending queue: 878 total (828 pending, 50 enriched, 0 posted)
[2025-12-05T13:46:12.816Z] [BOT] ✅ Saved pending queue: 878 total (743 pending, 0 enriched, 135 posted)
📋 Updated queue: marked 135 jobs as posted
[2025-12-05T13:46:12.816Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-05T13:46:12.853Z] [BOT] 📂 Loaded 8 existing routing entries
[2025-12-05T13:46:12.889Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 10
   Timestamp: 2025-12-05T13:46:12.889Z
[2025-12-05T13:46:14.902Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2288) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*