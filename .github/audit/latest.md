# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T14:50:14.067Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 14
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T14:49:23.416Z] ========================================
[2025-11-26T14:49:23.417Z] Discord Bot Execution Log
[2025-11-26T14:49:23.417Z] Environment: GitHub Actions
[2025-11-26T14:49:23.417Z] Node Version: v20.19.5
[2025-11-26T14:49:23.418Z] ========================================
[2025-11-26T14:49:23.418Z] Environment Variables Check:
[2025-11-26T14:49:23.418Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T14:49:23.418Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T14:49:23.418Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T14:49:23.418Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T14:49:23.418Z] 
Multi-Channel Configuration:
[2025-11-26T14:49:23.418Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T14:49:23.418Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T14:49:23.418Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T14:49:23.418Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T14:49:23.419Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T14:49:23.419Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T14:49:23.419Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T14:49:23.419Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T14:49:23.419Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T14:49:23.419Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T14:49:23.419Z] 
Data Files Check:
[2025-11-26T14:49:23.419Z] .github/data/new_jobs.json: ✅ Exists (18 items, 46851 bytes)
[2025-11-26T14:49:23.421Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328624 bytes)
[2025-11-26T14:49:23.421Z] 
========================================
[2025-11-26T14:49:23.421Z] Starting Enhanced Discord Bot...
[2025-11-26T14:49:23.421Z] ========================================
[2025-11-26T14:49:24.285Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T14:49:24.285Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 18 jobs to encrypted JSON...
[2025-11-26T14:49:24.286Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T14:49:24.365Z] [BOT] ✅ Export complete: Added 0, Skipped 18, Total 18
[2025-11-26T14:49:24.365Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T14:49:24.366Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T14:49:24.366Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-26T14:49:24.366Z] [BOT] 📬 Found 14 new jobs (4 already posted)...
📤 Posting 14 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T14:49:24.367Z] [BOT] 📌 Posting 14 jobs to #💻・tech-jobs
[2025-11-26T14:49:24.368Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
[2025-11-26T14:49:24.368Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:49:24.372Z] [BOT ERROR] (node:2325) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T14:49:24.588Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:49:26.344Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:49:27.847Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:49:27.848Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:49:28.059Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:49:29.887Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:49:31.390Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:49:31.390Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:49:31.685Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:49:33.613Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T14:49:33.614Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T14:49:35.117Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:49:35.117Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:49:35.283Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:49:36.997Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:49:38.500Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:49:38.501Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:49:38.630Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:49:40.341Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:49:41.845Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:49:41.845Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:49:42.018Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:49:43.698Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:49:45.202Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:49:45.202Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:49:45.428Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T14:49:46.932Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:49:46.932Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:49:47.110Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:49:49.050Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:49:50.554Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:49:50.554Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:49:50.953Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T14:49:52.456Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:49:52.456Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:49:52.671Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:49:54.360Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:49:55.863Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:49:55.863Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:49:56.023Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:49:57.677Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:49:59.180Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:49:59.181Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:49:59.620Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T14:50:01.123Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:50:01.123Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:50:01.297Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:50:03.246Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:50:04.749Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:50:04.749Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:50:04.950Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T14:50:06.698Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T14:50:08.200Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:50:11.201Z] [BOT] 🎉 Posting complete! Successfully posted: 14, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T14:50:11.239Z] [BOT] 📂 Loaded 352 existing routing entries
[2025-11-26T14:50:11.278Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 14
   Total entries: 366
   Timestamp: 2025-11-26T14:50:11.276Z
[2025-11-26T14:50:13.288Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2325) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*