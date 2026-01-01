# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T18:04:52.446Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T18:04:34.523Z] ========================================
[2026-01-01T18:04:34.525Z] Discord Bot Execution Log
[2026-01-01T18:04:34.525Z] Environment: GitHub Actions
[2026-01-01T18:04:34.525Z] Node Version: v20.19.6
[2026-01-01T18:04:34.525Z] ========================================
[2026-01-01T18:04:34.525Z] Environment Variables Check:
[2026-01-01T18:04:34.525Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T18:04:34.525Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T18:04:34.526Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T18:04:34.526Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T18:04:34.526Z] 
Multi-Channel Configuration:
[2026-01-01T18:04:34.526Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T18:04:34.526Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T18:04:34.526Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T18:04:34.526Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T18:04:34.526Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T18:04:34.526Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T18:04:34.526Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T18:04:34.526Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T18:04:34.527Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T18:04:34.527Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T18:04:34.527Z] 
Data Files Check:
[2026-01-01T18:04:34.527Z] .github/data/new_jobs.json: ✅ Exists (2 items, 13407 bytes)
[2026-01-01T18:04:34.528Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 43467 bytes)
[2026-01-01T18:04:34.528Z] 
========================================
[2026-01-01T18:04:34.528Z] Starting Enhanced Discord Bot...
[2026-01-01T18:04:34.528Z] ========================================
[2026-01-01T18:04:35.066Z] [BOT] ✅ Loaded V2 database: 72 jobs
[2026-01-01T18:04:35.666Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T18:04:35.667Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T18:04:35.667Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T18:04:35.667Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2026-01-01T18:04:35.715Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2026-01-01T18:04:35.760Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 36
[2026-01-01T18:04:35.762Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2026-01-01T18:04:35.762Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-01T18:04:35.762Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-01T18:04:35.762Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-01T18:04:35.763Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T18:04:35.768Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-01T18:04:35.769Z] [BOT] 📍 [ROUTING] "Consulting Associate - EHS Management Information Systems" @ ORG_d41a2092
[2026-01-01T18:04:35.769Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-01T18:04:35.773Z] [BOT ERROR] (node:2542) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T18:04:36.253Z] [BOT] ✅ Created forum post: 🏢 Consulting Associate - EHS Management Information Systems @ ORG_d41a2092 in #📣・marketing-jobs
[2026-01-01T18:04:36.253Z] [BOT] ✅ Industry: Consulting Associate - EHS Management Information Systems @ ORG_d41a2092
[2026-01-01T18:04:38.151Z] [BOT] ✅ Created forum post: 🏢 Consulting Associate - EHS Management Information Systems @ ORG_d41a2092 in #🤠・austin
[2026-01-01T18:04:38.151Z] [BOT] ✅ Location: 🤠・austin
[2026-01-01T18:04:39.652Z] [BOT] 💾 Marked as posted: Consulting Associate - EHS Management Information Systems @ ORG_d41a2092 (instance #1)
[2026-01-01T18:04:39.652Z] [BOT] 💾 BEFORE ARCHIVING: 73 jobs in database
[2026-01-01T18:04:39.653Z] [BOT] ✅ No jobs to archive (all 73 jobs within 7-day window)
[2026-01-01T18:04:39.658Z] [BOT] 💾 Saved posted_jobs.json: 73 active jobs
[2026-01-01T18:04:39.658Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T18:04:42.659Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-01T18:04:42.659Z] [BOT] 📍 [ROUTING] "Associate Analytics Engineer" @ ORG_b0eaa6e6
[2026-01-01T18:04:42.659Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-01T18:04:42.971Z] [BOT] ✅ Created forum post: 🏢 Associate Analytics Engineer @ ORG_b0eaa6e6 in #📈・JID_fb739488
[2026-01-01T18:04:42.971Z] [BOT] ✅ Industry: Associate Analytics Engineer @ ORG_b0eaa6e6
[2026-01-01T18:04:44.711Z] [BOT] ✅ Created forum post: 🏢 Associate Analytics Engineer @ ORG_b0eaa6e6 in #🗽・new-york
[2026-01-01T18:04:44.712Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-01T18:04:46.213Z] [BOT] 💾 Marked as posted: Associate Analytics Engineer @ ORG_b0eaa6e6 (instance #1)
[2026-01-01T18:04:46.213Z] [BOT] 💾 BEFORE ARCHIVING: 74 jobs in database
✅ No jobs to archive (all 74 jobs within 7-day window)
[2026-01-01T18:04:46.215Z] [BOT] 💾 Saved posted_jobs.json: 74 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-01T18:04:49.216Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-01T18:04:49.217Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_84208682-_r00025970 (posted within 7 days)
[2026-01-01T18:04:49.217Z] [BOT] ⏭️  Skipping duplicate: JID_91286fee-engineer_r-005112-1 (posted within 7 days)
[2026-01-01T18:04:49.217Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-01T18:04:49.218Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-01T18:04:49.262Z] [BOT] 📂 Loaded 1146 existing routing entries
[2026-01-01T18:04:49.310Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-01T18:04:49.310Z] [BOT] Total entries: 1148
   Timestamp: 2026-01-01T18:04:49.304Z
[2026-01-01T18:04:49.311Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
   Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2026-01-01T18:04:49.311Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #📣・marketing-jobs: 1 posts
     2. #🤠・austin: 1 posts
     3. #📈・JID_fb739488: 1 posts
     4. #🗽・new-york: 1 posts
[2026-01-01T18:04:49.311Z] [BOT] [STATS] Channel stats saved
[2026-01-01T18:04:51.322Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2542) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*