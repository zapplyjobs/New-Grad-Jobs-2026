# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T05:53:15.150Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T05:53:01.942Z] ========================================
[2026-01-03T05:53:01.944Z] Discord Bot Execution Log
[2026-01-03T05:53:01.944Z] Environment: GitHub Actions
[2026-01-03T05:53:01.944Z] Node Version: v20.19.6
[2026-01-03T05:53:01.944Z] ========================================
[2026-01-03T05:53:01.944Z] Environment Variables Check:
[2026-01-03T05:53:01.944Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T05:53:01.945Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T05:53:01.945Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T05:53:01.945Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T05:53:01.945Z] 
Multi-Channel Configuration:
[2026-01-03T05:53:01.945Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T05:53:01.945Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T05:53:01.945Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T05:53:01.945Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T05:53:01.945Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T05:53:01.945Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T05:53:01.945Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T05:53:01.945Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T05:53:01.946Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T05:53:01.946Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T05:53:01.946Z] 
Data Files Check:
[2026-01-03T05:53:01.947Z] .github/data/new_jobs.json: ✅ Exists (10 items, 189746 bytes)
[2026-01-03T05:53:01.948Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 113245 bytes)
[2026-01-03T05:53:01.948Z] 
========================================
[2026-01-03T05:53:01.948Z] Starting Enhanced Discord Bot...
[2026-01-03T05:53:01.948Z] ========================================
[2026-01-03T05:53:02.463Z] [BOT] ✅ Loaded V2 database: 195 jobs
[2026-01-03T05:53:03.044Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T05:53:03.044Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T05:53:03.044Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T05:53:03.045Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T05:53:03.163Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 115
[2026-01-03T05:53:03.164Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T05:53:03.165Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T05:53:03.165Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T05:53:03.165Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-01-03T05:53:03.165Z] [BOT] (7 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-03T05:53:03.166Z] [BOT] - Account Development Representative (New Grad) @ samsara: atlanta, phoenix, arizona
   - Account Executive, Commercial @ samsara: denver, columbus, atlanta, boston, seattle, san diego, salt lake
⏸️ Limiting to 10 jobs this run, 7 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T05:53:03.169Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T05:53:03.170Z] [BOT] 📍 [ROUTING] "Account Development Representative Intern " @ samsara
[2026-01-03T05:53:03.170Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T05:53:03.175Z] [BOT ERROR] (node:2400) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T05:53:03.463Z] [BOT] ✅ Created forum post: 🏢 Account Development Representative Intern  @ samsara in #💲・sales-jobs
[2026-01-03T05:53:03.463Z] [BOT] ✅ Industry: Account Development Representative Intern  @ samsara
[2026-01-03T05:53:04.966Z] [BOT] 💾 Marked as posted: Account Development Representative Intern  @ samsara (instance #1)
[2026-01-03T05:53:04.966Z] [BOT] 💾 BEFORE ARCHIVING: 196 jobs in database
[2026-01-03T05:53:04.967Z] [BOT] ✅ No jobs to archive (all 196 jobs within 7-day window)
[2026-01-03T05:53:04.973Z] [BOT] 💾 Saved posted_jobs.json: 196 active jobs
[2026-01-03T05:53:04.973Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T05:53:04.973Z] [BOT] 📍 [ROUTING] "Account Development Representative (New Grad)" @ samsara
[2026-01-03T05:53:04.973Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T05:53:05.321Z] [BOT] ✅ Created forum post: 🏢 Account Development Representative (New Grad) @ samsara in #💲・sales-jobs
[2026-01-03T05:53:05.321Z] [BOT] ✅ Industry: Account Development Representative (New Grad) @ samsara
[2026-01-03T05:53:06.821Z] [BOT] 💾 Marked as posted: Account Development Representative (New Grad) @ samsara (instance #1)
[2026-01-03T05:53:06.821Z] [BOT] 💾 BEFORE ARCHIVING: 197 jobs in database
✅ No jobs to archive (all 197 jobs within 7-day window)
[2026-01-03T05:53:06.824Z] [BOT] 💾 Saved posted_jobs.json: 197 active jobs
[2026-01-03T05:53:06.824Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T05:53:06.824Z] [BOT] 💾 Marked as posted: Account Development Representative (New Grad)  @ samsara (instance #1)
[2026-01-03T05:53:06.824Z] [BOT] 💾 BEFORE ARCHIVING: 198 jobs in database
[2026-01-03T05:53:06.824Z] [BOT] ✅ No jobs to archive (all 198 jobs within 7-day window)
[2026-01-03T05:53:06.827Z] [BOT] 💾 Saved posted_jobs.json: 198 active jobs
[2026-01-03T05:53:06.827Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T05:53:06.828Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial" @ samsara
[2026-01-03T05:53:06.828Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T05:53:07.047Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Commercial @ samsara in #💲・sales-jobs
[2026-01-03T05:53:07.048Z] [BOT] ✅ Industry: Account Executive, Commercial @ samsara
[2026-01-03T05:53:08.549Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
[2026-01-03T05:53:08.550Z] [BOT] 💾 BEFORE ARCHIVING: 199 jobs in database
[2026-01-03T05:53:08.550Z] [BOT] ✅ No jobs to archive (all 199 jobs within 7-day window)
[2026-01-03T05:53:08.552Z] [BOT] 💾 Saved posted_jobs.json: 199 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T05:53:08.552Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
[2026-01-03T05:53:08.553Z] [BOT] 💾 BEFORE ARCHIVING: 200 jobs in database
[2026-01-03T05:53:08.553Z] [BOT] ✅ No jobs to archive (all 200 jobs within 7-day window)
[2026-01-03T05:53:08.555Z] [BOT] 💾 Saved posted_jobs.json: 200 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T05:53:08.555Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
💾 BEFORE ARCHIVING: 201 jobs in database
[2026-01-03T05:53:08.555Z] [BOT] ✅ No jobs to archive (all 201 jobs within 7-day window)
[2026-01-03T05:53:08.557Z] [BOT] 💾 Saved posted_jobs.json: 201 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T05:53:08.557Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
💾 BEFORE ARCHIVING: 202 jobs in database
[2026-01-03T05:53:08.557Z] [BOT] ✅ No jobs to archive (all 202 jobs within 7-day window)
[2026-01-03T05:53:08.559Z] [BOT] 💾 Saved posted_jobs.json: 202 active jobs
[2026-01-03T05:53:08.559Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
💾 BEFORE ARCHIVING: 203 jobs in database
[2026-01-03T05:53:08.560Z] [BOT] ✅ No jobs to archive (all 203 jobs within 7-day window)
[2026-01-03T05:53:08.562Z] [BOT] 💾 Saved posted_jobs.json: 203 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T05:53:08.562Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
💾 BEFORE ARCHIVING: 204 jobs in database
[2026-01-03T05:53:08.562Z] [BOT] ✅ No jobs to archive (all 204 jobs within 7-day window)
[2026-01-03T05:53:08.564Z] [BOT] 💾 Saved posted_jobs.json: 204 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T05:53:08.564Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
💾 BEFORE ARCHIVING: 205 jobs in database
[2026-01-03T05:53:08.564Z] [BOT] ✅ No jobs to archive (all 205 jobs within 7-day window)
[2026-01-03T05:53:08.566Z] [BOT] 💾 Saved posted_jobs.json: 205 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T05:53:11.567Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-03T05:53:11.567Z] [BOT] ⏭️  Skipping duplicate: JID_e12e4753 (posted within 7 days)
[2026-01-03T05:53:11.567Z] [BOT] ⏭️  Skipping duplicate: JID_1b0a9383 (posted within 7 days)
⏭️  Skipping duplicate: JID_490b9e8b (posted within 7 days)
[2026-01-03T05:53:11.658Z] [BOT] ✅ Loaded pending queue: 1095 total (1075 pending, 20 enriched, 0 posted)
[2026-01-03T05:53:11.784Z] [BOT] ✅ Saved pending queue: 1095 total (1075 pending, 17 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2026-01-03T05:53:11.784Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T05:53:11.830Z] [BOT] 📂 Loaded 1264 existing routing entries
[2026-01-03T05:53:11.875Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2026-01-03T05:53:11.875Z] [BOT] Total entries: 1267
   Timestamp: 2026-01-03T05:53:11.869Z
[2026-01-03T05:53:11.875Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T05:53:11.876Z] [BOT] Total attempts: 3
   Successful: 3
   Failed: 0
   Skipped: 0
[2026-01-03T05:53:11.876Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 3
   Channels used: 1
   Top channels:
[2026-01-03T05:53:11.876Z] [BOT] 1. #💲・sales-jobs: 3 posts
[2026-01-03T05:53:11.876Z] [BOT] [STATS] Channel stats saved
[2026-01-03T05:53:13.899Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2400) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*