# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T09:37:29.406Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T09:37:01.665Z] ========================================
[2026-01-03T09:37:01.667Z] Discord Bot Execution Log
[2026-01-03T09:37:01.667Z] Environment: GitHub Actions
[2026-01-03T09:37:01.667Z] Node Version: v20.19.6
[2026-01-03T09:37:01.667Z] ========================================
[2026-01-03T09:37:01.667Z] Environment Variables Check:
[2026-01-03T09:37:01.667Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T09:37:01.667Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T09:37:01.667Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T09:37:01.667Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T09:37:01.667Z] 
Multi-Channel Configuration:
[2026-01-03T09:37:01.667Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T09:37:01.668Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T09:37:01.668Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T09:37:01.668Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T09:37:01.668Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T09:37:01.668Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T09:37:01.668Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T09:37:01.668Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T09:37:01.668Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T09:37:01.668Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T09:37:01.668Z] 
Data Files Check:
[2026-01-03T09:37:01.669Z] .github/data/new_jobs.json: ✅ Exists (10 items, 157667 bytes)
[2026-01-03T09:37:01.671Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 187228 bytes)
[2026-01-03T09:37:01.671Z] 
========================================
[2026-01-03T09:37:01.671Z] Starting Enhanced Discord Bot...
[2026-01-03T09:37:01.671Z] ========================================
[2026-01-03T09:37:02.176Z] [BOT] ✅ Loaded V2 database: 344 jobs
[2026-01-03T09:37:03.029Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T09:37:03.030Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T09:37:03.030Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T09:37:03.031Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T09:37:03.102Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T09:37:03.197Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T09:37:03.199Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T09:37:03.199Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T09:37:03.199Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T09:37:03.200Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-01-03T09:37:03.200Z] [BOT] (5 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Project Engineer, Global Services @ verkada: austin, tx united states; new york city, ny united states; philadelphia, pa united states; tampa, fl united states, chicago, il united states, new york city, ny united states, tampa, fl united states, philadelphia, pa united states, austin, tx united states
⏸️ Limiting to 10 jobs this run, 5 deferred for next run
📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T09:37:03.203Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-03T09:37:03.204Z] [BOT] 📍 [ROUTING] "Senior Channel Marketing Manager, Northeast (Remote)" @ verkada
[2026-01-03T09:37:03.204Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T09:37:03.208Z] [BOT ERROR] (node:2313) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T09:37:03.520Z] [BOT] ✅ Created forum post: 🏢 Senior Channel Marketing Manager, Northeast (Remote) @ verkada in #📣・marketing-jobs
[2026-01-03T09:37:03.521Z] [BOT] ✅ Industry: Senior Channel Marketing Manager, Northeast (Remote) @ verkada
[2026-01-03T09:37:06.114Z] [BOT] ✅ Created forum post: 🏢 Senior Channel Marketing Manager, Northeast (Remote) @ verkada in #🗽・new-york
[2026-01-03T09:37:06.114Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T09:37:07.616Z] [BOT] 💾 Marked as posted: Senior Channel Marketing Manager, Northeast (Remote) @ verkada (instance #1)
[2026-01-03T09:37:07.616Z] [BOT] 💾 BEFORE ARCHIVING: 345 jobs in database
[2026-01-03T09:37:07.616Z] [BOT] ✅ No jobs to archive (all 345 jobs within 7-day window)
[2026-01-03T09:37:07.625Z] [BOT] 💾 Saved posted_jobs.json: 345 active jobs
[2026-01-03T09:37:07.625Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T09:37:07.627Z] [BOT] 📍 [ROUTING] "Sr. Tradeshow and Event Marketing Manager" @ verkada
[2026-01-03T09:37:07.627Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T09:37:07.879Z] [BOT] ✅ Created forum post: 🏢 Sr. Tradeshow and Event Marketing Manager @ verkada in #📣・marketing-jobs
  ✅ Industry: Sr. Tradeshow and Event Marketing Manager @ verkada
[2026-01-03T09:37:09.692Z] [BOT] ✅ Created forum post: 🏢 Sr. Tradeshow and Event Marketing Manager @ verkada in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T09:37:11.193Z] [BOT] 💾 Marked as posted: Sr. Tradeshow and Event Marketing Manager @ verkada (instance #1)
[2026-01-03T09:37:11.193Z] [BOT] 💾 BEFORE ARCHIVING: 346 jobs in database
[2026-01-03T09:37:11.194Z] [BOT] ✅ No jobs to archive (all 346 jobs within 7-day window)
[2026-01-03T09:37:11.197Z] [BOT] 💾 Saved posted_jobs.json: 346 active jobs
[2026-01-03T09:37:11.198Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T09:37:14.199Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-03T09:37:14.200Z] [BOT] 📍 [ROUTING] "Senior Project Engineer, Global Services" @ verkada
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T09:37:14.418Z] [BOT] ✅ Created forum post: 🏢 Senior Project Engineer, Global Services @ verkada in #💻・tech-jobs
  ✅ Industry: Senior Project Engineer, Global Services @ verkada
[2026-01-03T09:37:16.178Z] [BOT] ✅ Created forum post: 🏢 Senior Project Engineer, Global Services @ verkada in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T09:37:17.679Z] [BOT] 💾 Marked as posted: Senior Project Engineer, Global Services @ verkada (instance #1)
[2026-01-03T09:37:17.680Z] [BOT] 💾 BEFORE ARCHIVING: 347 jobs in database
[2026-01-03T09:37:17.680Z] [BOT] ✅ No jobs to archive (all 347 jobs within 7-day window)
[2026-01-03T09:37:17.683Z] [BOT] 💾 Saved posted_jobs.json: 347 active jobs
[2026-01-03T09:37:17.684Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T09:37:17.684Z] [BOT] 💾 Marked as posted: Senior Project Engineer, Global Services @ verkada (instance #1)
💾 BEFORE ARCHIVING: 348 jobs in database
[2026-01-03T09:37:17.684Z] [BOT] ✅ No jobs to archive (all 348 jobs within 7-day window)
[2026-01-03T09:37:17.687Z] [BOT] 💾 Saved posted_jobs.json: 348 active jobs
[2026-01-03T09:37:17.687Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior Project Engineer, Global Services @ verkada (instance #1)
💾 BEFORE ARCHIVING: 349 jobs in database
[2026-01-03T09:37:17.687Z] [BOT] ✅ No jobs to archive (all 349 jobs within 7-day window)
[2026-01-03T09:37:17.690Z] [BOT] 💾 Saved posted_jobs.json: 349 active jobs
[2026-01-03T09:37:17.690Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior Project Engineer, Global Services @ verkada (instance #1)
[2026-01-03T09:37:17.690Z] [BOT] 💾 BEFORE ARCHIVING: 350 jobs in database
[2026-01-03T09:37:17.691Z] [BOT] ✅ No jobs to archive (all 350 jobs within 7-day window)
[2026-01-03T09:37:17.693Z] [BOT] 💾 Saved posted_jobs.json: 350 active jobs
[2026-01-03T09:37:17.693Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior Project Engineer, Global Services @ verkada (instance #1)
💾 BEFORE ARCHIVING: 351 jobs in database
[2026-01-03T09:37:17.694Z] [BOT] ✅ No jobs to archive (all 351 jobs within 7-day window)
[2026-01-03T09:37:17.696Z] [BOT] 💾 Saved posted_jobs.json: 351 active jobs
[2026-01-03T09:37:17.696Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior Project Engineer, Global Services @ verkada (instance #1)
💾 BEFORE ARCHIVING: 352 jobs in database
[2026-01-03T09:37:17.697Z] [BOT] ✅ No jobs to archive (all 352 jobs within 7-day window)
[2026-01-03T09:37:17.699Z] [BOT] 💾 Saved posted_jobs.json: 352 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T09:37:17.700Z] [BOT] 📍 [ROUTING] "Solutions Engineer" @ verkada
[2026-01-03T09:37:17.700Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T09:37:18.016Z] [BOT] ✅ Created forum post: 🏢 Solutions Engineer @ verkada in #💻・tech-jobs
[2026-01-03T09:37:18.016Z] [BOT] ✅ Industry: Solutions Engineer @ verkada
[2026-01-03T09:37:19.518Z] [BOT] 💾 Marked as posted: Solutions Engineer @ verkada (instance #1)
[2026-01-03T09:37:19.518Z] [BOT] 💾 BEFORE ARCHIVING: 353 jobs in database
[2026-01-03T09:37:19.518Z] [BOT] ✅ No jobs to archive (all 353 jobs within 7-day window)
[2026-01-03T09:37:19.522Z] [BOT] 💾 Saved posted_jobs.json: 353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T09:37:19.523Z] [BOT] 📍 [ROUTING] "Solutions Engineering Manager, Select & Territory" @ verkada
[2026-01-03T09:37:19.523Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T09:37:19.870Z] [BOT] ✅ Created forum post: 🏢 Solutions Engineering Manager, Select & Territory @ verkada in #💻・tech-jobs
  ✅ Industry: Solutions Engineering Manager, Select & Territory @ verkada
[2026-01-03T09:37:21.811Z] [BOT] ✅ Created forum post: 🏢 Solutions Engineering Manager, Select & Territory @ verkada in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-03T09:37:23.312Z] [BOT] 💾 Marked as posted: Solutions Engineering Manager, Select & Territory @ verkada (instance #1)
[2026-01-03T09:37:23.312Z] [BOT] 💾 BEFORE ARCHIVING: 354 jobs in database
[2026-01-03T09:37:23.312Z] [BOT] ✅ No jobs to archive (all 354 jobs within 7-day window)
[2026-01-03T09:37:23.316Z] [BOT] 💾 Saved posted_jobs.json: 354 active jobs
[2026-01-03T09:37:23.316Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T09:37:26.317Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-01-03T09:37:26.317Z] [BOT] ⏭️  Skipping duplicate: JID_655e3681 (posted within 7 days)
[2026-01-03T09:37:26.317Z] [BOT] ⏭️  Skipping duplicate: JID_e1dc469b (posted within 7 days)
⏭️  Skipping duplicate: JID_a1c0a588 (posted within 7 days)
[2026-01-03T09:37:26.318Z] [BOT] ⏭️  Skipping duplicate: JID_6b30789d (posted within 7 days)
⏭️  Skipping duplicate: JID_77ee8e7b (posted within 7 days)
[2026-01-03T09:37:26.395Z] [BOT] ✅ Loaded pending queue: 945 total (925 pending, 20 enriched, 0 posted)
[2026-01-03T09:37:26.514Z] [BOT] ✅ Saved pending queue: 945 total (925 pending, 15 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
[2026-01-03T09:37:26.515Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T09:37:26.560Z] [BOT] 📂 Loaded 1353 existing routing entries
[2026-01-03T09:37:26.606Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2026-01-03T09:37:26.606Z] [BOT] Total entries: 1358
   Timestamp: 2026-01-03T09:37:26.600Z
[2026-01-03T09:37:26.607Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T09:37:26.607Z] [BOT] Total attempts: 9
   Successful: 9
   Failed: 0
   Skipped: 0
[2026-01-03T09:37:26.607Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T09:37:26.607Z] [BOT] Last cleanup: Never
   Total posts: 9
   Channels used: 4
   Top channels:
[2026-01-03T09:37:26.607Z] [BOT] 1. #🗽・new-york: 3 posts
     2. #💻・tech-jobs: 3 posts
     3. #📣・marketing-jobs: 2 posts
[2026-01-03T09:37:26.607Z] [BOT] 4. #💻・remote-usa: 1 posts
[2026-01-03T09:37:26.608Z] [BOT] [STATS] Channel stats saved
[2026-01-03T09:37:28.625Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2313) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*