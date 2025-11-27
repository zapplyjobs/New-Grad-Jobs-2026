# Discord Bot Execution Audit
**Timestamp:** 2025-11-27T05:22:33.621Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-27T05:22:20.620Z] ========================================
[2025-11-27T05:22:20.622Z] Discord Bot Execution Log
[2025-11-27T05:22:20.622Z] Environment: GitHub Actions
[2025-11-27T05:22:20.622Z] Node Version: v20.19.5
[2025-11-27T05:22:20.622Z] ========================================
[2025-11-27T05:22:20.622Z] Environment Variables Check:
[2025-11-27T05:22:20.623Z] DISCORD_TOKEN: ✅ Set
[2025-11-27T05:22:20.623Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-27T05:22:20.623Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-27T05:22:20.623Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-27T05:22:20.623Z] 
Multi-Channel Configuration:
[2025-11-27T05:22:20.623Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-27T05:22:20.623Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-27T05:22:20.623Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-27T05:22:20.623Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-27T05:22:20.623Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-27T05:22:20.623Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-27T05:22:20.623Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-27T05:22:20.624Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-27T05:22:20.624Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-27T05:22:20.624Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-27T05:22:20.624Z] 
Data Files Check:
[2025-11-27T05:22:20.624Z] .github/data/new_jobs.json: ✅ Exists (15 items, 39024 bytes)
[2025-11-27T05:22:20.626Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 329525 bytes)
[2025-11-27T05:22:20.626Z] 
========================================
[2025-11-27T05:22:20.626Z] Starting Enhanced Discord Bot...
[2025-11-27T05:22:20.626Z] ========================================
[2025-11-27T05:22:21.748Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-27T05:22:21.749Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 15 jobs to encrypted JSON...
[2025-11-27T05:22:21.749Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-27T05:22:21.829Z] [BOT] ✅ Export complete: Added 0, Skipped 15, Total 15
[2025-11-27T05:22:21.830Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-27T05:22:21.830Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T05:22:21.830Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T05:22:21.831Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-27T05:22:21.831Z] [BOT] 📬 Found 11 new jobs (4 already posted)...
[2025-11-27T05:22:21.831Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T05:22:21.831Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T05:22:21.831Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
📋 After title+company dedup: 2 unique jobs to post
   (9 skipped as duplicate titles)
⏸️ Limiting to 50 jobs this run, 9 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-27T05:22:21.832Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-27T05:22:21.833Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-27T05:22:21.834Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T05:22:21.838Z] [BOT ERROR] (node:2212) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-27T05:22:22.302Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-27T05:22:22.302Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T05:22:24.062Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-27T05:22:24.062Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-27T05:22:25.563Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T05:22:25.563Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T05:22:25.569Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T05:22:25.569Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
[2025-11-27T05:22:25.569Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T05:22:25.803Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-27T05:22:25.803Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-27T05:22:27.304Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T05:22:27.305Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T05:22:27.309Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T05:22:27.309Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T05:22:30.310Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-27T05:22:30.348Z] [BOT] 📂 Loaded 503 existing routing entries
[2025-11-27T05:22:30.388Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 505
[2025-11-27T05:22:30.388Z] [BOT] Timestamp: 2025-11-27T05:22:30.386Z
[2025-11-27T05:22:32.398Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2212) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*