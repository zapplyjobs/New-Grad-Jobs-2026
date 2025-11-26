# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T16:32:33.219Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 15
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T16:31:33.487Z] ========================================
[2025-11-26T16:31:33.489Z] Discord Bot Execution Log
[2025-11-26T16:31:33.489Z] Environment: GitHub Actions
[2025-11-26T16:31:33.489Z] Node Version: v20.19.5
[2025-11-26T16:31:33.489Z] ========================================
[2025-11-26T16:31:33.489Z] Environment Variables Check:
[2025-11-26T16:31:33.489Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T16:31:33.489Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T16:31:33.489Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T16:31:33.489Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T16:31:33.489Z] 
Multi-Channel Configuration:
[2025-11-26T16:31:33.489Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T16:31:33.490Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T16:31:33.490Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T16:31:33.490Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T16:31:33.490Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T16:31:33.490Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T16:31:33.490Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T16:31:33.490Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T16:31:33.490Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T16:31:33.490Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T16:31:33.490Z] 
Data Files Check:
[2025-11-26T16:31:33.491Z] .github/data/new_jobs.json: ✅ Exists (19 items, 53156 bytes)
[2025-11-26T16:31:33.493Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328664 bytes)
[2025-11-26T16:31:33.493Z] 
========================================
[2025-11-26T16:31:33.493Z] Starting Enhanced Discord Bot...
[2025-11-26T16:31:33.493Z] ========================================
[2025-11-26T16:31:34.527Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T16:31:34.528Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 19 jobs to encrypted JSON...
[2025-11-26T16:31:34.529Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T16:31:34.608Z] [BOT] ✅ Export complete: Added 0, Skipped 19, Total 19
[2025-11-26T16:31:34.608Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T16:31:34.609Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T16:31:34.609Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T16:31:34.609Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-26T16:31:34.609Z] [BOT] 📬 Found 15 new jobs (4 already posted)...
📤 Posting 15 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T16:31:34.611Z] [BOT] 📌 Posting 15 jobs to #💻・tech-jobs
[2025-11-26T16:31:34.611Z] [BOT] 📍 [ROUTING] "Data Analyst I" @ ORG_2a78025d Milk Producers
   Category: TECH (matched: "data")
[2025-11-26T16:31:34.611Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:31:34.616Z] [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T16:31:34.809Z] [BOT] ✅ Created forum post: 🏢 Data Analyst I @ ORG_2a78025d Milk Producers in #💻・tech-jobs
[2025-11-26T16:31:34.809Z] [BOT] ✅ Industry: Data Analyst I @ ORG_2a78025d Milk Producers
[2025-11-26T16:31:36.712Z] [BOT] ✅ Created forum post: 🏢 Data Analyst I @ ORG_2a78025d Milk Producers in #💻・remote-usa
[2025-11-26T16:31:36.712Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T16:31:38.212Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:31:38.213Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-26T16:31:38.218Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:31:38.218Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
[2025-11-26T16:31:38.219Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:31:38.688Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T16:31:38.688Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:31:40.421Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T16:31:41.922Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:31:41.923Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-26T16:31:41.926Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:31:41.926Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
[2025-11-26T16:31:41.926Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:31:42.234Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T16:31:42.235Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:31:45.431Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T16:31:46.933Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:31:46.933Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-26T16:31:46.937Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:31:46.937Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
[2025-11-26T16:31:46.938Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:31:47.212Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:31:48.913Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T16:31:50.413Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:31:50.414Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-26T16:31:50.418Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:31:50.418Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
[2025-11-26T16:31:50.418Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:31:50.733Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:31:52.434Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T16:31:53.936Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:31:53.936Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-26T16:31:53.940Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:31:53.940Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
[2025-11-26T16:31:53.940Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:31:54.278Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:31:56.175Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T16:31:56.175Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T16:31:57.677Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:31:57.677Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-26T16:31:57.683Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:31:57.683Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:31:58.062Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:31:59.815Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T16:32:01.316Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:32:01.317Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-26T16:32:01.321Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:32:01.321Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
[2025-11-26T16:32:01.321Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:32:01.727Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T16:32:01.728Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T16:32:03.229Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:32:03.229Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-26T16:32:03.233Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:32:03.233Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-26T16:32:03.233Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:32:03.612Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T16:32:03.612Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:32:06.874Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T16:32:08.375Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:32:08.376Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-26T16:32:08.380Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:32:08.380Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-26T16:32:08.380Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:32:08.663Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T16:32:08.663Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T16:32:10.163Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:32:10.163Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-26T16:32:10.167Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:32:10.168Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-26T16:32:10.168Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:32:10.418Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:32:12.131Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T16:32:13.632Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:32:13.632Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-26T16:32:13.636Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:32:13.636Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-26T16:32:13.636Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:32:13.906Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:32:16.496Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T16:32:17.997Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:32:17.997Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-26T16:32:18.002Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:32:18.002Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:32:18.265Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T16:32:18.265Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T16:32:19.766Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:32:19.767Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-26T16:32:19.771Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:32:19.771Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:32:19.951Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:32:21.708Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T16:32:23.209Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:32:23.210Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-26T16:32:23.214Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:32:23.214Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-26T16:32:23.214Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
[2025-11-26T16:32:23.214Z] [BOT] Category: TECH (matched: "engineer/engineering")
[2025-11-26T16:32:23.214Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:32:23.439Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T16:32:25.315Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T16:32:26.816Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:32:26.817Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-26T16:32:26.821Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:32:26.821Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-26T16:32:29.822Z] [BOT] 🎉 Posting complete! Successfully posted: 15, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T16:32:29.861Z] [BOT] 📂 Loaded 423 existing routing entries
[2025-11-26T16:32:29.900Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 15
   Total entries: 438
   Timestamp: 2025-11-26T16:32:29.898Z
[2025-11-26T16:32:31.907Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*