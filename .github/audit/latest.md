# Discord Bot Execution Audit
**Timestamp:** 2025-11-27T03:03:40.587Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-27T03:03:13.924Z] ========================================
[2025-11-27T03:03:13.926Z] Discord Bot Execution Log
[2025-11-27T03:03:13.926Z] Environment: GitHub Actions
[2025-11-27T03:03:13.926Z] Node Version: v20.19.5
[2025-11-27T03:03:13.926Z] ========================================
[2025-11-27T03:03:13.926Z] Environment Variables Check:
[2025-11-27T03:03:13.926Z] DISCORD_TOKEN: ✅ Set
[2025-11-27T03:03:13.926Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-27T03:03:13.926Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-27T03:03:13.926Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-27T03:03:13.926Z] 
Multi-Channel Configuration:
[2025-11-27T03:03:13.926Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-27T03:03:13.927Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-27T03:03:13.927Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-27T03:03:13.927Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-27T03:03:13.927Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-27T03:03:13.927Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-27T03:03:13.927Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-27T03:03:13.927Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-27T03:03:13.927Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-27T03:03:13.927Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-27T03:03:13.927Z] 
Data Files Check:
[2025-11-27T03:03:13.928Z] .github/data/new_jobs.json: ✅ Exists (19 items, 90000 bytes)
[2025-11-27T03:03:13.930Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 329254 bytes)
[2025-11-27T03:03:13.930Z] 
========================================
[2025-11-27T03:03:13.930Z] Starting Enhanced Discord Bot...
[2025-11-27T03:03:13.930Z] ========================================
[2025-11-27T03:03:14.616Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-27T03:03:14.617Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-11-27T03:03:14.617Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-27T03:03:14.617Z] [BOT] 📦 Exporting 19 jobs to encrypted JSON...
[2025-11-27T03:03:14.696Z] [BOT] ✅ Export complete: Added 0, Skipped 19, Total 19
[2025-11-27T03:03:14.697Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T03:03:14.697Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T03:03:14.698Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-27T03:03:14.698Z] [BOT] 📬 Found 16 new jobs (3 already posted)...
[2025-11-27T03:03:14.698Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T03:03:14.698Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T03:03:14.698Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
📋 After title+company dedup: 6 unique jobs to post
   (10 skipped as duplicate titles)
⏸️ Limiting to 50 jobs this run, 10 deferred for next run
📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-27T03:03:14.702Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-11-27T03:03:14.702Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee" @ ORG_a867f63f National Laboratory
[2025-11-27T03:03:14.702Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-11-27T03:03:14.707Z] [BOT ERROR] (node:2411) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-27T03:03:14.860Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee @ ORG_a867f63f National Laboratory in #📁・JID_e938df7b
[2025-11-27T03:03:14.860Z] [BOT] ✅ Industry: Postdoctoral Appointee @ ORG_a867f63f National Laboratory
[2025-11-27T03:03:16.682Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-27T03:03:18.183Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T03:03:18.184Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T03:03:18.189Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T03:03:18.189Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T03:03:21.190Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-11-27T03:03:21.190Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_e42479b2
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T03:03:21.368Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_e42479b2 in #💻・tech-jobs
[2025-11-27T03:03:21.368Z] [BOT] ✅ Industry: Data Analyst @ ORG_e42479b2
[2025-11-27T03:03:23.055Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_e42479b2 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-27T03:03:24.556Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T03:03:24.557Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T03:03:24.561Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T03:03:24.561Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Builder – New Grad - AI Engineer" @ ORG_eb020b7a
[2025-11-27T03:03:24.561Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T03:03:24.806Z] [BOT] ✅ Created forum post: 🏢 Builder – New Grad - AI Engineer @ ORG_eb020b7a in #💻・tech-jobs
[2025-11-27T03:03:24.806Z] [BOT] ✅ Industry: Builder – New Grad - AI Engineer @ ORG_eb020b7a
[2025-11-27T03:03:26.456Z] [BOT] ✅ Created forum post: 🏢 Builder – New Grad - AI Engineer @ ORG_eb020b7a in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-27T03:03:27.957Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T03:03:27.957Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T03:03:27.961Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T03:03:27.961Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Data Analyst - International Group Program" @ ORG_30735767 Financial
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T03:03:28.236Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - International Group Program @ ORG_30735767 Financial in #💻・tech-jobs
  ✅ Industry: Data Analyst - International Group Program @ ORG_30735767 Financial
[2025-11-27T03:03:29.738Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T03:03:29.738Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T03:03:29.742Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T03:03:29.743Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T03:03:29.921Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T03:03:31.676Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T03:03:33.176Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T03:03:33.177Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T03:03:33.180Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T03:03:33.180Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T03:03:33.422Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-27T03:03:34.923Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T03:03:34.924Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T03:03:34.927Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T03:03:34.927Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T03:03:37.928Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-27T03:03:37.966Z] [BOT] 📂 Loaded 475 existing routing entries
[2025-11-27T03:03:38.005Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
   Total entries: 481
[2025-11-27T03:03:38.005Z] [BOT] Timestamp: 2025-11-27T03:03:38.003Z
[2025-11-27T03:03:40.014Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2411) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*