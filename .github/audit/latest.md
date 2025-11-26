# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T14:22:57.058Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 14
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T14:22:04.882Z] ========================================
[2025-11-26T14:22:04.883Z] Discord Bot Execution Log
[2025-11-26T14:22:04.883Z] Environment: GitHub Actions
[2025-11-26T14:22:04.883Z] Node Version: v20.19.5
[2025-11-26T14:22:04.883Z] ========================================
[2025-11-26T14:22:04.883Z] Environment Variables Check:
[2025-11-26T14:22:04.883Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T14:22:04.883Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T14:22:04.883Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T14:22:04.883Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T14:22:04.883Z] 
Multi-Channel Configuration:
[2025-11-26T14:22:04.883Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T14:22:04.883Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T14:22:04.883Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T14:22:04.884Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T14:22:04.884Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T14:22:04.884Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T14:22:04.884Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T14:22:04.884Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T14:22:04.884Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T14:22:04.884Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T14:22:04.884Z] 
Data Files Check:
[2025-11-26T14:22:04.884Z] .github/data/new_jobs.json: ✅ Exists (18 items, 46851 bytes)
[2025-11-26T14:22:04.886Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328624 bytes)
[2025-11-26T14:22:04.886Z] 
========================================
[2025-11-26T14:22:04.886Z] Starting Enhanced Discord Bot...
[2025-11-26T14:22:04.886Z] ========================================
[2025-11-26T14:22:05.972Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T14:22:05.972Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 18 jobs to encrypted JSON...
[2025-11-26T14:22:05.973Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T14:22:06.052Z] [BOT] ✅ Export complete: Added 0, Skipped 18, Total 18
[2025-11-26T14:22:06.052Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T14:22:06.053Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T14:22:06.053Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T14:22:06.053Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 14 new jobs (4 already posted)...
[2025-11-26T14:22:06.053Z] [BOT] 📤 Posting 14 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T14:22:06.054Z] [BOT] 📌 Posting 14 jobs to #💻・tech-jobs
[2025-11-26T14:22:06.055Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
[2025-11-26T14:22:06.055Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:22:06.059Z] [BOT ERROR] (node:2298) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T14:22:06.253Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:22:07.961Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:22:09.464Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:22:09.464Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:22:09.698Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:22:11.527Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:22:13.029Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:22:13.030Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:22:13.264Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:22:15.024Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T14:22:15.025Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T14:22:16.528Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:22:16.528Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:22:16.892Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T14:22:16.892Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:22:18.928Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T14:22:18.928Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T14:22:20.431Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:22:20.432Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:22:20.646Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T14:22:20.646Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:22:22.344Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T14:22:22.344Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T14:22:23.847Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:22:23.847Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:22:24.032Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T14:22:24.032Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:22:25.801Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:22:27.305Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:22:27.305Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:22:27.521Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T14:22:27.521Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T14:22:29.024Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:22:29.024Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:22:29.215Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T14:22:29.215Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:22:30.961Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T14:22:30.961Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T14:22:32.464Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:22:32.464Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:22:32.878Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T14:22:32.878Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T14:22:34.381Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:22:34.381Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:22:34.560Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T14:22:34.560Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:22:36.249Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T14:22:36.249Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T14:22:37.751Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:22:37.752Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:22:37.943Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:22:39.843Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:22:41.346Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:22:41.347Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:22:41.784Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T14:22:43.287Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:22:43.287Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:22:43.504Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:22:45.328Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:22:46.832Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:22:46.832Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:22:47.201Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T14:22:49.100Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T14:22:50.604Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:22:53.604Z] [BOT] 🎉 Posting complete! Successfully posted: 14, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T14:22:53.642Z] [BOT] 📂 Loaded 324 existing routing entries
[2025-11-26T14:22:53.679Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-11-26T14:22:53.679Z] [BOT] New entries: 14
   Total entries: 338
   Timestamp: 2025-11-26T14:22:53.678Z
[2025-11-26T14:22:55.689Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2298) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*