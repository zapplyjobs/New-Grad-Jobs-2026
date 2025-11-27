# Discord Bot Execution Audit
**Timestamp:** 2025-11-27T05:36:45.721Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-27T05:36:32.904Z] ========================================
[2025-11-27T05:36:32.907Z] Discord Bot Execution Log
[2025-11-27T05:36:32.907Z] Environment: GitHub Actions
[2025-11-27T05:36:32.908Z] Node Version: v20.19.5
[2025-11-27T05:36:32.908Z] ========================================
[2025-11-27T05:36:32.908Z] Environment Variables Check:
[2025-11-27T05:36:32.908Z] DISCORD_TOKEN: ✅ Set
[2025-11-27T05:36:32.908Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-27T05:36:32.908Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-27T05:36:32.908Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-27T05:36:32.908Z] 
Multi-Channel Configuration:
[2025-11-27T05:36:32.908Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-27T05:36:32.908Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-27T05:36:32.909Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-27T05:36:32.909Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-27T05:36:32.909Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-27T05:36:32.909Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-27T05:36:32.909Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-27T05:36:32.909Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-27T05:36:32.909Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-27T05:36:32.909Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-27T05:36:32.909Z] 
Data Files Check:
[2025-11-27T05:36:32.910Z] .github/data/new_jobs.json: ✅ Exists (15 items, 39024 bytes)
[2025-11-27T05:36:32.913Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 329525 bytes)
[2025-11-27T05:36:32.913Z] 
========================================
[2025-11-27T05:36:32.913Z] Starting Enhanced Discord Bot...
[2025-11-27T05:36:32.913Z] ========================================
[2025-11-27T05:36:34.119Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-27T05:36:34.119Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 15 jobs to encrypted JSON...
[2025-11-27T05:36:34.119Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-27T05:36:34.197Z] [BOT] ✅ Export complete: Added 0, Skipped 15, Total 15
[2025-11-27T05:36:34.197Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-27T05:36:34.198Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T05:36:34.198Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
📬 Found 11 new jobs (4 already posted)...
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T05:36:34.199Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T05:36:34.199Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
📋 After title+company dedup: 2 unique jobs to post
[2025-11-27T05:36:34.199Z] [BOT] (9 skipped as duplicate titles)
⏸️ Limiting to 50 jobs this run, 9 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-27T05:36:34.200Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-27T05:36:34.201Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T05:36:34.205Z] [BOT ERROR] (node:2219) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-27T05:36:34.382Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-27T05:36:34.383Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T05:36:36.094Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-27T05:36:36.094Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-27T05:36:37.594Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T05:36:37.594Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T05:36:37.600Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T05:36:37.600Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
[2025-11-27T05:36:37.600Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T05:36:37.907Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-27T05:36:37.907Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-27T05:36:39.408Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T05:36:39.409Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T05:36:39.412Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T05:36:39.413Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T05:36:42.414Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-27T05:36:42.452Z] [BOT] 📂 Loaded 505 existing routing entries
[2025-11-27T05:36:42.491Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 507
   Timestamp: 2025-11-27T05:36:42.489Z
[2025-11-27T05:36:44.500Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2219) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*