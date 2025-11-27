# Discord Bot Execution Audit
**Timestamp:** 2025-11-27T04:03:18.783Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-27T04:02:59.584Z] ========================================
[2025-11-27T04:02:59.586Z] Discord Bot Execution Log
[2025-11-27T04:02:59.586Z] Environment: GitHub Actions
[2025-11-27T04:02:59.586Z] Node Version: v20.19.5
[2025-11-27T04:02:59.586Z] ========================================
[2025-11-27T04:02:59.586Z] Environment Variables Check:
[2025-11-27T04:02:59.586Z] DISCORD_TOKEN: ✅ Set
[2025-11-27T04:02:59.587Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-27T04:02:59.587Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-27T04:02:59.587Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-27T04:02:59.587Z] 
Multi-Channel Configuration:
[2025-11-27T04:02:59.587Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-27T04:02:59.587Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-27T04:02:59.587Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-27T04:02:59.587Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-27T04:02:59.587Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-27T04:02:59.587Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-27T04:02:59.587Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-27T04:02:59.587Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-27T04:02:59.588Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-27T04:02:59.588Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-27T04:02:59.588Z] 
Data Files Check:
[2025-11-27T04:02:59.588Z] .github/data/new_jobs.json: ✅ Exists (17 items, 40389 bytes)
[2025-11-27T04:02:59.590Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 329554 bytes)
[2025-11-27T04:02:59.590Z] 
========================================
[2025-11-27T04:02:59.590Z] Starting Enhanced Discord Bot...
[2025-11-27T04:02:59.590Z] ========================================
[2025-11-27T04:03:00.562Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-27T04:03:00.563Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 17 jobs to encrypted JSON...
[2025-11-27T04:03:00.563Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-27T04:03:00.642Z] [BOT] ✅ Export complete: Added 0, Skipped 17, Total 17
[2025-11-27T04:03:00.643Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-27T04:03:00.643Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T04:03:00.643Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-27T04:03:00.644Z] [BOT] 📬 Found 13 new jobs (4 already posted)...
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T04:03:00.644Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T04:03:00.644Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher at Amazon (already posting one with this title)
[2025-11-27T04:03:00.644Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
📋 After title+company dedup: 4 unique jobs to post
   (9 skipped as duplicate titles)
⏸️ Limiting to 50 jobs this run, 9 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-27T04:03:00.645Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-11-27T04:03:00.645Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US" @ ORG_1bb6fcfb
[2025-11-27T04:03:00.646Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T04:03:00.650Z] [BOT ERROR] (node:2256) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-27T04:03:01.218Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Graduate Engineer - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_1bb6fcfb
[2025-11-27T04:03:02.849Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-11-27T04:03:04.351Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T04:03:04.351Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T04:03:04.358Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T04:03:04.358Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Research Engineer Graduate - Ads ML Infrastructure - PhD" @ ORG_1bb6fcfb
   Category: TECH (matched: "machine learning")
[2025-11-27T04:03:04.359Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T04:03:04.746Z] [BOT] ✅ Created forum post: 🏢 Research Engineer Graduate - Ads ML Infrastructure - PhD @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-11-27T04:03:04.746Z] [BOT] ✅ Industry: Research Engineer Graduate - Ads ML Infrastructure - PhD @ ORG_1bb6fcfb
[2025-11-27T04:03:06.405Z] [BOT] ✅ Created forum post: 🏢 Research Engineer Graduate - Ads ML Infrastructure - PhD @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-27T04:03:07.905Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T04:03:07.906Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T04:03:07.912Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T04:03:07.912Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T04:03:08.083Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-27T04:03:08.084Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T04:03:09.773Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T04:03:11.274Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T04:03:11.274Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T04:03:11.279Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T04:03:11.279Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
[2025-11-27T04:03:11.279Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T04:03:11.516Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-27T04:03:11.516Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-27T04:03:13.016Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T04:03:13.017Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T04:03:13.021Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T04:03:13.021Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T04:03:16.022Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-27T04:03:16.061Z] [BOT] 📂 Loaded 491 existing routing entries
[2025-11-27T04:03:16.100Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 495
   Timestamp: 2025-11-27T04:03:16.098Z
[2025-11-27T04:03:18.111Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2256) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*