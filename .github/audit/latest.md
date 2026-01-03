# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T06:45:06.128Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T06:44:41.768Z] ========================================
[2026-01-03T06:44:41.769Z] Discord Bot Execution Log
[2026-01-03T06:44:41.769Z] Environment: GitHub Actions
[2026-01-03T06:44:41.769Z] Node Version: v20.19.6
[2026-01-03T06:44:41.770Z] ========================================
[2026-01-03T06:44:41.770Z] Environment Variables Check:
[2026-01-03T06:44:41.770Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T06:44:41.770Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T06:44:41.770Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T06:44:41.770Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T06:44:41.770Z] 
Multi-Channel Configuration:
[2026-01-03T06:44:41.770Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T06:44:41.770Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T06:44:41.770Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T06:44:41.770Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T06:44:41.770Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T06:44:41.770Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T06:44:41.770Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T06:44:41.771Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T06:44:41.771Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T06:44:41.771Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T06:44:41.771Z] 
Data Files Check:
[2026-01-03T06:44:41.772Z] .github/data/new_jobs.json: ✅ Exists (10 items, 182435 bytes)
[2026-01-03T06:44:41.774Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 128170 bytes)
[2026-01-03T06:44:41.774Z] 
========================================
[2026-01-03T06:44:41.774Z] Starting Enhanced Discord Bot...
[2026-01-03T06:44:41.774Z] ========================================
[2026-01-03T06:44:42.267Z] [BOT] ✅ Loaded V2 database: 225 jobs
[2026-01-03T06:44:42.684Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T06:44:42.684Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T06:44:42.684Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T06:44:42.685Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T06:44:42.819Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 142
[2026-01-03T06:44:42.820Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T06:44:42.821Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T06:44:42.821Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T06:44:42.821Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-01-03T06:44:42.822Z] [BOT] (5 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-03T06:44:42.822Z] [BOT] - Mid-Market Account Development Representative - Outbound @ samsara: phoenix, atlanta
   -  Mid-Market Account Executive - PubSec @ samsara: boston, chicago, houston, texas
⏸️ Limiting to 10 jobs this run, 5 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T06:44:42.826Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-03T06:44:42.827Z] [BOT] 📍 [ROUTING] "Manager Account Development, Relocation to Atlanta" @ samsara
[2026-01-03T06:44:42.827Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T06:44:42.832Z] [BOT ERROR] (node:2344) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T06:44:42.992Z] [BOT] ✅ Created forum post: 🏢 Manager Account Development, Relocation to Atlanta @ samsara in #💲・sales-jobs
  ✅ Industry: Manager Account Development, Relocation to Atlanta @ samsara
[2026-01-03T06:44:44.494Z] [BOT] 💾 Marked as posted: Manager Account Development, Relocation to Atlanta @ samsara (instance #1)
[2026-01-03T06:44:44.495Z] [BOT] 💾 BEFORE ARCHIVING: 226 jobs in database
[2026-01-03T06:44:44.495Z] [BOT] ✅ No jobs to archive (all 226 jobs within 7-day window)
[2026-01-03T06:44:44.500Z] [BOT] 💾 Saved posted_jobs.json: 226 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T06:44:44.500Z] [BOT] 💾 Marked as posted: Manager Account Development, Relocation to Atlanta @ samsara (instance #1)
💾 BEFORE ARCHIVING: 227 jobs in database
[2026-01-03T06:44:44.501Z] [BOT] ✅ No jobs to archive (all 227 jobs within 7-day window)
[2026-01-03T06:44:44.504Z] [BOT] 💾 Saved posted_jobs.json: 227 active jobs
[2026-01-03T06:44:44.505Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Manager Account Development, Relocation to Atlanta @ samsara (instance #1)
[2026-01-03T06:44:44.505Z] [BOT] 💾 BEFORE ARCHIVING: 228 jobs in database
[2026-01-03T06:44:44.505Z] [BOT] ✅ No jobs to archive (all 228 jobs within 7-day window)
[2026-01-03T06:44:44.507Z] [BOT] 💾 Saved posted_jobs.json: 228 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T06:44:44.508Z] [BOT] 📍 [ROUTING] "Manager of Account Development" @ samsara
   Category: SALES (matched: "sales")
[2026-01-03T06:44:44.508Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T06:44:44.793Z] [BOT] ✅ Created forum post: 🏢 Manager of Account Development @ samsara in #💲・sales-jobs
  ✅ Industry: Manager of Account Development @ samsara
[2026-01-03T06:44:46.503Z] [BOT] ✅ Created forum post: 🏢 Manager of Account Development @ samsara in #💻・remote-usa
[2026-01-03T06:44:46.503Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-03T06:44:48.003Z] [BOT] 💾 Marked as posted: Manager of Account Development @ samsara (instance #1)
[2026-01-03T06:44:48.004Z] [BOT] 💾 BEFORE ARCHIVING: 229 jobs in database
[2026-01-03T06:44:48.004Z] [BOT] ✅ No jobs to archive (all 229 jobs within 7-day window)
[2026-01-03T06:44:48.006Z] [BOT] 💾 Saved posted_jobs.json: 229 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T06:44:48.006Z] [BOT] 📍 [ROUTING] "Mid-Market Account Development Representative - Outbound" @ samsara
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T06:44:48.224Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Account Development Representative - Outbound @ samsara in #💲・sales-jobs
  ✅ Industry: Mid-Market Account Development Representative - Outbound @ samsara
[2026-01-03T06:44:49.726Z] [BOT] 💾 Marked as posted: Mid-Market Account Development Representative - Outbound @ samsara (instance #1)
[2026-01-03T06:44:49.726Z] [BOT] 💾 BEFORE ARCHIVING: 230 jobs in database
✅ No jobs to archive (all 230 jobs within 7-day window)
[2026-01-03T06:44:49.729Z] [BOT] 💾 Saved posted_jobs.json: 230 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T06:44:49.729Z] [BOT] 💾 Marked as posted: Mid-Market Account Development Representative - Outbound @ samsara (instance #1)
💾 BEFORE ARCHIVING: 231 jobs in database
[2026-01-03T06:44:49.729Z] [BOT] ✅ No jobs to archive (all 231 jobs within 7-day window)
[2026-01-03T06:44:49.732Z] [BOT] 💾 Saved posted_jobs.json: 231 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T06:44:49.732Z] [BOT] 📍 [ROUTING] " Mid-Market Account Executive - PubSec" @ samsara
[2026-01-03T06:44:49.732Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T06:44:49.946Z] [BOT] ✅ Created forum post: 🏢  Mid-Market Account Executive - PubSec @ samsara in #💲・sales-jobs
  ✅ Industry:  Mid-Market Account Executive - PubSec @ samsara
[2026-01-03T06:44:51.849Z] [BOT] ✅ Created forum post: 🏢  Mid-Market Account Executive - PubSec @ samsara in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-03T06:44:53.350Z] [BOT] 💾 Marked as posted:  Mid-Market Account Executive - PubSec @ samsara (instance #1)
💾 BEFORE ARCHIVING: 232 jobs in database
[2026-01-03T06:44:53.350Z] [BOT] ✅ No jobs to archive (all 232 jobs within 7-day window)
[2026-01-03T06:44:53.353Z] [BOT] 💾 Saved posted_jobs.json: 232 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T06:44:53.353Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
💾 BEFORE ARCHIVING: 233 jobs in database
[2026-01-03T06:44:53.353Z] [BOT] ✅ No jobs to archive (all 233 jobs within 7-day window)
[2026-01-03T06:44:53.355Z] [BOT] 💾 Saved posted_jobs.json: 233 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T06:44:53.356Z] [BOT] 💾 Marked as posted: Mid-Market Account Executive - PubSec @ samsara (instance #1)
[2026-01-03T06:44:53.356Z] [BOT] 💾 BEFORE ARCHIVING: 234 jobs in database
[2026-01-03T06:44:53.356Z] [BOT] ✅ No jobs to archive (all 234 jobs within 7-day window)
[2026-01-03T06:44:53.358Z] [BOT] 💾 Saved posted_jobs.json: 234 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T06:44:56.358Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
📍 [ROUTING] "Manager II, Shipping and Receiving Logistics" @ samsara
   Category: SUPPLY-CHAIN (matched: "logistics")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2026-01-03T06:44:56.737Z] [BOT] ✅ Created forum post: 🏢 Manager II, Shipping and Receiving Logistics @ samsara in #🏗️・JID_b7c6683f
  ✅ Industry: Manager II, Shipping and Receiving Logistics @ samsara
[2026-01-03T06:44:58.556Z] [BOT] ✅ Created forum post: 🏢 Manager II, Shipping and Receiving Logistics @ samsara in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T06:45:00.058Z] [BOT] 💾 Marked as posted: Manager II, Shipping and Receiving Logistics @ samsara (instance #1)
💾 BEFORE ARCHIVING: 235 jobs in database
[2026-01-03T06:45:00.058Z] [BOT] ✅ No jobs to archive (all 235 jobs within 7-day window)
[2026-01-03T06:45:00.062Z] [BOT] 💾 Saved posted_jobs.json: 235 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T06:45:03.064Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-01-03T06:45:03.064Z] [BOT] ⏭️  Skipping duplicate: JID_388792bf (posted within 7 days)
⏭️  Skipping duplicate: JID_28280aa3 (posted within 7 days)
[2026-01-03T06:45:03.064Z] [BOT] ⏭️  Skipping duplicate: JID_15826a9c (posted within 7 days)
⏭️  Skipping duplicate: JID_79ed2142 (posted within 7 days)
[2026-01-03T06:45:03.064Z] [BOT] ⏭️  Skipping duplicate: JID_efed3126 (posted within 7 days)
[2026-01-03T06:45:03.188Z] [BOT] ✅ Loaded pending queue: 1065 total (1045 pending, 20 enriched, 0 posted)
[2026-01-03T06:45:03.303Z] [BOT] ✅ Saved pending queue: 1065 total (1045 pending, 15 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T06:45:03.350Z] [BOT] 📂 Loaded 1280 existing routing entries
[2026-01-03T06:45:03.395Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
   Total entries: 1285
   Timestamp: 2026-01-03T06:45:03.391Z
[2026-01-03T06:45:03.396Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 8
[2026-01-03T06:45:03.396Z] [BOT] Successful: 8
   Failed: 0
   Skipped: 0
[2026-01-03T06:45:03.396Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T06:45:03.396Z] [BOT] Last cleanup: Never
   Total posts: 8
   Channels used: 5
   Top channels:
[2026-01-03T06:45:03.396Z] [BOT] 1. #💲・sales-jobs: 4 posts
     2. #💻・remote-usa: 1 posts
     3. #🚌・boston: 1 posts
     4. #🏗️・JID_b7c6683f: 1 posts
     5. #🌉・san-francisco: 1 posts
[2026-01-03T06:45:03.396Z] [BOT] [STATS] Channel stats saved
[2026-01-03T06:45:05.410Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2344) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*