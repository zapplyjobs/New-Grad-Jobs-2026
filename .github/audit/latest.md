# Discord Bot Execution Audit
**Timestamp:** 2025-11-27T23:35:02.627Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-27T23:34:32.034Z] ========================================
[2025-11-27T23:34:32.036Z] Discord Bot Execution Log
[2025-11-27T23:34:32.036Z] Environment: GitHub Actions
[2025-11-27T23:34:32.036Z] Node Version: v20.19.5
[2025-11-27T23:34:32.036Z] ========================================
[2025-11-27T23:34:32.036Z] Environment Variables Check:
[2025-11-27T23:34:32.036Z] DISCORD_TOKEN: ✅ Set
[2025-11-27T23:34:32.036Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-27T23:34:32.036Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-27T23:34:32.036Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-27T23:34:32.036Z] 
Multi-Channel Configuration:
[2025-11-27T23:34:32.037Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-27T23:34:32.037Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-27T23:34:32.037Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-27T23:34:32.037Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-27T23:34:32.037Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-27T23:34:32.037Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-27T23:34:32.037Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-27T23:34:32.037Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-27T23:34:32.037Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-27T23:34:32.037Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-27T23:34:32.037Z] 
Data Files Check:
[2025-11-27T23:34:32.038Z] .github/data/new_jobs.json: ✅ Exists (17 items, 64838 bytes)
[2025-11-27T23:34:32.040Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 329465 bytes)
[2025-11-27T23:34:32.040Z] 
========================================
[2025-11-27T23:34:32.040Z] Starting Enhanced Discord Bot...
[2025-11-27T23:34:32.040Z] ========================================
[2025-11-27T23:34:32.975Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-27T23:34:32.976Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 17 jobs to encrypted JSON...
[2025-11-27T23:34:32.976Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-27T23:34:33.053Z] [BOT] ✅ Export complete: Added 0, Skipped 17, Total 17
[2025-11-27T23:34:33.054Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-27T23:34:33.054Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T23:34:33.054Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-27T23:34:33.054Z] [BOT] 📬 Found 13 new jobs (4 already posted)...
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
[2025-11-27T23:34:33.054Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
[2025-11-27T23:34:33.055Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
📋 After blacklist filter: 5 jobs (8 blacklisted)
[2025-11-27T23:34:33.055Z] [BOT] 📋 After title+company+location dedup: 5 unique jobs to post
[2025-11-27T23:34:33.055Z] [BOT] ⏸️ Limiting to 50 jobs this run, 8 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-27T23:34:33.059Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-11-27T23:34:33.059Z] [BOT] 📍 [ROUTING] "Graduate Engineering Development Program" @ ORG_b99419d3
[2025-11-27T23:34:33.059Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T23:34:33.063Z] [BOT ERROR] (node:2772) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-27T23:34:33.213Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineering Development Program @ ORG_b99419d3 in #💻・tech-jobs
[2025-11-27T23:34:33.214Z] [BOT] ✅ Industry: Graduate Engineering Development Program @ ORG_b99419d3
[2025-11-27T23:34:34.874Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineering Development Program @ ORG_b99419d3 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T23:34:36.376Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T23:34:36.376Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T23:34:36.382Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T23:34:36.382Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "University Data Scientist - Data Scientist" @ ORG_39417f32 Allen
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T23:34:36.776Z] [BOT] ✅ Created forum post: 🏢 University Data Scientist - Data Scientist @ ORG_39417f32 Allen in #💻・tech-jobs
[2025-11-27T23:34:36.776Z] [BOT] ✅ Industry: University Data Scientist - Data Scientist @ ORG_39417f32 Allen
[2025-11-27T23:34:38.457Z] [BOT] ✅ Created forum post: 🏢 University Data Scientist - Data Scientist @ ORG_39417f32 Allen in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T23:34:39.959Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T23:34:39.959Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T23:34:39.962Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T23:34:39.963Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Assistant Professor in Data Journalism/Artificial Intelligence" @ ORG_478e100e University
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T23:34:40.124Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor in Data Journalism/Artificial Intelligence @ ORG_478e100e University in #💻・tech-jobs
[2025-11-27T23:34:40.125Z] [BOT] ✅ Industry: Assistant Professor in Data Journalism/Artificial Intelligence @ ORG_478e100e University
[2025-11-27T23:34:42.185Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor in Data Journalism/Artificial Intelligence @ ORG_478e100e University in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-27T23:34:43.686Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T23:34:43.687Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T23:34:43.691Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T23:34:43.691Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T23:34:46.692Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-11-27T23:34:46.692Z] [BOT] 📍 [ROUTING] "Entry Level Technical Service Scientist" @ ORG_f7840c2c
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2025-11-27T23:34:46.971Z] [BOT] ✅ Created forum post: 🏢 Entry Level Technical Service Scientist @ ORG_f7840c2c in #💲・sales-jobs
  ✅ Industry: Entry Level Technical Service Scientist @ ORG_f7840c2c
[2025-11-27T23:34:48.694Z] [BOT] ✅ Created forum post: 🏢 Entry Level Technical Service Scientist @ ORG_f7840c2c in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T23:34:50.194Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T23:34:50.195Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T23:34:50.199Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T23:34:50.200Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T23:34:53.200Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-11-27T23:34:53.200Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar-Neutrino Physics" @ ORG_478e100e University
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-11-27T23:34:53.484Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar-Neutrino Physics @ ORG_478e100e University in #📁・JID_e938df7b
  ✅ Industry: Postdoctoral Scholar-Neutrino Physics @ ORG_478e100e University
[2025-11-27T23:34:55.424Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar-Neutrino Physics @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T23:34:56.924Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T23:34:56.925Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T23:34:56.929Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T23:34:56.929Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T23:34:59.930Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-27T23:34:59.970Z] [BOT] 📂 Loaded 515 existing routing entries
[2025-11-27T23:35:00.010Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
   Total entries: 520
   Timestamp: 2025-11-27T23:35:00.008Z
[2025-11-27T23:35:02.021Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2772) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*