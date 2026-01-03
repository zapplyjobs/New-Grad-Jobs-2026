# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T07:49:36.186Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T07:49:07.900Z] ========================================
[2026-01-03T07:49:07.902Z] Discord Bot Execution Log
[2026-01-03T07:49:07.902Z] Environment: GitHub Actions
[2026-01-03T07:49:07.902Z] Node Version: v20.19.6
[2026-01-03T07:49:07.902Z] ========================================
[2026-01-03T07:49:07.902Z] Environment Variables Check:
[2026-01-03T07:49:07.902Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T07:49:07.902Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T07:49:07.903Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T07:49:07.903Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T07:49:07.903Z] 
Multi-Channel Configuration:
[2026-01-03T07:49:07.903Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T07:49:07.903Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T07:49:07.903Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T07:49:07.903Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T07:49:07.903Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T07:49:07.903Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T07:49:07.903Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T07:49:07.903Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T07:49:07.903Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T07:49:07.903Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T07:49:07.904Z] 
Data Files Check:
[2026-01-03T07:49:07.905Z] .github/data/new_jobs.json: ✅ Exists (10 items, 163818 bytes)
[2026-01-03T07:49:07.907Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 152438 bytes)
[2026-01-03T07:49:07.907Z] 
========================================
[2026-01-03T07:49:07.907Z] Starting Enhanced Discord Bot...
[2026-01-03T07:49:07.907Z] ========================================
[2026-01-03T07:49:08.436Z] [BOT] ✅ Loaded V2 database: 274 jobs
[2026-01-03T07:49:08.814Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T07:49:08.815Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T07:49:08.815Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T07:49:08.816Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T07:49:08.972Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 191
[2026-01-03T07:49:08.973Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T07:49:08.974Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T07:49:08.974Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T07:49:08.974Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
[2026-01-03T07:49:08.975Z] [BOT] (4 grouped as same job with different locations)
📍 3 jobs with multiple locations:
[2026-01-03T07:49:08.975Z] [BOT] - Select Major Account Executive EST/CST - Tallahassee, FL @ samsara: tallahassee, tampa, washington, d.c.
   - Select Major Account Executive (MST/PST) - Los Angeles, CA @ samsara: los angeles, san diego
   - Senior Hardware Systems Engineer @ samsara: san francisco, ca, united states, san francisco - sf9
⏸️ Limiting to 10 jobs this run, 4 deferred for next run
📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T07:49:08.978Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-03T07:49:08.978Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - Tallahassee, FL" @ samsara
[2026-01-03T07:49:08.978Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T07:49:08.983Z] [BOT ERROR] (node:2315) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T07:49:09.106Z] [BOT] ✅ Created forum post: 🏢 Select Major Account Executive EST/CST - Tallahassee, FL @ samsara in #💲・sales-jobs
[2026-01-03T07:49:09.106Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST - Tallahassee, FL @ samsara
[2026-01-03T07:49:10.608Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Tallahassee, FL @ samsara (instance #1)
[2026-01-03T07:49:10.608Z] [BOT] 💾 BEFORE ARCHIVING: 275 jobs in database
[2026-01-03T07:49:10.609Z] [BOT] ✅ No jobs to archive (all 275 jobs within 7-day window)
[2026-01-03T07:49:10.619Z] [BOT] 💾 Saved posted_jobs.json: 275 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T07:49:10.619Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Tampa, FL @ samsara (instance #1)
💾 BEFORE ARCHIVING: 276 jobs in database
[2026-01-03T07:49:10.619Z] [BOT] ✅ No jobs to archive (all 276 jobs within 7-day window)
[2026-01-03T07:49:10.623Z] [BOT] 💾 Saved posted_jobs.json: 276 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T07:49:10.623Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Washington, DC @ samsara (instance #1)
💾 BEFORE ARCHIVING: 277 jobs in database
[2026-01-03T07:49:10.623Z] [BOT] ✅ No jobs to archive (all 277 jobs within 7-day window)
[2026-01-03T07:49:10.626Z] [BOT] 💾 Saved posted_jobs.json: 277 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T07:49:10.627Z] [BOT] 📍 [ROUTING] "Select Major Account Executive (MST/PST) - Los Angeles, CA" @ samsara
   Category: SALES (matched: "sales")
[2026-01-03T07:49:10.627Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T07:49:10.895Z] [BOT] ✅ Created forum post: 🏢 Select Major Account Executive (MST/PST) - Los Angeles, CA @ samsara in #💲・sales-jobs
[2026-01-03T07:49:10.896Z] [BOT] ✅ Industry: Select Major Account Executive (MST/PST) - Los Angeles, CA @ samsara
[2026-01-03T07:49:12.542Z] [BOT] ✅ Created forum post: 🏢 Select Major Account Executive (MST/PST) - Los Angeles, CA @ samsara in #🦢・los-angeles
[2026-01-03T07:49:12.542Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-03T07:49:14.042Z] [BOT] 💾 Marked as posted: Select Major Account Executive (MST/PST) - Los Angeles, CA @ samsara (instance #1)
[2026-01-03T07:49:14.043Z] [BOT] 💾 BEFORE ARCHIVING: 278 jobs in database
[2026-01-03T07:49:14.043Z] [BOT] ✅ No jobs to archive (all 278 jobs within 7-day window)
[2026-01-03T07:49:14.045Z] [BOT] 💾 Saved posted_jobs.json: 278 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T07:49:14.046Z] [BOT] 💾 Marked as posted: Select Major Account Executive (MST/PST) - San Diego, CA @ samsara (instance #1)
[2026-01-03T07:49:14.046Z] [BOT] 💾 BEFORE ARCHIVING: 279 jobs in database
[2026-01-03T07:49:14.046Z] [BOT] ✅ No jobs to archive (all 279 jobs within 7-day window)
[2026-01-03T07:49:14.048Z] [BOT] 💾 Saved posted_jobs.json: 279 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T07:49:17.047Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-03T07:49:17.048Z] [BOT] 📍 [ROUTING] "Senior Hardware Systems Engineer" @ samsara
   Category: TECH (matched: "engineer/engineering")
[2026-01-03T07:49:17.048Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T07:49:17.234Z] [BOT] ✅ Created forum post: 🏢 Senior Hardware Systems Engineer @ samsara in #💻・tech-jobs
  ✅ Industry: Senior Hardware Systems Engineer @ samsara
[2026-01-03T07:49:18.874Z] [BOT] ✅ Created forum post: 🏢 Senior Hardware Systems Engineer @ samsara in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T07:49:20.374Z] [BOT] 💾 Marked as posted: Senior Hardware Systems Engineer @ samsara (instance #1)
[2026-01-03T07:49:20.374Z] [BOT] 💾 BEFORE ARCHIVING: 280 jobs in database
[2026-01-03T07:49:20.375Z] [BOT] ✅ No jobs to archive (all 280 jobs within 7-day window)
[2026-01-03T07:49:20.378Z] [BOT] 💾 Saved posted_jobs.json: 280 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T07:49:20.378Z] [BOT] 💾 Marked as posted: Senior Hardware Systems Engineer @ samsara (instance #1)
[2026-01-03T07:49:20.378Z] [BOT] 💾 BEFORE ARCHIVING: 281 jobs in database
[2026-01-03T07:49:20.378Z] [BOT] ✅ No jobs to archive (all 281 jobs within 7-day window)
[2026-01-03T07:49:20.381Z] [BOT] 💾 Saved posted_jobs.json: 281 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T07:49:20.382Z] [BOT] 📍 [ROUTING] "Senior IT Network Engineer" @ samsara
[2026-01-03T07:49:20.382Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T07:49:20.559Z] [BOT] ✅ Created forum post: 🏢 Senior IT Network Engineer @ samsara in #💻・tech-jobs
[2026-01-03T07:49:20.559Z] [BOT] ✅ Industry: Senior IT Network Engineer @ samsara
[2026-01-03T07:49:22.199Z] [BOT] ✅ Created forum post: 🏢 Senior IT Network Engineer @ samsara in #🌉・san-francisco
[2026-01-03T07:49:22.199Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T07:49:23.699Z] [BOT] 💾 Marked as posted: Senior IT Network Engineer @ samsara (instance #1)
[2026-01-03T07:49:23.699Z] [BOT] 💾 BEFORE ARCHIVING: 282 jobs in database
[2026-01-03T07:49:23.700Z] [BOT] ✅ No jobs to archive (all 282 jobs within 7-day window)
[2026-01-03T07:49:23.702Z] [BOT] 💾 Saved posted_jobs.json: 282 active jobs
[2026-01-03T07:49:23.702Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T07:49:23.703Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Connected Workflows" @ samsara
[2026-01-03T07:49:23.703Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T07:49:23.851Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Connected Workflows @ samsara in #💻・tech-jobs
[2026-01-03T07:49:23.852Z] [BOT] ✅ Industry: Senior Software Engineer, Connected Workflows @ samsara
[2026-01-03T07:49:25.460Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Connected Workflows @ samsara in #🌉・san-francisco
[2026-01-03T07:49:25.460Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T07:49:26.960Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Connected Workflows @ samsara (instance #1)
[2026-01-03T07:49:26.961Z] [BOT] 💾 BEFORE ARCHIVING: 283 jobs in database
[2026-01-03T07:49:26.961Z] [BOT] ✅ No jobs to archive (all 283 jobs within 7-day window)
[2026-01-03T07:49:26.964Z] [BOT] 💾 Saved posted_jobs.json: 283 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T07:49:26.964Z] [BOT] 📍 [ROUTING] "Senior Staff Hardware Systems Engineer" @ samsara
[2026-01-03T07:49:26.965Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T07:49:27.161Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Hardware Systems Engineer @ samsara in #💻・tech-jobs
  ✅ Industry: Senior Staff Hardware Systems Engineer @ samsara
[2026-01-03T07:49:28.775Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Hardware Systems Engineer @ samsara in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T07:49:30.275Z] [BOT] 💾 Marked as posted: Senior Staff Hardware Systems Engineer @ samsara (instance #1)
[2026-01-03T07:49:30.276Z] [BOT] 💾 BEFORE ARCHIVING: 284 jobs in database
[2026-01-03T07:49:30.276Z] [BOT] ✅ No jobs to archive (all 284 jobs within 7-day window)
[2026-01-03T07:49:30.279Z] [BOT] 💾 Saved posted_jobs.json: 284 active jobs
[2026-01-03T07:49:30.279Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T07:49:33.279Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2026-01-03T07:49:33.280Z] [BOT] ⏭️  Skipping duplicate: JID_7cc3f2a7 (posted within 7 days)
[2026-01-03T07:49:33.280Z] [BOT] ⏭️  Skipping duplicate: JID_234d1170 (posted within 7 days)
⏭️  Skipping duplicate: JID_a7ff708b (posted within 7 days)
[2026-01-03T07:49:33.280Z] [BOT] ⏭️  Skipping duplicate: JID_de31ab0e (posted within 7 days)
⏭️  Skipping duplicate: JID_30b16819 (posted within 7 days)
[2026-01-03T07:49:33.280Z] [BOT] ⏭️  Skipping duplicate: JID_1fcd150f (posted within 7 days)
[2026-01-03T07:49:33.370Z] [BOT] ✅ Loaded pending queue: 1015 total (995 pending, 20 enriched, 0 posted)
[2026-01-03T07:49:33.482Z] [BOT] ✅ Saved pending queue: 1015 total (995 pending, 14 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
[2026-01-03T07:49:33.483Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T07:49:33.526Z] [BOT] 📂 Loaded 1292 existing routing entries
[2026-01-03T07:49:33.572Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
[2026-01-03T07:49:33.572Z] [BOT] Total entries: 1298
   Timestamp: 2026-01-03T07:49:33.566Z
[2026-01-03T07:49:33.572Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 11
   Successful: 11
   Failed: 0
[2026-01-03T07:49:33.573Z] [BOT] Skipped: 0
[2026-01-03T07:49:33.573Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T07:49:33.573Z] [BOT] Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
[2026-01-03T07:49:33.573Z] [BOT] 1. #💻・tech-jobs: 4 posts
     2. #🌉・san-francisco: 4 posts
     3. #💲・sales-jobs: 2 posts
[2026-01-03T07:49:33.573Z] [BOT] 4. #🦢・los-angeles: 1 posts
[2026-01-03T07:49:33.573Z] [BOT] [STATS] Channel stats saved
[2026-01-03T07:49:35.590Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2315) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*