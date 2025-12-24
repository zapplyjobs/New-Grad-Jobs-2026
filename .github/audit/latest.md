# Discord Bot Execution Audit
**Timestamp:** 2025-12-24T23:35:16.102Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-24T23:35:04.873Z] ========================================
[2025-12-24T23:35:04.875Z] Discord Bot Execution Log
[2025-12-24T23:35:04.875Z] Environment: GitHub Actions
[2025-12-24T23:35:04.875Z] Node Version: v20.19.6
[2025-12-24T23:35:04.875Z] ========================================
[2025-12-24T23:35:04.875Z] Environment Variables Check:
[2025-12-24T23:35:04.875Z] DISCORD_TOKEN: ✅ Set
[2025-12-24T23:35:04.876Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-24T23:35:04.876Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-24T23:35:04.876Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-24T23:35:04.876Z] 
Multi-Channel Configuration:
[2025-12-24T23:35:04.876Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-24T23:35:04.876Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-24T23:35:04.876Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-24T23:35:04.876Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-24T23:35:04.876Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-24T23:35:04.876Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-24T23:35:04.877Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-24T23:35:04.877Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-24T23:35:04.877Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-24T23:35:04.877Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-24T23:35:04.877Z] 
Data Files Check:
[2025-12-24T23:35:04.877Z] .github/data/new_jobs.json: ✅ Exists (2 items, 1522 bytes)
[2025-12-24T23:35:04.880Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 391986 bytes)
[2025-12-24T23:35:04.880Z] 
========================================
[2025-12-24T23:35:04.880Z] Starting Enhanced Discord Bot...
[2025-12-24T23:35:04.880Z] ========================================
[2025-12-24T23:35:05.416Z] [BOT] ✅ Loaded V2 database: 675 jobs
[2025-12-24T23:35:06.169Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-24T23:35:06.169Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-24T23:35:06.169Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-24T23:35:06.170Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-24T23:35:06.225Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-24T23:35:06.284Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 141
[2025-12-24T23:35:06.286Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-24T23:35:06.286Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-24T23:35:06.286Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
[2025-12-24T23:35:06.286Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-24T23:35:06.287Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-24T23:35:06.287Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
[2025-12-24T23:35:06.287Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-24T23:35:06.288Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-24T23:35:06.289Z] [BOT] 📍 [ROUTING] "Data Analyst - Entry Level" @ ORG_dcdb7041
[2025-12-24T23:35:06.289Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-24T23:35:06.293Z] [BOT ERROR] (node:2309) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-24T23:35:06.612Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Entry Level @ ORG_dcdb7041 in #📈・JID_fb739488
  ✅ Industry: Data Analyst - Entry Level @ ORG_dcdb7041
[2025-12-24T23:35:08.293Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Entry Level @ ORG_dcdb7041 in #💻・remote-usa
[2025-12-24T23:35:08.293Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-24T23:35:09.794Z] [BOT] 💾 Marked as posted: Data Analyst - Entry Level @ ORG_dcdb7041 (instance #1)
[2025-12-24T23:35:09.794Z] [BOT] 💾 BEFORE ARCHIVING: 676 jobs in database
[2025-12-24T23:35:09.795Z] [BOT] ✅ No jobs to archive (all 676 jobs within 7-day window)
[2025-12-24T23:35:09.809Z] [BOT] 💾 Saved posted_jobs.json: 676 active jobs
[2025-12-24T23:35:09.809Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-24T23:35:12.810Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-24T23:35:12.811Z] [BOT] ⏭️  Skipping duplicate: JID_822ebb4d (posted within 7 days)
[2025-12-24T23:35:12.811Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-24T23:35:12.812Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
[2025-12-24T23:35:12.812Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-24T23:35:12.856Z] [BOT] 📂 Loaded 1068 existing routing entries
[2025-12-24T23:35:12.902Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1069
   Timestamp: 2025-12-24T23:35:12.898Z
[2025-12-24T23:35:12.903Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_1a414558.jsonl
   Total attempts: 3
[2025-12-24T23:35:12.903Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-24T23:35:12.903Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
[2025-12-24T23:35:12.904Z] [BOT] Top channels:
     1. #📈・JID_fb739488: 1 posts
     2. #💻・remote-usa: 1 posts
[2025-12-24T23:35:12.904Z] [BOT] [STATS] Channel stats saved
[2025-12-24T23:35:14.917Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2309) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*