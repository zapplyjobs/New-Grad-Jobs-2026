# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T00:41:04.822Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T00:40:47.562Z] ========================================
[2025-12-03T00:40:47.564Z] Discord Bot Execution Log
[2025-12-03T00:40:47.564Z] Environment: GitHub Actions
[2025-12-03T00:40:47.565Z] Node Version: v20.19.5
[2025-12-03T00:40:47.565Z] ========================================
[2025-12-03T00:40:47.565Z] Environment Variables Check:
[2025-12-03T00:40:47.565Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T00:40:47.565Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T00:40:47.565Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T00:40:47.565Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T00:40:47.565Z] 
Multi-Channel Configuration:
[2025-12-03T00:40:47.565Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T00:40:47.566Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T00:40:47.566Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T00:40:47.566Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T00:40:47.566Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T00:40:47.566Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T00:40:47.566Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T00:40:47.566Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T00:40:47.566Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T00:40:47.566Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T00:40:47.566Z] 
Data Files Check:
[2025-12-03T00:40:47.567Z] .github/data/new_jobs.json: ✅ Exists (7 items, 43558 bytes)
[2025-12-03T00:40:47.569Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333259 bytes)
[2025-12-03T00:40:47.569Z] 
========================================
[2025-12-03T00:40:47.569Z] Starting Enhanced Discord Bot...
[2025-12-03T00:40:47.569Z] ========================================
[2025-12-03T00:40:48.392Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T00:40:48.393Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 7 jobs to encrypted JSON...
[2025-12-03T00:40:48.393Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T00:40:48.474Z] [BOT] ✅ Export complete: Added 0, Skipped 7, Total 7
[2025-12-03T00:40:48.475Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T00:40:48.475Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T00:40:48.475Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T00:40:48.475Z] [BOT] 📬 Found 3 new jobs (4 already posted)...
📋 After blacklist filter: 3 jobs (0 blacklisted)
[2025-12-03T00:40:48.476Z] [BOT] 📋 After title+company+location dedup: 3 unique jobs to post
[2025-12-03T00:40:48.476Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T00:40:48.477Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-03T00:40:48.477Z] [BOT] 📍 [ROUTING] "Senior Software Engineer in Test Prisma Access - AI Automation Engineer" @ ORG_94b92bc9 Alto Networks
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T00:40:48.482Z] [BOT ERROR] (node:2480) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T00:40:48.698Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer in Test Prisma Access - AI Automation Engineer @ ORG_94b92bc9 Alto Networks in #💻・tech-jobs
[2025-12-03T00:40:48.699Z] [BOT] ✅ Industry: Senior Software Engineer in Test Prisma Access - AI Automation Engineer @ ORG_94b92bc9 Alto Networks
[2025-12-03T00:40:50.471Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer in Test Prisma Access - AI Automation Engineer @ ORG_94b92bc9 Alto Networks in #🌉・san-francisco
[2025-12-03T00:40:50.471Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-03T00:40:51.973Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T00:40:51.973Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T00:40:51.980Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T00:40:51.980Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Machine Learning Infra SWE" @ ORG_fbdb574d
[2025-12-03T00:40:51.981Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T00:40:52.152Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Infra SWE @ ORG_fbdb574d in #💻・tech-jobs
  ✅ Industry: Machine Learning Infra SWE @ ORG_fbdb574d
[2025-12-03T00:40:54.064Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Infra SWE @ ORG_fbdb574d in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T00:40:55.566Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T00:40:55.566Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T00:40:55.570Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T00:40:55.570Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
   Category: TECH (matched: "software")
[2025-12-03T00:40:55.570Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T00:40:55.901Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
  ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-03T00:40:57.623Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T00:40:59.124Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T00:40:59.125Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T00:40:59.129Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T00:40:59.130Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T00:41:02.131Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-03T00:41:02.171Z] [BOT] 📂 Loaded 638 existing routing entries
[2025-12-03T00:41:02.212Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 641
   Timestamp: 2025-12-03T00:41:02.210Z
[2025-12-03T00:41:04.223Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2480) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*