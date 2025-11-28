# Discord Bot Execution Audit
**Timestamp:** 2025-11-28T04:07:26.981Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-28T04:06:43.707Z] ========================================
[2025-11-28T04:06:43.709Z] Discord Bot Execution Log
[2025-11-28T04:06:43.709Z] Environment: GitHub Actions
[2025-11-28T04:06:43.709Z] Node Version: v20.19.5
[2025-11-28T04:06:43.709Z] ========================================
[2025-11-28T04:06:43.709Z] Environment Variables Check:
[2025-11-28T04:06:43.709Z] DISCORD_TOKEN: ✅ Set
[2025-11-28T04:06:43.709Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-28T04:06:43.709Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-28T04:06:43.709Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-28T04:06:43.709Z] 
Multi-Channel Configuration:
[2025-11-28T04:06:43.709Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-28T04:06:43.710Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-28T04:06:43.710Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-28T04:06:43.710Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-28T04:06:43.710Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-28T04:06:43.710Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-28T04:06:43.710Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-28T04:06:43.710Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-28T04:06:43.710Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-28T04:06:43.710Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-28T04:06:43.710Z] 
Data Files Check:
[2025-11-28T04:06:43.711Z] .github/data/new_jobs.json: ✅ Exists (20 items, 64347 bytes)
[2025-11-28T04:06:43.713Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 329724 bytes)
[2025-11-28T04:06:43.713Z] 
========================================
[2025-11-28T04:06:43.713Z] Starting Enhanced Discord Bot...
[2025-11-28T04:06:43.713Z] ========================================
[2025-11-28T04:06:44.792Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-28T04:06:44.792Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 20 jobs to encrypted JSON...
[2025-11-28T04:06:44.793Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-28T04:06:44.871Z] [BOT] ✅ Export complete: Added 0, Skipped 20, Total 20
[2025-11-28T04:06:44.872Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-28T04:06:44.872Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-28T04:06:44.873Z] [BOT] 📬 Found 17 new jobs (3 already posted)...
[2025-11-28T04:06:44.873Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
[2025-11-28T04:06:44.873Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
[2025-11-28T04:06:44.873Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
📋 After blacklist filter: 8 jobs (9 blacklisted)
[2025-11-28T04:06:44.873Z] [BOT] 📋 After title+company+location dedup: 8 unique jobs to post
[2025-11-28T04:06:44.874Z] [BOT] ⏸️ Limiting to 50 jobs this run, 9 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-28T04:06:44.877Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-11-28T04:06:44.877Z] [BOT] 📍 [ROUTING] "Java Student Developer Advocate" @ ORG_dc7620eb
[2025-11-28T04:06:44.878Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-28T04:06:44.882Z] [BOT ERROR] (node:2927) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-28T04:06:45.207Z] [BOT] ✅ Created forum post: 🔴 Java Student Developer Advocate @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Java Student Developer Advocate @ ORG_dc7620eb
[2025-11-28T04:06:46.708Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-28T04:06:46.709Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-28T04:06:46.713Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-28T04:06:46.714Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Strategic Analytics Associate" @ ORG_d5ad4495
   Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-28T04:06:47.180Z] [BOT] ✅ Created forum post: 🏢 Strategic Analytics Associate @ ORG_d5ad4495 in #💻・tech-jobs
[2025-11-28T04:06:47.181Z] [BOT] ✅ Industry: Strategic Analytics Associate @ ORG_d5ad4495
[2025-11-28T04:06:48.986Z] [BOT] ✅ Created forum post: 🏢 Strategic Analytics Associate @ ORG_d5ad4495 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-28T04:06:50.487Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-28T04:06:50.488Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-28T04:06:50.491Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-28T04:06:50.491Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Financial Data Analyst - Budget and Finance" @ ORG_fdbe38ca
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-28T04:06:50.688Z] [BOT] ✅ Created forum post: 🏢 Financial Data Analyst - Budget and Finance @ ORG_fdbe38ca in #💻・tech-jobs
  ✅ Industry: Financial Data Analyst - Budget and Finance @ ORG_fdbe38ca
[2025-11-28T04:06:52.533Z] [BOT] ✅ Created forum post: 🏢 Financial Data Analyst - Budget and Finance @ ORG_fdbe38ca in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-28T04:06:54.032Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-28T04:06:54.033Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-28T04:06:54.037Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-28T04:06:54.037Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Graduate Research Aide - Nuclear Engineering" @ ORG_a867f63f National Laboratory
   Category: TECH (matched: "engineer/engineering")
[2025-11-28T04:06:54.037Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-28T04:06:54.256Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Aide - Nuclear Engineering @ ORG_a867f63f National Laboratory in #💻・tech-jobs
[2025-11-28T04:06:54.256Z] [BOT] ✅ Industry: Graduate Research Aide - Nuclear Engineering @ ORG_a867f63f National Laboratory
[2025-11-28T04:06:56.063Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Aide - Nuclear Engineering @ ORG_a867f63f National Laboratory in #🌆・chicago
[2025-11-28T04:06:56.063Z] [BOT] ✅ Location: 🌆・chicago
[2025-11-28T04:06:57.564Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-28T04:06:57.565Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-28T04:06:57.569Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-28T04:06:57.569Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Software Developer" @ ORG_6468cf88
   Category: TECH (matched: "software")
[2025-11-28T04:06:57.570Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-28T04:06:57.836Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_6468cf88 in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_6468cf88
[2025-11-28T04:06:59.495Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_6468cf88 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-28T04:07:00.996Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-28T04:07:00.997Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-28T04:07:01.000Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-28T04:07:01.000Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-28T04:07:04.000Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-11-28T04:07:04.001Z] [BOT] 📍 [ROUTING] "Earth Scientist" @ ORG_c9143fa6 Corporation
   Category: FINANCE (matched: "treasury")
   Channel: 💰・finance-jobs (1391...2941)
[2025-11-28T04:07:04.262Z] [BOT] ✅ Created forum post: 🏢 Earth Scientist @ ORG_c9143fa6 Corporation in #💰・finance-jobs
  ✅ Industry: Earth Scientist @ ORG_c9143fa6 Corporation
[2025-11-28T04:07:06.067Z] [BOT] ✅ Created forum post: 🏢 Earth Scientist @ ORG_c9143fa6 Corporation in #🤠・austin
  ✅ Location: 🤠・austin
[2025-11-28T04:07:07.567Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-28T04:07:07.568Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-28T04:07:07.572Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-28T04:07:07.572Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-28T04:07:10.573Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-11-28T04:07:10.573Z] [BOT] 📍 [ROUTING] "W.J. Cody Associates" @ ORG_a867f63f National Laboratory
   Category: HR (matched: "benefits")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-11-28T04:07:10.985Z] [BOT] ✅ Created forum post: 🏢 W.J. Cody Associates @ ORG_a867f63f National Laboratory in #📁・JID_e938df7b
  ✅ Industry: W.J. Cody Associates @ ORG_a867f63f National Laboratory
[2025-11-28T04:07:12.795Z] [BOT] ✅ Created forum post: 🏢 W.J. Cody Associates @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-28T04:07:14.296Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-28T04:07:14.297Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-28T04:07:14.301Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-28T04:07:14.301Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-28T04:07:17.302Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-11-28T04:07:17.302Z] [BOT] 📍 [ROUTING] "Givens Associates" @ ORG_a867f63f National Laboratory
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-11-28T04:07:17.764Z] [BOT] ✅ Created forum post: 🏢 Givens Associates @ ORG_a867f63f National Laboratory in #📣・marketing-jobs
[2025-11-28T04:07:17.764Z] [BOT] ✅ Industry: Givens Associates @ ORG_a867f63f National Laboratory
[2025-11-28T04:07:19.531Z] [BOT] ✅ Created forum post: 🏢 Givens Associates @ ORG_a867f63f National Laboratory in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-28T04:07:21.031Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-28T04:07:21.032Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-28T04:07:21.035Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-28T04:07:21.035Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-28T04:07:24.036Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-28T04:07:24.073Z] [BOT] 📂 Loaded 522 existing routing entries
[2025-11-28T04:07:24.112Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 530
   Timestamp: 2025-11-28T04:07:24.111Z
[2025-11-28T04:07:26.121Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2927) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*