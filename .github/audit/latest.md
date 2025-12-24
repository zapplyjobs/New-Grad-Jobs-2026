# Discord Bot Execution Audit
**Timestamp:** 2025-12-24T03:46:24.179Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-24T03:46:03.290Z] ========================================
[2025-12-24T03:46:03.292Z] Discord Bot Execution Log
[2025-12-24T03:46:03.292Z] Environment: GitHub Actions
[2025-12-24T03:46:03.292Z] Node Version: v20.19.6
[2025-12-24T03:46:03.292Z] ========================================
[2025-12-24T03:46:03.292Z] Environment Variables Check:
[2025-12-24T03:46:03.292Z] DISCORD_TOKEN: ✅ Set
[2025-12-24T03:46:03.292Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-24T03:46:03.292Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-24T03:46:03.293Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-24T03:46:03.293Z] 
Multi-Channel Configuration:
[2025-12-24T03:46:03.293Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-24T03:46:03.293Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-24T03:46:03.293Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-24T03:46:03.293Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-24T03:46:03.293Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-24T03:46:03.293Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-24T03:46:03.293Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-24T03:46:03.293Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-24T03:46:03.293Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-24T03:46:03.293Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-24T03:46:03.294Z] 
Data Files Check:
[2025-12-24T03:46:03.294Z] .github/data/new_jobs.json: ✅ Exists (4 items, 20086 bytes)
[2025-12-24T03:46:03.297Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 384885 bytes)
[2025-12-24T03:46:03.297Z] 
========================================
[2025-12-24T03:46:03.297Z] Starting Enhanced Discord Bot...
[2025-12-24T03:46:03.297Z] ========================================
[2025-12-24T03:46:03.813Z] [BOT] ✅ Loaded V2 database: 664 jobs
[2025-12-24T03:46:04.234Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-24T03:46:04.234Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-24T03:46:04.234Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-24T03:46:04.235Z] [BOT] 📦 Exporting 4 jobs to encrypted JSON...
[2025-12-24T03:46:04.286Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-24T03:46:04.346Z] [BOT] ✅ Export complete: Added 1, Skipped 3, Total 158
[2025-12-24T03:46:04.347Z] [BOT] 📬 Found 4 new jobs (0 already posted)...
[2025-12-24T03:46:04.347Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-24T03:46:04.348Z] [BOT] 📋 After blacklist filter: 3 jobs (1 blacklisted)
[2025-12-24T03:46:04.348Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2025-12-24T03:46:04.348Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2025-12-24T03:46:04.349Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 3 jobs...
[2025-12-24T03:46:04.349Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-24T03:46:04.353Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-12-24T03:46:04.354Z] [BOT] 📍 [ROUTING] "Technology Analyst Program" @ ORG_526691c5 Insurance
[2025-12-24T03:46:04.354Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2025-12-24T03:46:04.358Z] [BOT ERROR] (node:2544) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-24T03:46:04.917Z] [BOT] ✅ Created forum post: 🏢 Technology Analyst Program @ ORG_526691c5 Insurance in #💰・finance-jobs
  ✅ Industry: Technology Analyst Program @ ORG_526691c5 Insurance
[2025-12-24T03:46:06.719Z] [BOT] ✅ Created forum post: 🏢 Technology Analyst Program @ ORG_526691c5 Insurance in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-24T03:46:08.220Z] [BOT] 💾 Marked as posted: Technology Analyst Program @ ORG_526691c5 Insurance (instance #1)
[2025-12-24T03:46:08.220Z] [BOT] 💾 BEFORE ARCHIVING: 665 jobs in database
[2025-12-24T03:46:08.221Z] [BOT] ✅ No jobs to archive (all 665 jobs within 7-day window)
[2025-12-24T03:46:08.230Z] [BOT] 💾 Saved posted_jobs.json: 665 active jobs
[2025-12-24T03:46:08.231Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-24T03:46:11.232Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-24T03:46:11.232Z] [BOT] 📍 [ROUTING] "Atc – Software and Platform Analyst" @ ORG_6cd9e83c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-24T03:46:11.504Z] [BOT] ✅ Created forum post: 🏢 Atc – Software and Platform Analyst @ ORG_6cd9e83c in #💻・tech-jobs
[2025-12-24T03:46:11.504Z] [BOT] ✅ Industry: Atc – Software and Platform Analyst @ ORG_6cd9e83c
[2025-12-24T03:46:13.279Z] [BOT] ✅ Created forum post: 🏢 Atc – Software and Platform Analyst @ ORG_6cd9e83c in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-24T03:46:14.780Z] [BOT] 💾 Marked as posted: Atc – Software and Platform Analyst @ ORG_6cd9e83c (instance #1)
[2025-12-24T03:46:14.781Z] [BOT] 💾 BEFORE ARCHIVING: 666 jobs in database
[2025-12-24T03:46:14.781Z] [BOT] ✅ No jobs to archive (all 666 jobs within 7-day window)
[2025-12-24T03:46:14.788Z] [BOT] 💾 Saved posted_jobs.json: 666 active jobs
[2025-12-24T03:46:14.788Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-24T03:46:14.790Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - 3D/4D Generation - 2026 Start" @ ORG_08c9a13c
[2025-12-24T03:46:14.790Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-24T03:46:15.012Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - 3D/4D Generation - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Research Scientist Graduate - 3D/4D Generation - 2026 Start @ ORG_08c9a13c
[2025-12-24T03:46:16.972Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - 3D/4D Generation - 2026 Start @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-24T03:46:18.473Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - 3D/4D Generation - 2026 Start @ ORG_08c9a13c (instance #1)
[2025-12-24T03:46:18.474Z] [BOT] 💾 BEFORE ARCHIVING: 667 jobs in database
[2025-12-24T03:46:18.474Z] [BOT] ✅ No jobs to archive (all 667 jobs within 7-day window)
[2025-12-24T03:46:18.480Z] [BOT] 💾 Saved posted_jobs.json: 667 active jobs
[2025-12-24T03:46:18.480Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-24T03:46:21.481Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-12-24T03:46:21.481Z] [BOT] ⏭️  Skipping duplicate: JID_cfb24211-2026_r2561 (posted within 7 days)
[2025-12-24T03:46:21.481Z] [BOT] ⏭️  Skipping duplicate: JID_28f307b7-naelfy26_r00304885 (posted within 7 days)
[2025-12-24T03:46:21.481Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_5b3b53e8-detail (posted within 7 days)
[2025-12-24T03:46:21.482Z] [BOT] ✅ Loaded pending queue: 4 total (0 pending, 4 enriched, 0 posted)
[2025-12-24T03:46:21.482Z] [BOT] ✅ Saved pending queue: 4 total (0 pending, 1 enriched, 3 posted)
[2025-12-24T03:46:21.483Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-24T03:46:21.525Z] [BOT] 📂 Loaded 1057 existing routing entries
[2025-12-24T03:46:21.571Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2025-12-24T03:46:21.571Z] [BOT] Total entries: 1060
   Timestamp: 2025-12-24T03:46:21.565Z
[2025-12-24T03:46:21.571Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_1a414558.jsonl
[2025-12-24T03:46:21.571Z] [BOT] Total attempts: 7
   Successful: 6
   Failed: 0
   Skipped: 1
[2025-12-24T03:46:21.572Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-24T03:46:21.572Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 4
   Top channels:
     1. #🗽・new-york: 2 posts
     2. #💻・tech-jobs: 2 posts
     3. #💰・finance-jobs: 1 posts
     4. #🌉・san-francisco: 1 posts
[2025-12-24T03:46:21.572Z] [BOT] [STATS] Channel stats saved
[2025-12-24T03:46:23.583Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2544) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*