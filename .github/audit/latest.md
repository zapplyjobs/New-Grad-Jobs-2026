# Discord Bot Execution Audit
**Timestamp:** 2025-11-27T02:48:11.800Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-27T02:47:27.288Z] ========================================
[2025-11-27T02:47:27.289Z] Discord Bot Execution Log
[2025-11-27T02:47:27.289Z] Environment: GitHub Actions
[2025-11-27T02:47:27.290Z] Node Version: v20.19.5
[2025-11-27T02:47:27.290Z] ========================================
[2025-11-27T02:47:27.290Z] Environment Variables Check:
[2025-11-27T02:47:27.290Z] DISCORD_TOKEN: ✅ Set
[2025-11-27T02:47:27.290Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-27T02:47:27.290Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-27T02:47:27.290Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-27T02:47:27.290Z] 
Multi-Channel Configuration:
[2025-11-27T02:47:27.290Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-27T02:47:27.290Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-27T02:47:27.290Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-27T02:47:27.290Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-27T02:47:27.290Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-27T02:47:27.290Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-27T02:47:27.290Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-27T02:47:27.290Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-27T02:47:27.291Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-27T02:47:27.291Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-27T02:47:27.291Z] 
Data Files Check:
[2025-11-27T02:47:27.291Z] .github/data/new_jobs.json: ✅ Exists (18 items, 72476 bytes)
[2025-11-27T02:47:27.293Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328866 bytes)
[2025-11-27T02:47:27.293Z] 
========================================
[2025-11-27T02:47:27.293Z] Starting Enhanced Discord Bot...
[2025-11-27T02:47:27.293Z] ========================================
[2025-11-27T02:47:28.311Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-27T02:47:28.311Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-11-27T02:47:28.312Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-27T02:47:28.312Z] [BOT] 📦 Exporting 18 jobs to encrypted JSON...
[2025-11-27T02:47:28.392Z] [BOT] ✅ Export complete: Added 0, Skipped 18, Total 18
[2025-11-27T02:47:28.393Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T02:47:28.393Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T02:47:28.393Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
📬 Found 15 new jobs (3 already posted)...
[2025-11-27T02:47:28.393Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T02:47:28.393Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T02:47:28.393Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T02:47:28.394Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
📋 After title+company dedup: 10 unique jobs to post
   (5 skipped as duplicate titles)
⏸️ Limiting to 50 jobs this run, 5 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-27T02:47:28.397Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2025-11-27T02:47:28.398Z] [BOT] 📍 [ROUTING] "Front-end Software Engineer 1" @ ORG_fa31032b
[2025-11-27T02:47:28.398Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T02:47:28.402Z] [BOT ERROR] (node:2807) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-27T02:47:28.549Z] [BOT] ✅ Created forum post: 🏢 Front-end Software Engineer 1 @ ORG_fa31032b in #💻・tech-jobs
[2025-11-27T02:47:28.549Z] [BOT] ✅ Industry: Front-end Software Engineer 1 @ ORG_fa31032b
[2025-11-27T02:47:30.336Z] [BOT] ✅ Created forum post: 🏢 Front-end Software Engineer 1 @ ORG_fa31032b in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T02:47:31.837Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T02:47:31.838Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T02:47:31.843Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T02:47:31.843Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "LLM Optimization - AI SEO / GEO" @ ORG_c4601e74
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T02:47:32.138Z] [BOT] ✅ Created forum post: 🏢 LLM Optimization - AI SEO / GEO @ ORG_c4601e74 in #💻・tech-jobs
  ✅ Industry: LLM Optimization - AI SEO / GEO @ ORG_c4601e74
[2025-11-27T02:47:33.960Z] [BOT] ✅ Created forum post: 🏢 LLM Optimization - AI SEO / GEO @ ORG_c4601e74 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T02:47:35.461Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T02:47:35.461Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T02:47:35.466Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T02:47:35.466Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Business Intelligence Analyst" @ ORG_010902b0
   Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T02:47:35.631Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Analyst @ ORG_010902b0 in #💻・tech-jobs
  ✅ Industry: Business Intelligence Analyst @ ORG_010902b0
[2025-11-27T02:47:37.428Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Analyst @ ORG_010902b0 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T02:47:38.928Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T02:47:38.929Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T02:47:38.933Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T02:47:38.933Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_43d59af4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T02:47:39.136Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_43d59af4 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_43d59af4
[2025-11-27T02:47:40.833Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_43d59af4 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-27T02:47:42.335Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T02:47:42.335Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T02:47:42.340Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T02:47:42.340Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Part-Time Grad" @ ORG_478e100e University
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T02:47:42.529Z] [BOT] ✅ Created forum post: 🏢 Part-Time Grad @ ORG_478e100e University in #💻・tech-jobs
  ✅ Industry: Part-Time Grad @ ORG_478e100e University
[2025-11-27T02:47:44.202Z] [BOT] ✅ Created forum post: 🏢 Part-Time Grad @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T02:47:45.703Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T02:47:45.704Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T02:47:45.707Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T02:47:45.707Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T02:47:45.962Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T02:47:47.742Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T02:47:49.244Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T02:47:49.244Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T02:47:49.248Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T02:47:49.248Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T02:47:49.484Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-27T02:47:51.154Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
[2025-11-27T02:47:51.154Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-27T02:47:52.656Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T02:47:52.656Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T02:47:52.660Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T02:47:52.660Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T02:47:55.662Z] [BOT] 📌 Posting 3 jobs to #📁・JID_e938df7b
[2025-11-27T02:47:55.662Z] [BOT] 📍 [ROUTING] "Residential Technical Reviewer" @ ORG_d51736fa
   Category: HR (matched: "compensation")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-11-27T02:47:55.864Z] [BOT] ✅ Created forum post: 🏢 Residential Technical Reviewer @ ORG_d51736fa in #📁・JID_e938df7b
  ✅ Industry: Residential Technical Reviewer @ ORG_d51736fa
[2025-11-27T02:47:57.646Z] [BOT] ✅ Created forum post: 🏢 Residential Technical Reviewer @ ORG_d51736fa in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-27T02:47:59.147Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T02:47:59.148Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T02:47:59.151Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T02:47:59.152Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Part-Time Research Assistant-Population Research Institute" @ ORG_478e100e University
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-11-27T02:47:59.318Z] [BOT] ✅ Created forum post: 🏢 Part-Time Research Assistant-Population Research Institute @ ORG_478e100e University in #📁・JID_e938df7b
  ✅ Industry: Part-Time Research Assistant-Population Research Institute @ ORG_478e100e University
[2025-11-27T02:48:01.025Z] [BOT] ✅ Created forum post: 🏢 Part-Time Research Assistant-Population Research Institute @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T02:48:02.525Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T02:48:02.526Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T02:48:02.530Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T02:48:02.530Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Part-Time Research Assistant - Astronomy Department" @ ORG_478e100e University
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-11-27T02:48:02.706Z] [BOT] ✅ Created forum post: 🏢 Part-Time Research Assistant - Astronomy Department @ ORG_478e100e University in #📁・JID_e938df7b
  ✅ Industry: Part-Time Research Assistant - Astronomy Department @ ORG_478e100e University
[2025-11-27T02:48:04.453Z] [BOT] ✅ Created forum post: 🏢 Part-Time Research Assistant - Astronomy Department @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T02:48:05.953Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T02:48:05.954Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T02:48:05.958Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T02:48:05.958Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T02:48:08.958Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-27T02:48:08.998Z] [BOT] 📂 Loaded 465 existing routing entries
[2025-11-27T02:48:09.037Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 475
   Timestamp: 2025-11-27T02:48:09.036Z
[2025-11-27T02:48:11.046Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2807) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*