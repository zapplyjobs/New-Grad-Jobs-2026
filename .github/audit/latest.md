# Discord Bot Execution Audit
**Timestamp:** 2025-11-27T04:37:47.068Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-27T04:37:35.397Z] ========================================
[2025-11-27T04:37:35.399Z] Discord Bot Execution Log
[2025-11-27T04:37:35.399Z] Environment: GitHub Actions
[2025-11-27T04:37:35.399Z] Node Version: v20.19.5
[2025-11-27T04:37:35.399Z] ========================================
[2025-11-27T04:37:35.399Z] Environment Variables Check:
[2025-11-27T04:37:35.399Z] DISCORD_TOKEN: ✅ Set
[2025-11-27T04:37:35.400Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-27T04:37:35.400Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-27T04:37:35.400Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-27T04:37:35.400Z] 
Multi-Channel Configuration:
[2025-11-27T04:37:35.400Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-27T04:37:35.400Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-27T04:37:35.400Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-27T04:37:35.400Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-27T04:37:35.400Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-27T04:37:35.400Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-27T04:37:35.400Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-27T04:37:35.400Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-27T04:37:35.400Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-27T04:37:35.400Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-27T04:37:35.400Z] 
Data Files Check:
[2025-11-27T04:37:35.401Z] .github/data/new_jobs.json: ✅ Exists (15 items, 39024 bytes)
[2025-11-27T04:37:35.403Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 329525 bytes)
[2025-11-27T04:37:35.403Z] 
========================================
[2025-11-27T04:37:35.403Z] Starting Enhanced Discord Bot...
[2025-11-27T04:37:35.403Z] ========================================
[2025-11-27T04:37:36.203Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-27T04:37:36.204Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 15 jobs to encrypted JSON...
[2025-11-27T04:37:36.204Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-27T04:37:36.281Z] [BOT] ✅ Export complete: Added 0, Skipped 15, Total 15
[2025-11-27T04:37:36.282Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-27T04:37:36.282Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T04:37:36.283Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-27T04:37:36.283Z] [BOT] 📬 Found 11 new jobs (4 already posted)...
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T04:37:36.283Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T04:37:36.283Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T04:37:36.283Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
📋 After title+company dedup: 2 unique jobs to post
   (9 skipped as duplicate titles)
⏸️ Limiting to 50 jobs this run, 9 deferred for next run
📤 Posting 2 jobs...
[2025-11-27T04:37:36.284Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-27T04:37:36.284Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-27T04:37:36.285Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T04:37:36.289Z] [BOT ERROR] (node:2232) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-27T04:37:36.455Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-27T04:37:36.456Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T04:37:38.175Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T04:37:39.675Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T04:37:39.676Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T04:37:39.681Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T04:37:39.682Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T04:37:39.682Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T04:37:39.905Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-27T04:37:41.405Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T04:37:41.406Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T04:37:41.409Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T04:37:41.409Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T04:37:44.410Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-27T04:37:44.449Z] [BOT] 📂 Loaded 497 existing routing entries
[2025-11-27T04:37:44.489Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-11-27T04:37:44.489Z] [BOT] Total entries: 499
   Timestamp: 2025-11-27T04:37:44.487Z
[2025-11-27T04:37:46.499Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2232) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*