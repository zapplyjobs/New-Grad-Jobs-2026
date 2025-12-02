# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T00:42:35.634Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T00:42:20.932Z] ========================================
[2025-12-02T00:42:20.934Z] Discord Bot Execution Log
[2025-12-02T00:42:20.934Z] Environment: GitHub Actions
[2025-12-02T00:42:20.934Z] Node Version: v20.19.5
[2025-12-02T00:42:20.934Z] ========================================
[2025-12-02T00:42:20.934Z] Environment Variables Check:
[2025-12-02T00:42:20.934Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T00:42:20.934Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T00:42:20.934Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T00:42:20.934Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T00:42:20.934Z] 
Multi-Channel Configuration:
[2025-12-02T00:42:20.934Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T00:42:20.935Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T00:42:20.935Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T00:42:20.935Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T00:42:20.935Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T00:42:20.935Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T00:42:20.935Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T00:42:20.935Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T00:42:20.935Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T00:42:20.935Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T00:42:20.935Z] 
Data Files Check:
[2025-12-02T00:42:20.935Z] .github/data/new_jobs.json: ✅ Exists (2 items, 1260 bytes)
[2025-12-02T00:42:20.937Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332046 bytes)
[2025-12-02T00:42:20.937Z] 
========================================
[2025-12-02T00:42:20.937Z] Starting Enhanced Discord Bot...
[2025-12-02T00:42:20.937Z] ========================================
[2025-12-02T00:42:21.986Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T00:42:21.986Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-12-02T00:42:21.987Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T00:42:22.063Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 2
[2025-12-02T00:42:22.064Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-02T00:42:22.064Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
📋 After title+company+location dedup: 2 unique jobs to post
[2025-12-02T00:42:22.065Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T00:42:22.067Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-02T00:42:22.068Z] [BOT] 📍 [ROUTING] "GenAI Developer" @ ORG_1954b120
[2025-12-02T00:42:22.068Z] [BOT] Category: TECH (matched: "software")
[2025-12-02T00:42:22.068Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T00:42:22.072Z] [BOT ERROR] (node:2580) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T00:42:22.315Z] [BOT] ✅ Created forum post: 🏢 GenAI Developer @ ORG_1954b120 in #💻・tech-jobs
  ✅ Industry: GenAI Developer @ ORG_1954b120
[2025-12-02T00:42:24.021Z] [BOT] ✅ Created forum post: 🏢 GenAI Developer @ ORG_1954b120 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-02T00:42:25.521Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T00:42:25.522Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T00:42:25.528Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T00:42:25.528Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Assistant Professor" @ ORG_9d38443e of Wyoming
   Category: TECH (default)
[2025-12-02T00:42:25.528Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T00:42:26.019Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor @ ORG_9d38443e of Wyoming in #💻・tech-jobs
  ✅ Industry: Assistant Professor @ ORG_9d38443e of Wyoming
[2025-12-02T00:42:27.770Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor @ ORG_9d38443e of Wyoming in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-02T00:42:29.271Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T00:42:29.271Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T00:42:29.275Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T00:42:29.275Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T00:42:32.276Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-02T00:42:32.276Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-02T00:42:32.315Z] [BOT] 📂 Loaded 572 existing routing entries
[2025-12-02T00:42:32.355Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 574
   Timestamp: 2025-12-02T00:42:32.353Z
[2025-12-02T00:42:34.366Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2580) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*