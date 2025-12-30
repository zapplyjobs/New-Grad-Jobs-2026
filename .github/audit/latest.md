# Discord Bot Execution Audit
**Timestamp:** 2025-12-30T17:38:26.800Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-30T17:38:05.131Z] ========================================
[2025-12-30T17:38:05.133Z] Discord Bot Execution Log
[2025-12-30T17:38:05.133Z] Environment: GitHub Actions
[2025-12-30T17:38:05.134Z] Node Version: v20.19.6
[2025-12-30T17:38:05.134Z] ========================================
[2025-12-30T17:38:05.134Z] Environment Variables Check:
[2025-12-30T17:38:05.134Z] DISCORD_TOKEN: ✅ Set
[2025-12-30T17:38:05.134Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-30T17:38:05.134Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-30T17:38:05.134Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-30T17:38:05.134Z] 
Multi-Channel Configuration:
[2025-12-30T17:38:05.134Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-30T17:38:05.134Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-30T17:38:05.134Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-30T17:38:05.134Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-30T17:38:05.135Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-30T17:38:05.135Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-30T17:38:05.135Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-30T17:38:05.135Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-30T17:38:05.135Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-30T17:38:05.135Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-30T17:38:05.135Z] 
Data Files Check:
[2025-12-30T17:38:05.135Z] .github/data/new_jobs.json: ✅ Exists (3 items, 15715 bytes)
[2025-12-30T17:38:05.136Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 43702 bytes)
[2025-12-30T17:38:05.136Z] 
========================================
[2025-12-30T17:38:05.136Z] Starting Enhanced Discord Bot...
[2025-12-30T17:38:05.136Z] ========================================
[2025-12-30T17:38:05.687Z] [BOT] ✅ Loaded V2 database: 72 jobs
[2025-12-30T17:38:06.135Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-30T17:38:06.135Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-30T17:38:06.136Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-30T17:38:06.136Z] [BOT] 📦 Exporting 3 jobs to encrypted JSON...
[2025-12-30T17:38:06.235Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 49
[2025-12-30T17:38:06.236Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2025-12-30T17:38:06.236Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2025-12-30T17:38:06.237Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2025-12-30T17:38:06.237Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2025-12-30T17:38:06.237Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-30T17:38:06.240Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-30T17:38:06.241Z] [BOT] 📍 [ROUTING] "Business Intelligence Engineer 1" @ ORG_441f2234
[2025-12-30T17:38:06.241Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-30T17:38:06.246Z] [BOT ERROR] (node:2632) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-30T17:38:06.507Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Engineer 1 @ ORG_441f2234 in #📈・JID_fb739488
[2025-12-30T17:38:06.508Z] [BOT] ✅ Industry: Business Intelligence Engineer 1 @ ORG_441f2234
[2025-12-30T17:38:08.010Z] [BOT] 💾 Marked as posted: Business Intelligence Engineer 1 @ ORG_441f2234 (instance #1)
[2025-12-30T17:38:08.010Z] [BOT] 💾 BEFORE ARCHIVING: 73 jobs in database
[2025-12-30T17:38:08.011Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-30T17:38:08.016Z] [BOT] 📦 Archived 5 jobs to 2025-12.json (5 total in archive)
[2025-12-30T17:38:08.016Z] [BOT] ✅ Archiving complete: 5 archived, 68 active
[2025-12-30T17:38:08.018Z] [BOT] 💾 Saved posted_jobs.json: 68 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-30T17:38:11.018Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-30T17:38:11.019Z] [BOT] 📍 [ROUTING] "C-UAS Test Analyst" @ ORG_434be781
[2025-12-30T17:38:11.019Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-30T17:38:11.191Z] [BOT] ✅ Created forum post: 🏢 C-UAS Test Analyst @ ORG_434be781 in #📣・marketing-jobs
  ✅ Industry: C-UAS Test Analyst @ ORG_434be781
[2025-12-30T17:38:13.053Z] [BOT] ✅ Created forum post: 🏢 C-UAS Test Analyst @ ORG_434be781 in #💻・remote-usa
[2025-12-30T17:38:13.054Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-30T17:38:14.554Z] [BOT] 💾 Marked as posted: C-UAS Test Analyst @ ORG_434be781 (instance #1)
[2025-12-30T17:38:14.555Z] [BOT] 💾 BEFORE ARCHIVING: 69 jobs in database
✅ No jobs to archive (all 69 jobs within 7-day window)
[2025-12-30T17:38:14.556Z] [BOT] 💾 Saved posted_jobs.json: 69 active jobs
[2025-12-30T17:38:14.556Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-30T17:38:17.557Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-30T17:38:17.558Z] [BOT] 📍 [ROUTING] "Applications Programmer 1" @ ORG_1954b120
[2025-12-30T17:38:17.559Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-30T17:38:17.750Z] [BOT] ✅ Created forum post: 🏢 Applications Programmer 1 @ ORG_1954b120 in #💻・tech-jobs
[2025-12-30T17:38:17.750Z] [BOT] ✅ Industry: Applications Programmer 1 @ ORG_1954b120
[2025-12-30T17:38:19.579Z] [BOT] ✅ Created forum post: 🏢 Applications Programmer 1 @ ORG_1954b120 in #💻・remote-usa
[2025-12-30T17:38:19.579Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-30T17:38:21.080Z] [BOT] 💾 Marked as posted: Applications Programmer 1 @ ORG_1954b120 (instance #1)
[2025-12-30T17:38:21.080Z] [BOT] 💾 BEFORE ARCHIVING: 70 jobs in database
✅ No jobs to archive (all 70 jobs within 7-day window)
[2025-12-30T17:38:21.082Z] [BOT] 💾 Saved posted_jobs.json: 70 active jobs
[2025-12-30T17:38:21.082Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-30T17:38:24.083Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-12-30T17:38:24.083Z] [BOT] ⏭️  Skipping duplicate: JID_6f58f2a4-centene_external-JID_77eda0e9-i_1625414 (posted within 7 days)
⏭️  Skipping duplicate: JID_293bb207-analyst_r175918-2 (posted within 7 days)
[2025-12-30T17:38:24.083Z] [BOT] ⏭️  Skipping duplicate: JID_5508f92c-i_313830 (posted within 7 days)
[2025-12-30T17:38:24.083Z] [BOT] ✅ Loaded pending queue: 3 total (0 pending, 3 enriched, 0 posted)
[2025-12-30T17:38:24.084Z] [BOT] ✅ Saved pending queue: 3 total (0 pending, 0 enriched, 3 posted)
[2025-12-30T17:38:24.084Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-30T17:38:24.129Z] [BOT] 📂 Loaded 1107 existing routing entries
[2025-12-30T17:38:24.178Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 1110
[2025-12-30T17:38:24.178Z] [BOT] Timestamp: 2025-12-30T17:38:24.172Z
[2025-12-30T17:38:24.178Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c55b425b.jsonl
   Total attempts: 5
   Successful: 5
   Failed: 0
   Skipped: 0
[2025-12-30T17:38:24.178Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2025-12-30T17:38:24.179Z] [BOT] Total posts: 5
   Channels used: 4
   Top channels:
     1. #💻・remote-usa: 2 posts
     2. #📈・JID_fb739488: 1 posts
     3. #📣・marketing-jobs: 1 posts
     4. #💻・tech-jobs: 1 posts
[2025-12-30T17:38:24.179Z] [BOT] [STATS] Channel stats saved
[2025-12-30T17:38:26.191Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2632) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*