# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T17:37:19.407Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T17:37:03.645Z] ========================================
[2026-01-01T17:37:03.647Z] Discord Bot Execution Log
[2026-01-01T17:37:03.647Z] Environment: GitHub Actions
[2026-01-01T17:37:03.647Z] Node Version: v20.19.6
[2026-01-01T17:37:03.647Z] ========================================
[2026-01-01T17:37:03.648Z] Environment Variables Check:
[2026-01-01T17:37:03.648Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T17:37:03.648Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T17:37:03.648Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T17:37:03.648Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T17:37:03.648Z] 
Multi-Channel Configuration:
[2026-01-01T17:37:03.648Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T17:37:03.648Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T17:37:03.648Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T17:37:03.648Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T17:37:03.648Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T17:37:03.648Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T17:37:03.649Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T17:37:03.649Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T17:37:03.649Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T17:37:03.649Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T17:37:03.649Z] 
Data Files Check:
[2026-01-01T17:37:03.649Z] .github/data/new_jobs.json: ✅ Exists (2 items, 9082 bytes)
[2026-01-01T17:37:03.650Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 42219 bytes)
[2026-01-01T17:37:03.650Z] 
========================================
[2026-01-01T17:37:03.650Z] Starting Enhanced Discord Bot...
[2026-01-01T17:37:03.650Z] ========================================
[2026-01-01T17:37:04.155Z] [BOT] ✅ Loaded V2 database: 70 jobs
[2026-01-01T17:37:05.023Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T17:37:05.023Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T17:37:05.023Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T17:37:05.023Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2026-01-01T17:37:05.066Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-01T17:37:05.111Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 35
[2026-01-01T17:37:05.112Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2026-01-01T17:37:05.112Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-01T17:37:05.113Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-01T17:37:05.113Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-01T17:37:05.113Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T17:37:05.117Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-01T17:37:05.118Z] [BOT] 📍 [ROUTING] "Analyst – Risk & Quality Reporting - Remote TX" @ ORG_ce876271ina Healthcare
[2026-01-01T17:37:05.118Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-01T17:37:05.124Z] [BOT ERROR] (node:2337) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T17:37:05.309Z] [BOT] ✅ Created forum post: 🏢 Analyst – Risk & Quality Reporting - Remote TX @ ORG_ce876271ina Healthcare in #🩺・healthcare-jobs
[2026-01-01T17:37:05.309Z] [BOT] ✅ Industry: Analyst – Risk & Quality Reporting - Remote TX @ ORG_ce876271ina Healthcare
[2026-01-01T17:37:06.810Z] [BOT] 💾 Marked as posted: Analyst – Risk & Quality Reporting - Remote TX @ ORG_ce876271ina Healthcare (instance #1)
[2026-01-01T17:37:06.811Z] [BOT] 💾 BEFORE ARCHIVING: 71 jobs in database
[2026-01-01T17:37:06.811Z] [BOT] ✅ No jobs to archive (all 71 jobs within 7-day window)
[2026-01-01T17:37:06.820Z] [BOT] 💾 Saved posted_jobs.json: 71 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-01T17:37:09.821Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-01T17:37:09.821Z] [BOT] 📍 [ROUTING] "Fluid Properties Technologist" @ ORG_6adce842
[2026-01-01T17:37:09.822Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-01T17:37:10.190Z] [BOT] ✅ Created forum post: 🏢 Fluid Properties Technologist @ ORG_6adce842 in #💰・finance-jobs
[2026-01-01T17:37:10.190Z] [BOT] ✅ Industry: Fluid Properties Technologist @ ORG_6adce842
[2026-01-01T17:37:11.979Z] [BOT] ✅ Created forum post: 🏢 Fluid Properties Technologist @ ORG_6adce842 in #🤠・austin
[2026-01-01T17:37:11.980Z] [BOT] ✅ Location: 🤠・austin
[2026-01-01T17:37:13.480Z] [BOT] 💾 Marked as posted: Fluid Properties Technologist @ ORG_6adce842 (instance #1)
[2026-01-01T17:37:13.481Z] [BOT] 💾 BEFORE ARCHIVING: 72 jobs in database
✅ No jobs to archive (all 72 jobs within 7-day window)
[2026-01-01T17:37:13.482Z] [BOT] 💾 Saved posted_jobs.json: 72 active jobs
[2026-01-01T17:37:13.482Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T17:37:16.482Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-01T17:37:16.483Z] [BOT] ⏭️  Skipping duplicate: JID_bb87ed56-cx_1-job-2035352 (posted within 7 days)
[2026-01-01T17:37:16.483Z] [BOT] ⏭️  Skipping duplicate: JID_d8f788f3 (posted within 7 days)
[2026-01-01T17:37:16.483Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-01T17:37:16.484Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
[2026-01-01T17:37:16.484Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-01T17:37:16.527Z] [BOT] 📂 Loaded 1144 existing routing entries
[2026-01-01T17:37:16.573Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-01T17:37:16.573Z] [BOT] Total entries: 1146
   Timestamp: 2026-01-01T17:37:16.567Z
[2026-01-01T17:37:16.574Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
   Total attempts: 3
   Successful: 3
   Failed: 0
   Skipped: 0
[2026-01-01T17:37:16.574Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-01T17:37:16.574Z] [BOT] Last cleanup: Never
[2026-01-01T17:37:16.574Z] [BOT] Total posts: 3
   Channels used: 3
   Top channels:
     1. #🩺・healthcare-jobs: 1 posts
     2. #💰・finance-jobs: 1 posts
[2026-01-01T17:37:16.574Z] [BOT] 3. #🤠・austin: 1 posts
[2026-01-01T17:37:16.574Z] [BOT] [STATS] Channel stats saved
[2026-01-01T17:37:18.587Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2337) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*