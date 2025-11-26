# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T16:23:35.755Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 15
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T16:22:39.832Z] ========================================
[2025-11-26T16:22:39.834Z] Discord Bot Execution Log
[2025-11-26T16:22:39.834Z] Environment: GitHub Actions
[2025-11-26T16:22:39.834Z] Node Version: v20.19.5
[2025-11-26T16:22:39.834Z] ========================================
[2025-11-26T16:22:39.834Z] Environment Variables Check:
[2025-11-26T16:22:39.835Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T16:22:39.835Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T16:22:39.835Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T16:22:39.835Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T16:22:39.835Z] 
Multi-Channel Configuration:
[2025-11-26T16:22:39.835Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T16:22:39.835Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T16:22:39.835Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T16:22:39.835Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T16:22:39.835Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T16:22:39.835Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T16:22:39.836Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T16:22:39.836Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T16:22:39.836Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T16:22:39.836Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T16:22:39.836Z] 
Data Files Check:
[2025-11-26T16:22:39.836Z] .github/data/new_jobs.json: ✅ Exists (19 items, 51463 bytes)
[2025-11-26T16:22:39.838Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328624 bytes)
[2025-11-26T16:22:39.838Z] 
========================================
[2025-11-26T16:22:39.838Z] Starting Enhanced Discord Bot...
[2025-11-26T16:22:39.839Z] ========================================
[2025-11-26T16:22:40.723Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T16:22:40.724Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 19 jobs to encrypted JSON...
[2025-11-26T16:22:40.725Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T16:22:40.803Z] [BOT] ✅ Export complete: Added 0, Skipped 19, Total 19
[2025-11-26T16:22:40.804Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T16:22:40.804Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T16:22:40.805Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T16:22:40.805Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-26T16:22:40.805Z] [BOT] 📬 Found 15 new jobs (4 already posted)...
📤 Posting 15 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T16:22:40.807Z] [BOT] 📌 Posting 15 jobs to #💻・tech-jobs
[2025-11-26T16:22:40.807Z] [BOT] 📍 [ROUTING] "CLUB Data Analyst I" @ ORG_ca445e86 Pro Shops
   Category: TECH (matched: "data")
[2025-11-26T16:22:40.807Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:22:40.811Z] [BOT ERROR] (node:2445) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T16:22:41.027Z] [BOT] ✅ Created forum post: 🏢 CLUB Data Analyst I @ ORG_ca445e86 Pro Shops in #💻・tech-jobs
  ✅ Industry: CLUB Data Analyst I @ ORG_ca445e86 Pro Shops
[2025-11-26T16:22:42.796Z] [BOT] ✅ Created forum post: 🏢 CLUB Data Analyst I @ ORG_ca445e86 Pro Shops in #💻・remote-usa
[2025-11-26T16:22:42.796Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T16:22:44.298Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:22:44.299Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit)
[2025-11-26T16:22:44.304Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-26T16:22:44.304Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:22:44.774Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T16:22:44.774Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:22:46.423Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T16:22:47.924Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:22:47.924Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit)
[2025-11-26T16:22:47.927Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-26T16:22:47.928Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:22:48.234Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:22:49.947Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T16:22:51.448Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:22:51.449Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit)
[2025-11-26T16:22:51.453Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:22:51.453Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:22:52.028Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:22:53.758Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T16:22:55.259Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:22:55.260Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit)
[2025-11-26T16:22:55.265Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-26T16:22:55.265Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:22:55.461Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:22:57.174Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T16:22:58.675Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:22:58.676Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit)
[2025-11-26T16:22:58.680Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:22:58.680Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
[2025-11-26T16:22:58.680Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:22:58.876Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:23:00.745Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T16:23:02.247Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:23:02.248Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit)
[2025-11-26T16:23:02.251Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:23:02.252Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:23:02.419Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:23:04.184Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T16:23:05.685Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:23:05.685Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit)
[2025-11-26T16:23:05.689Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:23:05.689Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:23:05.865Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T16:23:05.865Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T16:23:07.366Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:23:07.367Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit)
[2025-11-26T16:23:07.370Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:23:07.371Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
[2025-11-26T16:23:07.371Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:23:07.694Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:23:09.439Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T16:23:10.941Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:23:10.941Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit)
[2025-11-26T16:23:10.945Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-26T16:23:10.945Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
[2025-11-26T16:23:10.945Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:23:11.269Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T16:23:11.269Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T16:23:12.771Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:23:12.771Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit)
[2025-11-26T16:23:12.775Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:23:12.775Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-26T16:23:12.775Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:23:13.044Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T16:23:13.044Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:23:14.712Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T16:23:16.214Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:23:16.214Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit)
[2025-11-26T16:23:16.219Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:23:16.219Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-26T16:23:16.219Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:23:16.408Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:23:19.564Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T16:23:21.064Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:23:21.065Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit)
[2025-11-26T16:23:21.068Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-26T16:23:21.069Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:23:21.546Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T16:23:23.047Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:23:23.048Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit)
[2025-11-26T16:23:23.051Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T16:23:23.051Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-26T16:23:23.051Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:23:23.295Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T16:23:25.044Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T16:23:26.544Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:23:26.545Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit)
[2025-11-26T16:23:26.548Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-26T16:23:26.548Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-26T16:23:26.549Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
[2025-11-26T16:23:26.549Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T16:23:26.765Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T16:23:28.534Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T16:23:30.036Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T16:23:30.036Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit)
[2025-11-26T16:23:30.040Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-26T16:23:30.040Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-26T16:23:33.041Z] [BOT] 🎉 Posting complete! Successfully posted: 15, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T16:23:33.079Z] [BOT] 📂 Loaded 408 existing routing entries
[2025-11-26T16:23:33.118Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 15
   Total entries: 423
   Timestamp: 2025-11-26T16:23:33.117Z
[2025-11-26T16:23:35.128Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2445) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*