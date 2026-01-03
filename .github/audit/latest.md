# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T21:05:05.157Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T21:04:40.439Z] ========================================
[2026-01-03T21:04:40.441Z] Discord Bot Execution Log
[2026-01-03T21:04:40.441Z] Environment: GitHub Actions
[2026-01-03T21:04:40.441Z] Node Version: v20.19.6
[2026-01-03T21:04:40.441Z] ========================================
[2026-01-03T21:04:40.441Z] Environment Variables Check:
[2026-01-03T21:04:40.441Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T21:04:40.442Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T21:04:40.442Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T21:04:40.442Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T21:04:40.442Z] 
Multi-Channel Configuration:
[2026-01-03T21:04:40.442Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T21:04:40.442Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T21:04:40.442Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T21:04:40.442Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T21:04:40.442Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T21:04:40.442Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T21:04:40.442Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T21:04:40.442Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T21:04:40.443Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T21:04:40.443Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T21:04:40.443Z] 
Data Files Check:
[2026-01-03T21:04:40.444Z] .github/data/new_jobs.json: ✅ Exists (10 items, 156985 bytes)
[2026-01-03T21:04:40.447Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 404171 bytes)
[2026-01-03T21:04:40.447Z] 
========================================
[2026-01-03T21:04:40.447Z] Starting Enhanced Discord Bot...
[2026-01-03T21:04:40.447Z] ========================================
[2026-01-03T21:04:40.964Z] [BOT] ✅ Loaded V2 database: 793 jobs
[2026-01-03T21:04:41.699Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T21:04:41.700Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T21:04:41.700Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T21:04:41.701Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T21:04:41.768Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T21:04:41.857Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T21:04:41.859Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T21:04:41.860Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T21:04:41.860Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T21:04:41.860Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-01-03T21:04:41.861Z] [BOT] (6 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Manager, Recruiting Coordination and Programs @ brex: san francisco, california, united states, new york, new york, united states
   - Manager, Sales Development @ brex: san francisco, california, united states, seattle, washington, united states, salt lake city, utah, united states
   - Mid-Market Customer Success Manager @ brex: seattle, washington, united states, san francisco, california, united states, new york, new york, united states, salt lake city, utah, united states
⏸️ Limiting to 10 jobs this run, 6 deferred for next run
[2026-01-03T21:04:41.861Z] [BOT] 📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T21:04:41.865Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T21:04:41.865Z] [BOT] 📍 [ROUTING] "Implementation Consultant II" @ brex
[2026-01-03T21:04:41.866Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T21:04:41.870Z] [BOT ERROR] (node:2371) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T21:04:42.087Z] [BOT] ✅ Created forum post: 🏢 Implementation Consultant II @ brex in #💲・sales-jobs
  ✅ Industry: Implementation Consultant II @ brex
[2026-01-03T21:04:43.821Z] [BOT] ✅ Created forum post: 🏢 Implementation Consultant II @ brex in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-03T21:04:45.322Z] [BOT] 💾 Marked as posted: Implementation Consultant II @ brex (instance #1)
[2026-01-03T21:04:45.322Z] [BOT] 💾 BEFORE ARCHIVING: 794 jobs in database
[2026-01-03T21:04:45.323Z] [BOT] ✅ No jobs to archive (all 794 jobs within 7-day window)
[2026-01-03T21:04:45.332Z] [BOT] 💾 Saved posted_jobs.json: 794 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T21:04:45.333Z] [BOT] 📍 [ROUTING] "Manager, Sales Development" @ brex
   Category: SALES (matched: "sales")
[2026-01-03T21:04:45.333Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T21:04:45.537Z] [BOT] ✅ Created forum post: 🏢 Manager, Sales Development @ brex in #💲・sales-jobs
  ✅ Industry: Manager, Sales Development @ brex
[2026-01-03T21:04:47.247Z] [BOT] ✅ Created forum post: 🏢 Manager, Sales Development @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T21:04:48.747Z] [BOT] 💾 Marked as posted: Manager, Sales Development @ brex (instance #1)
[2026-01-03T21:04:48.747Z] [BOT] 💾 BEFORE ARCHIVING: 795 jobs in database
[2026-01-03T21:04:48.748Z] [BOT] ✅ No jobs to archive (all 795 jobs within 7-day window)
[2026-01-03T21:04:48.755Z] [BOT] 💾 Saved posted_jobs.json: 795 active jobs
[2026-01-03T21:04:48.756Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T21:04:48.756Z] [BOT] 💾 Marked as posted: Manager, Sales Development @ brex (instance #1)
[2026-01-03T21:04:48.756Z] [BOT] 💾 BEFORE ARCHIVING: 796 jobs in database
[2026-01-03T21:04:48.756Z] [BOT] ✅ No jobs to archive (all 796 jobs within 7-day window)
[2026-01-03T21:04:48.762Z] [BOT] 💾 Saved posted_jobs.json: 796 active jobs
[2026-01-03T21:04:48.762Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Manager, Sales Development @ brex (instance #1)
[2026-01-03T21:04:48.762Z] [BOT] 💾 BEFORE ARCHIVING: 797 jobs in database
[2026-01-03T21:04:48.763Z] [BOT] ✅ No jobs to archive (all 797 jobs within 7-day window)
[2026-01-03T21:04:48.768Z] [BOT] 💾 Saved posted_jobs.json: 797 active jobs
[2026-01-03T21:04:48.768Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T21:04:48.769Z] [BOT] 📍 [ROUTING] "Mid-Market Customer Success Manager" @ brex
[2026-01-03T21:04:48.770Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T21:04:48.955Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Customer Success Manager @ brex in #💲・sales-jobs
[2026-01-03T21:04:48.956Z] [BOT] ✅ Industry: Mid-Market Customer Success Manager @ brex
[2026-01-03T21:04:50.680Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Customer Success Manager @ brex in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-03T21:04:52.181Z] [BOT] 💾 Marked as posted: Mid-Market Customer Success Manager @ brex (instance #1)
[2026-01-03T21:04:52.181Z] [BOT] 💾 BEFORE ARCHIVING: 798 jobs in database
[2026-01-03T21:04:52.181Z] [BOT] ✅ No jobs to archive (all 798 jobs within 7-day window)
[2026-01-03T21:04:52.187Z] [BOT] 💾 Saved posted_jobs.json: 798 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T21:04:52.188Z] [BOT] 💾 Marked as posted: Mid-Market Customer Success Manager @ brex (instance #1)
💾 BEFORE ARCHIVING: 799 jobs in database
[2026-01-03T21:04:52.188Z] [BOT] ✅ No jobs to archive (all 799 jobs within 7-day window)
[2026-01-03T21:04:52.193Z] [BOT] 💾 Saved posted_jobs.json: 799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T21:04:52.193Z] [BOT] 💾 Marked as posted: Mid-Market Customer Success Manager @ brex (instance #1)
[2026-01-03T21:04:52.193Z] [BOT] 💾 BEFORE ARCHIVING: 800 jobs in database
[2026-01-03T21:04:52.194Z] [BOT] ✅ No jobs to archive (all 800 jobs within 7-day window)
[2026-01-03T21:04:52.200Z] [BOT] 💾 Saved posted_jobs.json: 800 active jobs
[2026-01-03T21:04:52.200Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Mid-Market Customer Success Manager @ brex (instance #1)
💾 BEFORE ARCHIVING: 801 jobs in database
[2026-01-03T21:04:52.200Z] [BOT] ✅ No jobs to archive (all 801 jobs within 7-day window)
[2026-01-03T21:04:52.206Z] [BOT] 💾 Saved posted_jobs.json: 801 active jobs
[2026-01-03T21:04:52.206Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T21:04:55.207Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T21:04:55.208Z] [BOT] 📍 [ROUTING] "Manager, Recruiting Coordination and Programs" @ brex
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T21:04:55.500Z] [BOT] ✅ Created forum post: 🏢 Manager, Recruiting Coordination and Programs @ brex in #📣・marketing-jobs
[2026-01-03T21:04:55.501Z] [BOT] ✅ Industry: Manager, Recruiting Coordination and Programs @ brex
[2026-01-03T21:04:57.289Z] [BOT] ✅ Created forum post: 🏢 Manager, Recruiting Coordination and Programs @ brex in #🌉・san-francisco
[2026-01-03T21:04:57.289Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T21:04:58.790Z] [BOT] 💾 Marked as posted: Manager, Recruiting Coordination and Programs @ brex (instance #1)
[2026-01-03T21:04:58.790Z] [BOT] 💾 BEFORE ARCHIVING: 802 jobs in database
[2026-01-03T21:04:58.790Z] [BOT] ✅ No jobs to archive (all 802 jobs within 7-day window)
[2026-01-03T21:04:58.797Z] [BOT] 💾 Saved posted_jobs.json: 802 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T21:04:58.797Z] [BOT] 💾 Marked as posted: Manager, Recruiting Coordination and Programs @ brex (instance #1)
[2026-01-03T21:04:58.797Z] [BOT] 💾 BEFORE ARCHIVING: 803 jobs in database
[2026-01-03T21:04:58.798Z] [BOT] ✅ No jobs to archive (all 803 jobs within 7-day window)
[2026-01-03T21:04:58.804Z] [BOT] 💾 Saved posted_jobs.json: 803 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T21:05:01.805Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-03T21:05:01.805Z] [BOT] ⏭️  Skipping duplicate: JID_73086167 (posted within 7 days)
[2026-01-03T21:05:01.805Z] [BOT] ⏭️  Skipping duplicate: JID_4921d491 (posted within 7 days)
[2026-01-03T21:05:01.805Z] [BOT] ⏭️  Skipping duplicate: JID_2b5a5b0e (posted within 7 days)
[2026-01-03T21:05:01.805Z] [BOT] ⏭️  Skipping duplicate: JID_202b0e40 (posted within 7 days)
[2026-01-03T21:05:01.846Z] [BOT] ✅ Loaded pending queue: 496 total (476 pending, 20 enriched, 0 posted)
[2026-01-03T21:05:01.893Z] [BOT] ✅ Saved pending queue: 496 total (476 pending, 16 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
[2026-01-03T21:05:01.893Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T21:05:01.941Z] [BOT] 📂 Loaded 1726 existing routing entries
[2026-01-03T21:05:01.990Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2026-01-03T21:05:01.990Z] [BOT] Total entries: 1730
   Timestamp: 2026-01-03T21:05:01.983Z
[2026-01-03T21:05:01.991Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 8
[2026-01-03T21:05:01.991Z] [BOT] Successful: 8
   Failed: 0
   Skipped: 0
[2026-01-03T21:05:01.991Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T21:05:01.991Z] [BOT] Last cleanup: Never
   Total posts: 8
   Channels used: 5
   Top channels:
     1. #💲・sales-jobs: 3 posts
[2026-01-03T21:05:01.991Z] [BOT] 2. #🌉・san-francisco: 2 posts
     3. #💻・remote-usa: 1 posts
     4. #🌧️・seattle: 1 posts
     5. #📣・marketing-jobs: 1 posts
[2026-01-03T21:05:01.991Z] [BOT] [STATS] Channel stats saved
[2026-01-03T21:05:04.007Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2371) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*