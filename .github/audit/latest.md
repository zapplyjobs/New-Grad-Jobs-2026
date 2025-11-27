# Discord Bot Execution Audit
**Timestamp:** 2025-11-27T18:59:47.171Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-27T18:59:26.767Z] ========================================
[2025-11-27T18:59:26.769Z] Discord Bot Execution Log
[2025-11-27T18:59:26.769Z] Environment: GitHub Actions
[2025-11-27T18:59:26.769Z] Node Version: v20.19.5
[2025-11-27T18:59:26.769Z] ========================================
[2025-11-27T18:59:26.769Z] Environment Variables Check:
[2025-11-27T18:59:26.769Z] DISCORD_TOKEN: ✅ Set
[2025-11-27T18:59:26.769Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-27T18:59:26.769Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-27T18:59:26.769Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-27T18:59:26.770Z] 
Multi-Channel Configuration:
[2025-11-27T18:59:26.770Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-27T18:59:26.770Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-27T18:59:26.770Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-27T18:59:26.770Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-27T18:59:26.770Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-27T18:59:26.770Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-27T18:59:26.770Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-27T18:59:26.770Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-27T18:59:26.770Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-27T18:59:26.770Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-27T18:59:26.770Z] 
Data Files Check:
[2025-11-27T18:59:26.771Z] .github/data/new_jobs.json: ✅ Exists (15 items, 51995 bytes)
[2025-11-27T18:59:26.773Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 329525 bytes)
[2025-11-27T18:59:26.773Z] 
========================================
[2025-11-27T18:59:26.773Z] Starting Enhanced Discord Bot...
[2025-11-27T18:59:26.773Z] ========================================
[2025-11-27T18:59:27.564Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-27T18:59:27.564Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 15 jobs to encrypted JSON...
[2025-11-27T18:59:27.565Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-27T18:59:27.644Z] [BOT] ✅ Export complete: Added 0, Skipped 15, Total 15
[2025-11-27T18:59:27.645Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-27T18:59:27.645Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T18:59:27.645Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-27T18:59:27.646Z] [BOT] 📬 Found 11 new jobs (4 already posted)...
[2025-11-27T18:59:27.646Z] [BOT] ⏭️ Skipping duplicate title+company+location: Agentic AI Teacher - Agi Ds at Amazon, Boston (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Agentic AI Teacher - Agi Ds at Amazon, Boston (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Agentic AI Teacher - Agi Ds at Amazon, Boston (already posting one with this combination)
[2025-11-27T18:59:27.646Z] [BOT] ⏭️ Skipping duplicate title+company+location: Agentic AI Teacher - Agi Ds at Amazon, Boston (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Agentic AI Teacher - Agi Ds at Amazon, Boston (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Agentic AI Teacher - Agi Ds at Amazon, Boston (already posting one with this combination)
[2025-11-27T18:59:27.646Z] [BOT] ⏭️ Skipping duplicate title+company+location: Agentic AI Teacher - Agi Ds at Amazon, Boston (already posting one with this combination)
📋 After title+company+location dedup: 4 unique jobs to post
   (7 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 7 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-27T18:59:27.647Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-11-27T18:59:27.647Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_74b6be53int Technologies
[2025-11-27T18:59:27.647Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T18:59:27.652Z] [BOT ERROR] (node:2205) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-27T18:59:27.835Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_74b6be53int Technologies in #💻・tech-jobs
[2025-11-27T18:59:27.835Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_74b6be53int Technologies
[2025-11-27T18:59:29.514Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_74b6be53int Technologies in #🌧️・seattle
[2025-11-27T18:59:29.514Z] [BOT] ✅ Location: 🌧️・seattle
[2025-11-27T18:59:31.015Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T18:59:31.016Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T18:59:31.084Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T18:59:31.084Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Software Engineer, New Grad, Backend" @ ORG_9cc3a043
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T18:59:31.308Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, New Grad, Backend @ ORG_9cc3a043 in #💻・tech-jobs
[2025-11-27T18:59:31.308Z] [BOT] ✅ Industry: Software Engineer, New Grad, Backend @ ORG_9cc3a043
[2025-11-27T18:59:32.978Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, New Grad, Backend @ ORG_9cc3a043 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-27T18:59:34.479Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T18:59:34.480Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T18:59:34.484Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T18:59:34.484Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Software Engineer, New Grad, Fullstack" @ ORG_9cc3a043
[2025-11-27T18:59:34.484Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T18:59:34.645Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, New Grad, Fullstack @ ORG_9cc3a043 in #💻・tech-jobs
  ✅ Industry: Software Engineer, New Grad, Fullstack @ ORG_9cc3a043
[2025-11-27T18:59:36.378Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, New Grad, Fullstack @ ORG_9cc3a043 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-27T18:59:37.880Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T18:59:37.881Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T18:59:37.885Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T18:59:37.886Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
[2025-11-27T18:59:37.886Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T18:59:38.185Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T18:59:39.980Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T18:59:41.481Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T18:59:41.482Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T18:59:41.486Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T18:59:41.487Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T18:59:44.487Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-27T18:59:44.527Z] [BOT] 📂 Loaded 511 existing routing entries
[2025-11-27T18:59:44.567Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2025-11-27T18:59:44.567Z] [BOT] Total entries: 515
   Timestamp: 2025-11-27T18:59:44.565Z
[2025-11-27T18:59:46.577Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2205) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*