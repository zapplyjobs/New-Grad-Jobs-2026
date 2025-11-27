# Discord Bot Execution Audit
**Timestamp:** 2025-11-27T03:55:30.134Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-27T03:55:01.919Z] ========================================
[2025-11-27T03:55:01.921Z] Discord Bot Execution Log
[2025-11-27T03:55:01.921Z] Environment: GitHub Actions
[2025-11-27T03:55:01.921Z] Node Version: v20.19.5
[2025-11-27T03:55:01.921Z] ========================================
[2025-11-27T03:55:01.921Z] Environment Variables Check:
[2025-11-27T03:55:01.921Z] DISCORD_TOKEN: ✅ Set
[2025-11-27T03:55:01.921Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-27T03:55:01.921Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-27T03:55:01.921Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-27T03:55:01.921Z] 
Multi-Channel Configuration:
[2025-11-27T03:55:01.921Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-27T03:55:01.921Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-27T03:55:01.922Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-27T03:55:01.922Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-27T03:55:01.922Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-27T03:55:01.922Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-27T03:55:01.922Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-27T03:55:01.922Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-27T03:55:01.922Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-27T03:55:01.922Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-27T03:55:01.922Z] 
Data Files Check:
[2025-11-27T03:55:01.923Z] .github/data/new_jobs.json: ✅ Exists (20 items, 55636 bytes)
[2025-11-27T03:55:01.925Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 329481 bytes)
[2025-11-27T03:55:01.925Z] 
========================================
[2025-11-27T03:55:01.925Z] Starting Enhanced Discord Bot...
[2025-11-27T03:55:01.925Z] ========================================
[2025-11-27T03:55:02.972Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-27T03:55:02.972Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 20 jobs to encrypted JSON...
[2025-11-27T03:55:02.973Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-27T03:55:03.051Z] [BOT] ✅ Export complete: Added 0, Skipped 20, Total 20
[2025-11-27T03:55:03.052Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-27T03:55:03.052Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T03:55:03.053Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-27T03:55:03.053Z] [BOT] 📬 Found 16 new jobs (4 already posted)...
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T03:55:03.053Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T03:55:03.053Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T03:55:03.053Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
📋 After title+company dedup: 7 unique jobs to post
   (9 skipped as duplicate titles)
⏸️ Limiting to 50 jobs this run, 9 deferred for next run
📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-27T03:55:03.055Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2025-11-27T03:55:03.056Z] [BOT] 📍 [ROUTING] "PhD Applied Scientist - Oracle Health & Analytics" @ ORG_dc7620eb
[2025-11-27T03:55:03.056Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T03:55:03.060Z] [BOT ERROR] (node:2366) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-27T03:55:03.275Z] [BOT] ✅ Created forum post: 🔴 PhD Applied Scientist - Oracle Health & Analytics @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: PhD Applied Scientist - Oracle Health & Analytics @ ORG_dc7620eb
[2025-11-27T03:55:04.775Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T03:55:04.776Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T03:55:04.781Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T03:55:04.782Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Machine Learning Graduate - 2026 Start" @ ORG_08c9a13c
   Category: TECH (matched: "machine learning")
[2025-11-27T03:55:04.782Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T03:55:04.985Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Machine Learning Graduate - 2026 Start @ ORG_08c9a13c
[2025-11-27T03:55:06.772Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate - 2026 Start @ ORG_08c9a13c in #🌧️・seattle
[2025-11-27T03:55:06.772Z] [BOT] ✅ Location: 🌧️・seattle
[2025-11-27T03:55:08.272Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T03:55:08.273Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T03:55:08.278Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T03:55:08.278Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Student Engineering ADAS Algorithm" @ ORG_7f1f7a12
   Category: TECH (matched: "engineer/engineering")
[2025-11-27T03:55:08.278Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T03:55:08.513Z] [BOT] ✅ Created forum post: 🏢 Student Engineering ADAS Algorithm @ ORG_7f1f7a12 in #💻・tech-jobs
[2025-11-27T03:55:08.513Z] [BOT] ✅ Industry: Student Engineering ADAS Algorithm @ ORG_7f1f7a12
[2025-11-27T03:55:10.224Z] [BOT] ✅ Created forum post: 🏢 Student Engineering ADAS Algorithm @ ORG_7f1f7a12 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T03:55:11.723Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T03:55:11.724Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T03:55:11.728Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T03:55:11.728Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Associate Product Software Engineer" @ ORG_8211df30 Kluwer
[2025-11-27T03:55:11.729Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T03:55:11.936Z] [BOT] ✅ Created forum post: 🏢 Associate Product Software Engineer @ ORG_8211df30 Kluwer in #💻・tech-jobs
  ✅ Industry: Associate Product Software Engineer @ ORG_8211df30 Kluwer
[2025-11-27T03:55:13.714Z] [BOT] ✅ Created forum post: 🏢 Associate Product Software Engineer @ ORG_8211df30 Kluwer in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T03:55:15.215Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T03:55:15.215Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T03:55:15.219Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T03:55:15.219Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Working in Technology - Wit - Data Science" @ ORG_190eb3eb Blair
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T03:55:15.411Z] [BOT] ✅ Created forum post: 🏢 Working in Technology - Wit - Data Science @ ORG_190eb3eb Blair in #💻・tech-jobs
  ✅ Industry: Working in Technology - Wit - Data Science @ ORG_190eb3eb Blair
[2025-11-27T03:55:17.144Z] [BOT] ✅ Created forum post: 🏢 Working in Technology - Wit - Data Science @ ORG_190eb3eb Blair in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-27T03:55:18.646Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T03:55:18.646Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T03:55:18.650Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T03:55:18.650Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T03:55:18.831Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-27T03:55:18.831Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T03:55:20.634Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T03:55:22.135Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T03:55:22.135Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T03:55:22.139Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T03:55:22.139Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
[2025-11-27T03:55:22.139Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T03:55:22.344Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-27T03:55:23.845Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T03:55:23.846Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T03:55:23.849Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T03:55:23.849Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T03:55:26.850Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2025-11-27T03:55:26.850Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-27T03:55:26.888Z] [BOT] 📂 Loaded 484 existing routing entries
[2025-11-27T03:55:26.928Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
[2025-11-27T03:55:26.928Z] [BOT] Total entries: 491
   Timestamp: 2025-11-27T03:55:26.926Z
[2025-11-27T03:55:28.938Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2366) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*