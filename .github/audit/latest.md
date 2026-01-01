# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T12:05:01.626Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T12:04:44.581Z] ========================================
[2026-01-01T12:04:44.583Z] Discord Bot Execution Log
[2026-01-01T12:04:44.583Z] Environment: GitHub Actions
[2026-01-01T12:04:44.583Z] Node Version: v20.19.6
[2026-01-01T12:04:44.584Z] ========================================
[2026-01-01T12:04:44.584Z] Environment Variables Check:
[2026-01-01T12:04:44.584Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T12:04:44.584Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T12:04:44.584Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T12:04:44.584Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T12:04:44.584Z] 
Multi-Channel Configuration:
[2026-01-01T12:04:44.584Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T12:04:44.584Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T12:04:44.584Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T12:04:44.584Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T12:04:44.584Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T12:04:44.585Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T12:04:44.585Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T12:04:44.585Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T12:04:44.585Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T12:04:44.585Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T12:04:44.585Z] 
Data Files Check:
[2026-01-01T12:04:44.585Z] .github/data/new_jobs.json: ✅ Exists (2 items, 10047 bytes)
[2026-01-01T12:04:44.586Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 32566 bytes)
[2026-01-01T12:04:44.586Z] 
========================================
[2026-01-01T12:04:44.586Z] Starting Enhanced Discord Bot...
[2026-01-01T12:04:44.586Z] ========================================
[2026-01-01T12:04:45.095Z] [BOT] ✅ Loaded V2 database: 55 jobs
[2026-01-01T12:04:45.611Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T12:04:45.611Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T12:04:45.612Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T12:04:45.613Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2026-01-01T12:04:45.655Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2026-01-01T12:04:45.699Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 34
[2026-01-01T12:04:45.700Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2026-01-01T12:04:45.700Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-01T12:04:45.700Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-01T12:04:45.701Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-01T12:04:45.701Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T12:04:45.704Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-01T12:04:45.705Z] [BOT] 📍 [ROUTING] "FE Materials Business Intelligence Analyst" @ ORG_23f4e0fc Technology
[2026-01-01T12:04:45.705Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-01T12:04:45.709Z] [BOT ERROR] (node:2522) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T12:04:45.840Z] [BOT] ✅ Created forum post: 🏢 FE Materials Business Intelligence Analyst @ ORG_23f4e0fc Technology in #📈・JID_fb739488
[2026-01-01T12:04:45.841Z] [BOT] ✅ Industry: FE Materials Business Intelligence Analyst @ ORG_23f4e0fc Technology
[2026-01-01T12:04:47.476Z] [BOT] ✅ Created forum post: 🏢 FE Materials Business Intelligence Analyst @ ORG_23f4e0fc Technology in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-01T12:04:48.977Z] [BOT] 💾 Marked as posted: FE Materials Business Intelligence Analyst @ ORG_23f4e0fc Technology (instance #1)
[2026-01-01T12:04:48.978Z] [BOT] 💾 BEFORE ARCHIVING: 56 jobs in database
[2026-01-01T12:04:48.978Z] [BOT] ✅ No jobs to archive (all 56 jobs within 7-day window)
[2026-01-01T12:04:48.983Z] [BOT] 💾 Saved posted_jobs.json: 56 active jobs
[2026-01-01T12:04:48.983Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T12:04:51.984Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-01T12:04:51.985Z] [BOT] 📍 [ROUTING] "Digital Services Coordinator 1" @ ORG_da52cfea Children's
   Category: MARKETING (matched: "marketing")
[2026-01-01T12:04:51.985Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-01T12:04:52.197Z] [BOT] ✅ Created forum post: 🏢 Digital Services Coordinator 1 @ ORG_da52cfea Children's in #📣・marketing-jobs
[2026-01-01T12:04:52.197Z] [BOT] ✅ Industry: Digital Services Coordinator 1 @ ORG_da52cfea Children's
[2026-01-01T12:04:54.444Z] [BOT] ✅ Created forum post: 🏢 Digital Services Coordinator 1 @ ORG_da52cfea Children's in #💻・remote-usa
[2026-01-01T12:04:54.444Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-01T12:04:55.945Z] [BOT] 💾 Marked as posted: Digital Services Coordinator 1 @ ORG_da52cfea Children's (instance #1)
[2026-01-01T12:04:55.945Z] [BOT] 💾 BEFORE ARCHIVING: 57 jobs in database
✅ No jobs to archive (all 57 jobs within 7-day window)
[2026-01-01T12:04:55.951Z] [BOT] 💾 Saved posted_jobs.json: 57 active jobs
[2026-01-01T12:04:55.951Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T12:04:58.952Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-01T12:04:58.952Z] [BOT] ⏭️  Skipping duplicate: JID_ee288d65-analyst_jr85030 (posted within 7 days)
[2026-01-01T12:04:58.952Z] [BOT] ⏭️  Skipping duplicate: JID_fbc97492-external_career_site-JID_4ebae7a0-i_r0022409 (posted within 7 days)
[2026-01-01T12:04:58.953Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-01T12:04:58.953Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-01-01T12:04:58.953Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-01T12:04:58.996Z] [BOT] 📂 Loaded 1129 existing routing entries
[2026-01-01T12:04:59.042Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 1131
   Timestamp: 2026-01-01T12:04:59.037Z
[2026-01-01T12:04:59.043Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
[2026-01-01T12:04:59.043Z] [BOT] Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2026-01-01T12:04:59.043Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-01T12:04:59.043Z] [BOT] Total posts: 4
   Channels used: 3
   Top channels:
     1. #💻・remote-usa: 2 posts
     2. #📈・JID_fb739488: 1 posts
     3. #📣・marketing-jobs: 1 posts
[2026-01-01T12:04:59.044Z] [BOT] [STATS] Channel stats saved
[2026-01-01T12:05:01.055Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2522) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*