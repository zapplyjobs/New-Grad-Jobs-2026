# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T06:59:41.052Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T06:59:26.142Z] ========================================
[2026-01-03T06:59:26.145Z] Discord Bot Execution Log
[2026-01-03T06:59:26.145Z] Environment: GitHub Actions
[2026-01-03T06:59:26.145Z] Node Version: v20.19.6
[2026-01-03T06:59:26.145Z] ========================================
[2026-01-03T06:59:26.145Z] Environment Variables Check:
[2026-01-03T06:59:26.145Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T06:59:26.145Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T06:59:26.145Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T06:59:26.145Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T06:59:26.145Z] 
Multi-Channel Configuration:
[2026-01-03T06:59:26.145Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T06:59:26.146Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T06:59:26.146Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T06:59:26.146Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T06:59:26.146Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T06:59:26.146Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T06:59:26.146Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T06:59:26.146Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T06:59:26.146Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T06:59:26.146Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T06:59:26.146Z] 
Data Files Check:
[2026-01-03T06:59:26.148Z] .github/data/new_jobs.json: ✅ Exists (10 items, 190614 bytes)
[2026-01-03T06:59:26.149Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 133183 bytes)
[2026-01-03T06:59:26.149Z] 
========================================
[2026-01-03T06:59:26.149Z] Starting Enhanced Discord Bot...
[2026-01-03T06:59:26.149Z] ========================================
[2026-01-03T06:59:26.687Z] [BOT] ✅ Loaded V2 database: 235 jobs
[2026-01-03T06:59:27.292Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T06:59:27.293Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T06:59:27.293Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T06:59:27.294Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T06:59:27.430Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 152
[2026-01-03T06:59:27.432Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T06:59:27.432Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T06:59:27.432Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T06:59:27.433Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-01-03T06:59:27.433Z] [BOT] (7 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-03T06:59:27.433Z] [BOT] - Mid-Market Account Executive - PubSec @ samsara: louisville, charleston, dallas, san antonio, baltimore, denver, salt lake
⏸️ Limiting to 10 jobs this run, 7 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T06:59:27.436Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T06:59:27.437Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive - PubSec" @ samsara
[2026-01-03T06:59:27.437Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T06:59:27.442Z] [BOT ERROR] (node:2422) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T06:59:27.722Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Account Executive - PubSec @ samsara in #💲・sales-jobs
[2026-01-03T06:59:27.722Z] [BOT] ✅ Industry: Mid-Market Account Executive - PubSec @ samsara
[2026-01-03T06:59:29.225Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
[2026-01-03T06:59:29.225Z] [BOT] 💾 BEFORE ARCHIVING: 236 jobs in database
[2026-01-03T06:59:29.225Z] [BOT] ✅ No jobs to archive (all 236 jobs within 7-day window)
[2026-01-03T06:59:29.232Z] [BOT] 💾 Saved posted_jobs.json: 236 active jobs
[2026-01-03T06:59:29.232Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
💾 BEFORE ARCHIVING: 237 jobs in database
[2026-01-03T06:59:29.232Z] [BOT] ✅ No jobs to archive (all 237 jobs within 7-day window)
[2026-01-03T06:59:29.236Z] [BOT] 💾 Saved posted_jobs.json: 237 active jobs
[2026-01-03T06:59:29.236Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
💾 BEFORE ARCHIVING: 238 jobs in database
[2026-01-03T06:59:29.236Z] [BOT] ✅ No jobs to archive (all 238 jobs within 7-day window)
[2026-01-03T06:59:29.238Z] [BOT] 💾 Saved posted_jobs.json: 238 active jobs
[2026-01-03T06:59:29.238Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
[2026-01-03T06:59:29.238Z] [BOT] 💾 BEFORE ARCHIVING: 239 jobs in database
[2026-01-03T06:59:29.239Z] [BOT] ✅ No jobs to archive (all 239 jobs within 7-day window)
[2026-01-03T06:59:29.241Z] [BOT] 💾 Saved posted_jobs.json: 239 active jobs
[2026-01-03T06:59:29.241Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
💾 BEFORE ARCHIVING: 240 jobs in database
[2026-01-03T06:59:29.241Z] [BOT] ✅ No jobs to archive (all 240 jobs within 7-day window)
[2026-01-03T06:59:29.243Z] [BOT] 💾 Saved posted_jobs.json: 240 active jobs
[2026-01-03T06:59:29.244Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
[2026-01-03T06:59:29.244Z] [BOT] 💾 BEFORE ARCHIVING: 241 jobs in database
[2026-01-03T06:59:29.244Z] [BOT] ✅ No jobs to archive (all 241 jobs within 7-day window)
[2026-01-03T06:59:29.246Z] [BOT] 💾 Saved posted_jobs.json: 241 active jobs
[2026-01-03T06:59:29.246Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
💾 BEFORE ARCHIVING: 242 jobs in database
[2026-01-03T06:59:29.247Z] [BOT] ✅ No jobs to archive (all 242 jobs within 7-day window)
[2026-01-03T06:59:29.249Z] [BOT] 💾 Saved posted_jobs.json: 242 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T06:59:29.249Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
💾 BEFORE ARCHIVING: 243 jobs in database
[2026-01-03T06:59:29.249Z] [BOT] ✅ No jobs to archive (all 243 jobs within 7-day window)
[2026-01-03T06:59:29.251Z] [BOT] 💾 Saved posted_jobs.json: 243 active jobs
[2026-01-03T06:59:29.251Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T06:59:29.252Z] [BOT] 📍 [ROUTING] "Public Sector Major Account Executive" @ samsara
[2026-01-03T06:59:29.252Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T06:59:29.495Z] [BOT] ✅ Created forum post: 🏢 Public Sector Major Account Executive @ samsara in #💲・sales-jobs
[2026-01-03T06:59:29.496Z] [BOT] ✅ Industry: Public Sector Major Account Executive @ samsara
[2026-01-03T06:59:30.996Z] [BOT] 💾 Marked as posted: Public Sector Major Account Executive @ samsara (instance #1)
[2026-01-03T06:59:30.996Z] [BOT] 💾 BEFORE ARCHIVING: 244 jobs in database
[2026-01-03T06:59:30.997Z] [BOT] ✅ No jobs to archive (all 244 jobs within 7-day window)
[2026-01-03T06:59:30.999Z] [BOT] 💾 Saved posted_jobs.json: 244 active jobs
[2026-01-03T06:59:30.999Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T06:59:31.000Z] [BOT] 📍 [ROUTING] "Sales Operations Manager - Revenue Systems" @ samsara
[2026-01-03T06:59:31.000Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T06:59:31.330Z] [BOT] ✅ Created forum post: 🏢 Sales Operations Manager - Revenue Systems @ samsara in #💲・sales-jobs
[2026-01-03T06:59:31.331Z] [BOT] ✅ Industry: Sales Operations Manager - Revenue Systems @ samsara
[2026-01-03T06:59:33.019Z] [BOT] ✅ Created forum post: 🏢 Sales Operations Manager - Revenue Systems @ samsara in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-03T06:59:34.521Z] [BOT] 💾 Marked as posted: Sales Operations Manager - Revenue Systems @ samsara (instance #1)
[2026-01-03T06:59:34.521Z] [BOT] 💾 BEFORE ARCHIVING: 245 jobs in database
[2026-01-03T06:59:34.521Z] [BOT] ✅ No jobs to archive (all 245 jobs within 7-day window)
[2026-01-03T06:59:34.523Z] [BOT] 💾 Saved posted_jobs.json: 245 active jobs
[2026-01-03T06:59:34.524Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T06:59:37.525Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-03T06:59:37.525Z] [BOT] ⏭️  Skipping duplicate: JID_2d263b12 (posted within 7 days)
[2026-01-03T06:59:37.525Z] [BOT] ⏭️  Skipping duplicate: JID_b84897e7 (posted within 7 days)
⏭️  Skipping duplicate: JID_068a95ad (posted within 7 days)
[2026-01-03T06:59:37.617Z] [BOT] ✅ Loaded pending queue: 1055 total (1035 pending, 20 enriched, 0 posted)
[2026-01-03T06:59:37.733Z] [BOT] ✅ Saved pending queue: 1055 total (1035 pending, 17 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2026-01-03T06:59:37.733Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T06:59:37.777Z] [BOT] 📂 Loaded 1285 existing routing entries
[2026-01-03T06:59:37.821Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2026-01-03T06:59:37.821Z] [BOT] Total entries: 1288
   Timestamp: 2026-01-03T06:59:37.816Z
[2026-01-03T06:59:37.822Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 4
   Successful: 4
[2026-01-03T06:59:37.822Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-03T06:59:37.822Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T06:59:37.822Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 2
   Top channels:
[2026-01-03T06:59:37.822Z] [BOT] 1. #💲・sales-jobs: 3 posts
     2. #🦢・los-angeles: 1 posts
[2026-01-03T06:59:37.823Z] [BOT] [STATS] Channel stats saved
[2026-01-03T06:59:39.840Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2422) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*