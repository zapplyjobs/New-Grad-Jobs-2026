# Discord Bot Execution Audit
**Timestamp:** 2025-11-27T05:01:52.369Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-27T05:01:40.269Z] ========================================
[2025-11-27T05:01:40.271Z] Discord Bot Execution Log
[2025-11-27T05:01:40.271Z] Environment: GitHub Actions
[2025-11-27T05:01:40.271Z] Node Version: v20.19.5
[2025-11-27T05:01:40.271Z] ========================================
[2025-11-27T05:01:40.271Z] Environment Variables Check:
[2025-11-27T05:01:40.271Z] DISCORD_TOKEN: ✅ Set
[2025-11-27T05:01:40.271Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-27T05:01:40.271Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-27T05:01:40.271Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-27T05:01:40.271Z] 
Multi-Channel Configuration:
[2025-11-27T05:01:40.271Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-27T05:01:40.272Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-27T05:01:40.272Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-27T05:01:40.272Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-27T05:01:40.272Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-27T05:01:40.272Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-27T05:01:40.272Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-27T05:01:40.272Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-27T05:01:40.272Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-27T05:01:40.272Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-27T05:01:40.272Z] 
Data Files Check:
[2025-11-27T05:01:40.273Z] .github/data/new_jobs.json: ✅ Exists (15 items, 39024 bytes)
[2025-11-27T05:01:40.275Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 329525 bytes)
[2025-11-27T05:01:40.275Z] 
========================================
[2025-11-27T05:01:40.275Z] Starting Enhanced Discord Bot...
[2025-11-27T05:01:40.275Z] ========================================
[2025-11-27T05:01:41.239Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-27T05:01:41.240Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 15 jobs to encrypted JSON...
[2025-11-27T05:01:41.240Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-27T05:01:41.317Z] [BOT] ✅ Export complete: Added 0, Skipped 15, Total 15
[2025-11-27T05:01:41.317Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-27T05:01:41.318Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T05:01:41.318Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-27T05:01:41.318Z] [BOT] 📬 Found 11 new jobs (4 already posted)...
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T05:01:41.318Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T05:01:41.318Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
📋 After title+company dedup: 2 unique jobs to post
[2025-11-27T05:01:41.319Z] [BOT] (9 skipped as duplicate titles)
⏸️ Limiting to 50 jobs this run, 9 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-27T05:01:41.320Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-27T05:01:41.320Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-27T05:01:41.320Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T05:01:41.325Z] [BOT ERROR] (node:2214) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-27T05:01:41.516Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T05:01:43.191Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T05:01:44.692Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T05:01:44.692Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T05:01:44.698Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T05:01:44.698Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
[2025-11-27T05:01:44.698Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T05:01:44.909Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-27T05:01:46.411Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T05:01:46.411Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T05:01:46.415Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T05:01:46.415Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T05:01:49.415Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-27T05:01:49.453Z] [BOT] 📂 Loaded 501 existing routing entries
[2025-11-27T05:01:49.492Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 503
   Timestamp: 2025-11-27T05:01:49.490Z
[2025-11-27T05:01:51.502Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2214) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*