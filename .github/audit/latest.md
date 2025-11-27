# Discord Bot Execution Audit
**Timestamp:** 2025-11-27T02:31:02.717Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-27T02:30:26.899Z] ========================================
[2025-11-27T02:30:26.901Z] Discord Bot Execution Log
[2025-11-27T02:30:26.901Z] Environment: GitHub Actions
[2025-11-27T02:30:26.901Z] Node Version: v20.19.5
[2025-11-27T02:30:26.901Z] ========================================
[2025-11-27T02:30:26.901Z] Environment Variables Check:
[2025-11-27T02:30:26.901Z] DISCORD_TOKEN: ✅ Set
[2025-11-27T02:30:26.902Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-27T02:30:26.902Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-27T02:30:26.902Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-27T02:30:26.902Z] 
Multi-Channel Configuration:
[2025-11-27T02:30:26.902Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-27T02:30:26.902Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-27T02:30:26.902Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-27T02:30:26.902Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-27T02:30:26.902Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-27T02:30:26.902Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-27T02:30:26.902Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-27T02:30:26.902Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-27T02:30:26.902Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-27T02:30:26.903Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-27T02:30:26.903Z] 
Data Files Check:
[2025-11-27T02:30:26.903Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58718 bytes)
[2025-11-27T02:30:26.905Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328664 bytes)
[2025-11-27T02:30:26.905Z] 
========================================
[2025-11-27T02:30:26.905Z] Starting Enhanced Discord Bot...
[2025-11-27T02:30:26.905Z] ========================================
[2025-11-27T02:30:27.993Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-27T02:30:27.994Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 10 jobs to encrypted JSON...
[2025-11-27T02:30:27.994Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-27T02:30:28.071Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 10
[2025-11-27T02:30:28.072Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T02:30:28.072Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T02:30:28.073Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
📬 Found 7 new jobs (3 already posted)...
📤 Posting 7 jobs...
[2025-11-27T02:30:28.073Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-27T02:30:28.076Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2025-11-27T02:30:28.076Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow - Agentic AI" @ ORG_9d38443e of Texas - Austin
[2025-11-27T02:30:28.076Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T02:30:28.081Z] [BOT ERROR] (node:2530) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-27T02:30:28.396Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow - Agentic AI @ ORG_9d38443e of Texas - Austin in #💻・tech-jobs
[2025-11-27T02:30:28.397Z] [BOT] ✅ Industry: Postdoctoral Fellow - Agentic AI @ ORG_9d38443e of Texas - Austin
[2025-11-27T02:30:30.272Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow - Agentic AI @ ORG_9d38443e of Texas - Austin in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-27T02:30:31.772Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T02:30:31.772Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T02:30:31.778Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T02:30:31.778Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Application Engineer" @ ORG_3c3058da
   Category: TECH (matched: "engineer/engineering")
[2025-11-27T02:30:31.778Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T02:30:32.142Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_3c3058da in #💻・tech-jobs
[2025-11-27T02:30:32.143Z] [BOT] ✅ Industry: Application Engineer @ ORG_3c3058da
[2025-11-27T02:30:33.861Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_3c3058da in #🤠・austin
[2025-11-27T02:30:33.861Z] [BOT] ✅ Location: 🤠・austin
[2025-11-27T02:30:35.361Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T02:30:35.362Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T02:30:35.367Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T02:30:35.367Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
[2025-11-27T02:30:35.367Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T02:30:35.851Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T02:30:37.593Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-27T02:30:37.593Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-27T02:30:39.094Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T02:30:39.094Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T02:30:39.098Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T02:30:39.098Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T02:30:39.099Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T02:30:39.305Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-27T02:30:39.305Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T02:30:41.244Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-27T02:30:41.244Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-27T02:30:42.745Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T02:30:42.746Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T02:30:42.750Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T02:30:42.750Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-27T02:30:42.750Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T02:30:43.036Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-27T02:30:43.036Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T02:30:44.792Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T02:30:46.293Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T02:30:46.293Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T02:30:46.297Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T02:30:46.297Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T02:30:46.485Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T02:30:48.291Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T02:30:49.792Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T02:30:49.793Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T02:30:49.797Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T02:30:49.797Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T02:30:52.798Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-11-27T02:30:52.799Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow - Transmission Electron Microscopy" @ ORG_9d38443e of Texas - Austin
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1391...2941)
[2025-11-27T02:30:53.158Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow - Transmission Electron Microscopy @ ORG_9d38443e of Texas - Austin in #💰・finance-jobs
  ✅ Industry: Postdoctoral Fellow - Transmission Electron Microscopy @ ORG_9d38443e of Texas - Austin
[2025-11-27T02:30:54.878Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow - Transmission Electron Microscopy @ ORG_9d38443e of Texas - Austin in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-27T02:30:56.379Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T02:30:56.380Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T02:30:56.384Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T02:30:56.384Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T02:30:59.385Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-27T02:30:59.423Z] [BOT] 📂 Loaded 458 existing routing entries
[2025-11-27T02:30:59.462Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
   Total entries: 465
   Timestamp: 2025-11-27T02:30:59.460Z
[2025-11-27T02:31:01.472Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2530) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*