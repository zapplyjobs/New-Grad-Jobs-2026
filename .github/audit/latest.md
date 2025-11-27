# Discord Bot Execution Audit
**Timestamp:** 2025-11-27T03:34:28.970Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-27T03:34:13.042Z] ========================================
[2025-11-27T03:34:13.044Z] Discord Bot Execution Log
[2025-11-27T03:34:13.044Z] Environment: GitHub Actions
[2025-11-27T03:34:13.044Z] Node Version: v20.19.5
[2025-11-27T03:34:13.044Z] ========================================
[2025-11-27T03:34:13.044Z] Environment Variables Check:
[2025-11-27T03:34:13.044Z] DISCORD_TOKEN: ✅ Set
[2025-11-27T03:34:13.044Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-27T03:34:13.044Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-27T03:34:13.045Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-27T03:34:13.045Z] 
Multi-Channel Configuration:
[2025-11-27T03:34:13.045Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-27T03:34:13.045Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-27T03:34:13.045Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-27T03:34:13.045Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-27T03:34:13.045Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-27T03:34:13.045Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-27T03:34:13.045Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-27T03:34:13.045Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-27T03:34:13.045Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-27T03:34:13.046Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-27T03:34:13.046Z] 
Data Files Check:
[2025-11-27T03:34:13.046Z] .github/data/new_jobs.json: ✅ Exists (15 items, 39276 bytes)
[2025-11-27T03:34:13.048Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 329439 bytes)
[2025-11-27T03:34:13.048Z] 
========================================
[2025-11-27T03:34:13.048Z] Starting Enhanced Discord Bot...
[2025-11-27T03:34:13.048Z] ========================================
[2025-11-27T03:34:14.063Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-27T03:34:14.064Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 15 jobs to encrypted JSON...
[2025-11-27T03:34:14.064Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-27T03:34:14.143Z] [BOT] ✅ Export complete: Added 0, Skipped 15, Total 15
[2025-11-27T03:34:14.144Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T03:34:14.144Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T03:34:14.144Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-27T03:34:14.145Z] [BOT] 📬 Found 12 new jobs (3 already posted)...
[2025-11-27T03:34:14.145Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T03:34:14.145Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T03:34:14.145Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
📋 After title+company dedup: 3 unique jobs to post
   (9 skipped as duplicate titles)
[2025-11-27T03:34:14.145Z] [BOT] ⏸️ Limiting to 50 jobs this run, 9 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-27T03:34:14.147Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-11-27T03:34:14.147Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T03:34:14.151Z] [BOT ERROR] (node:2328) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-27T03:34:14.369Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-27T03:34:14.369Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T03:34:16.060Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-27T03:34:16.060Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-27T03:34:17.561Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T03:34:17.562Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T03:34:17.569Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T03:34:17.569Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T03:34:17.761Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-27T03:34:19.263Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T03:34:19.263Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T03:34:19.266Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T03:34:19.266Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T03:34:19.455Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-27T03:34:21.115Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-27T03:34:22.616Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T03:34:22.617Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T03:34:22.623Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T03:34:22.623Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T03:34:25.624Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-11-27T03:34:25.624Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-27T03:34:25.662Z] [BOT] 📂 Loaded 481 existing routing entries
[2025-11-27T03:34:25.701Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2025-11-27T03:34:25.701Z] [BOT] Total entries: 484
   Timestamp: 2025-11-27T03:34:25.699Z
[2025-11-27T03:34:27.712Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2328) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*