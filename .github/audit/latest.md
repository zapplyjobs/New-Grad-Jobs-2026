# Discord Bot Execution Audit
**Timestamp:** 2025-12-31T23:35:58.694Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-31T23:35:44.894Z] ========================================
[2025-12-31T23:35:44.896Z] Discord Bot Execution Log
[2025-12-31T23:35:44.896Z] Environment: GitHub Actions
[2025-12-31T23:35:44.896Z] Node Version: v20.19.6
[2025-12-31T23:35:44.896Z] ========================================
[2025-12-31T23:35:44.896Z] Environment Variables Check:
[2025-12-31T23:35:44.896Z] DISCORD_TOKEN: ✅ Set
[2025-12-31T23:35:44.897Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-31T23:35:44.897Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-31T23:35:44.897Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-31T23:35:44.897Z] 
Multi-Channel Configuration:
[2025-12-31T23:35:44.897Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-31T23:35:44.897Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-31T23:35:44.897Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-31T23:35:44.897Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-31T23:35:44.897Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-31T23:35:44.897Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-31T23:35:44.897Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-31T23:35:44.897Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-31T23:35:44.897Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-31T23:35:44.898Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-31T23:35:44.898Z] 
Data Files Check:
[2025-12-31T23:35:44.898Z] .github/data/new_jobs.json: ✅ Exists (2 items, 12360 bytes)
[2025-12-31T23:35:44.898Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 31522 bytes)
[2025-12-31T23:35:44.898Z] 
========================================
[2025-12-31T23:35:44.898Z] Starting Enhanced Discord Bot...
[2025-12-31T23:35:44.899Z] ========================================
[2025-12-31T23:35:45.414Z] [BOT] ✅ Loaded V2 database: 53 jobs
[2025-12-31T23:35:46.090Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-31T23:35:46.091Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-31T23:35:46.091Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-31T23:35:46.092Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-31T23:35:46.177Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 31
[2025-12-31T23:35:46.179Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-31T23:35:46.179Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-31T23:35:46.179Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2025-12-31T23:35:46.180Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2025-12-31T23:35:46.180Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-31T23:35:46.181Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-31T23:35:46.182Z] [BOT] 📍 [ROUTING] "Early Career Software Engineer" @ ORG_2b147ca6 Health
[2025-12-31T23:35:46.182Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-31T23:35:46.187Z] [BOT ERROR] (node:2305) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-31T23:35:46.349Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #💻・tech-jobs
  ✅ Industry: Early Career Software Engineer @ ORG_2b147ca6 Health
[2025-12-31T23:35:48.017Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-31T23:35:49.518Z] [BOT] 💾 Marked as posted: Early Career Software Engineer @ ORG_2b147ca6 Health (instance #1)
[2025-12-31T23:35:49.519Z] [BOT] 💾 BEFORE ARCHIVING: 54 jobs in database
[2025-12-31T23:35:49.519Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-31T23:35:49.530Z] [BOT] 📦 Archived 2 jobs to 2025-12.json (2 total in archive)
[2025-12-31T23:35:49.530Z] [BOT] ✅ Archiving complete: 2 archived, 52 active
[2025-12-31T23:35:49.533Z] [BOT] 💾 Saved posted_jobs.json: 52 active jobs
[2025-12-31T23:35:49.533Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-31T23:35:49.533Z] [BOT] 📍 [ROUTING] "Associate Software Engineer – College Grad 2026" @ ORG_06fec48a Health
[2025-12-31T23:35:49.534Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-31T23:35:49.729Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer – College Grad 2026 @ ORG_06fec48a Health in #💻・tech-jobs
[2025-12-31T23:35:49.730Z] [BOT] ✅ Industry: Associate Software Engineer – College Grad 2026 @ ORG_06fec48a Health
[2025-12-31T23:35:51.485Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer – College Grad 2026 @ ORG_06fec48a Health in #🦢・los-angeles
[2025-12-31T23:35:51.486Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-31T23:35:52.987Z] [BOT] 💾 Marked as posted: Associate Software Engineer – College Grad 2026 @ ORG_06fec48a Health (instance #1)
[2025-12-31T23:35:52.987Z] [BOT] 💾 BEFORE ARCHIVING: 53 jobs in database
✅ No jobs to archive (all 53 jobs within 7-day window)
[2025-12-31T23:35:52.989Z] [BOT] 💾 Saved posted_jobs.json: 53 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-31T23:35:55.989Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-31T23:35:55.990Z] [BOT] ⏭️  Skipping duplicate: JID_b9af3f81 (posted within 7 days)
⏭️  Skipping duplicate: JID_7689d913 (posted within 7 days)
[2025-12-31T23:35:55.990Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-31T23:35:55.991Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2025-12-31T23:35:55.991Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-31T23:35:56.033Z] [BOT] 📂 Loaded 1120 existing routing entries
[2025-12-31T23:35:56.080Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-31T23:35:56.080Z] [BOT] Total entries: 1122
   Timestamp: 2025-12-31T23:35:56.074Z
[2025-12-31T23:35:56.080Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_28858bfe.jsonl
[2025-12-31T23:35:56.080Z] [BOT] Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2025-12-31T23:35:56.080Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-31T23:35:56.081Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 2 posts
     2. #🌉・san-francisco: 1 posts
     3. #🦢・los-angeles: 1 posts
[STATS] Channel stats saved
[2025-12-31T23:35:58.093Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2305) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*