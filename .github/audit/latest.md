# Discord Bot Execution Audit
**Timestamp:** 2025-12-22T11:34:45.947Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-22T11:34:28.223Z] ========================================
[2025-12-22T11:34:28.225Z] Discord Bot Execution Log
[2025-12-22T11:34:28.225Z] Environment: GitHub Actions
[2025-12-22T11:34:28.225Z] Node Version: v20.19.6
[2025-12-22T11:34:28.225Z] ========================================
[2025-12-22T11:34:28.225Z] Environment Variables Check:
[2025-12-22T11:34:28.225Z] DISCORD_TOKEN: ✅ Set
[2025-12-22T11:34:28.226Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-22T11:34:28.226Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-22T11:34:28.226Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-22T11:34:28.226Z] 
Multi-Channel Configuration:
[2025-12-22T11:34:28.226Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-22T11:34:28.226Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-22T11:34:28.226Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-22T11:34:28.226Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-22T11:34:28.226Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-22T11:34:28.226Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-22T11:34:28.226Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-22T11:34:28.226Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-22T11:34:28.226Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-22T11:34:28.226Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-22T11:34:28.226Z] 
Data Files Check:
[2025-12-22T11:34:28.227Z] .github/data/new_jobs.json: ✅ Exists (4 items, 12198 bytes)
[2025-12-22T11:34:28.231Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 536924 bytes)
[2025-12-22T11:34:28.231Z] 
========================================
[2025-12-22T11:34:28.231Z] Starting Enhanced Discord Bot...
[2025-12-22T11:34:28.231Z] ========================================
[2025-12-22T11:34:28.688Z] [BOT] ✅ Loaded V2 database: 917 jobs
[2025-12-22T11:34:29.380Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-22T11:34:29.380Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-22T11:34:29.381Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-22T11:34:29.381Z] [BOT] 📦 Exporting 4 jobs to encrypted JSON...
[2025-12-22T11:34:29.504Z] [BOT] ✅ Export complete: Added 0, Skipped 4, Total 167
[2025-12-22T11:34:29.506Z] [BOT] 📬 Found 4 new jobs (0 already posted)...
[2025-12-22T11:34:29.506Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-22T11:34:29.506Z] [BOT] 📋 After blacklist filter: 3 jobs (1 blacklisted)
[2025-12-22T11:34:29.507Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2025-12-22T11:34:29.507Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2025-12-22T11:34:29.507Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-22T11:34:29.509Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-22T11:34:29.510Z] [BOT] 📍 [ROUTING] "Software Developer, Network Software Associate" @ ORG_9ee5b96f
[2025-12-22T11:34:29.510Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-22T11:34:29.515Z] [BOT ERROR] (node:2316) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-22T11:34:29.690Z] [BOT] ✅ Created forum post: 🏢 Software Developer, Network Software Associate @ ORG_9ee5b96f in #💻・tech-jobs
  ✅ Industry: Software Developer, Network Software Associate @ ORG_9ee5b96f
[2025-12-22T11:34:31.462Z] [BOT] ✅ Created forum post: 🏢 Software Developer, Network Software Associate @ ORG_9ee5b96f in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-22T11:34:32.963Z] [BOT] 💾 Marked as posted: Software Developer, Network Software Associate @ ORG_9ee5b96f (instance #1)
[2025-12-22T11:34:32.963Z] [BOT] 💾 BEFORE ARCHIVING: 918 jobs in database
[2025-12-22T11:34:32.964Z] [BOT] ✅ No jobs to archive (all 918 jobs within 7-day window)
[2025-12-22T11:34:32.982Z] [BOT] 💾 Saved posted_jobs.json: 918 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-22T11:34:32.982Z] [BOT] 📍 [ROUTING] "Junior Product Software Engineer" @ ORG_d6d2009d
[2025-12-22T11:34:32.982Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-22T11:34:33.216Z] [BOT] ✅ Created forum post: 🏢 Junior Product Software Engineer @ ORG_d6d2009d in #💻・tech-jobs
  ✅ Industry: Junior Product Software Engineer @ ORG_d6d2009d
[2025-12-22T11:34:34.990Z] [BOT] ✅ Created forum post: 🏢 Junior Product Software Engineer @ ORG_d6d2009d in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-22T11:34:36.491Z] [BOT] 💾 Marked as posted: Junior Product Software Engineer @ ORG_d6d2009d (instance #1)
💾 BEFORE ARCHIVING: 919 jobs in database
[2025-12-22T11:34:36.492Z] [BOT] ✅ No jobs to archive (all 919 jobs within 7-day window)
[2025-12-22T11:34:36.501Z] [BOT] 💾 Saved posted_jobs.json: 919 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-22T11:34:36.501Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_a0299599
[2025-12-22T11:34:36.501Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-22T11:34:36.823Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_a0299599 in #💻・tech-jobs
[2025-12-22T11:34:36.824Z] [BOT] ✅ Industry: Junior Software Engineer @ ORG_a0299599
[2025-12-22T11:34:38.576Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_a0299599 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-22T11:34:40.077Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_a0299599 (instance #1)
[2025-12-22T11:34:40.077Z] [BOT] 💾 BEFORE ARCHIVING: 920 jobs in database
[2025-12-22T11:34:40.079Z] [BOT] ✅ No jobs to archive (all 920 jobs within 7-day window)
[2025-12-22T11:34:40.086Z] [BOT] 💾 Saved posted_jobs.json: 920 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-22T11:34:43.087Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-12-22T11:34:43.087Z] [BOT] ⏭️  Skipping duplicate: JID_7b79f1e0 (posted within 7 days)
[2025-12-22T11:34:43.087Z] [BOT] ⏭️  Skipping duplicate: JID_672289ac (posted within 7 days)
⏭️  Skipping duplicate: JID_f3e2390a (posted within 7 days)
[2025-12-22T11:34:43.088Z] [BOT] ✅ Loaded pending queue: 4 total (0 pending, 4 enriched, 0 posted)
[2025-12-22T11:34:43.088Z] [BOT] ✅ Saved pending queue: 4 total (0 pending, 1 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2025-12-22T11:34:43.089Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-22T11:34:43.135Z] [BOT] 📂 Loaded 1002 existing routing entries
[2025-12-22T11:34:43.181Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 1005
   Timestamp: 2025-12-22T11:34:43.177Z
[2025-12-22T11:34:43.182Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_0b37efa6.jsonl
   Total attempts: 7
   Successful: 6
[2025-12-22T11:34:43.182Z] [BOT] Failed: 0
   Skipped: 1
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
   Channels used: 3
   Top channels:
[2025-12-22T11:34:43.182Z] [BOT] 1. #💻・tech-jobs: 3 posts
     2. #🌉・san-francisco: 2 posts
     3. #💻・remote-usa: 1 posts
[2025-12-22T11:34:43.183Z] [BOT] [STATS] Channel stats saved
[2025-12-22T11:34:45.193Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2316) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*