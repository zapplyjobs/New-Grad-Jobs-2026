# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T22:04:36.108Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T22:04:15.794Z] ========================================
[2026-01-01T22:04:15.796Z] Discord Bot Execution Log
[2026-01-01T22:04:15.796Z] Environment: GitHub Actions
[2026-01-01T22:04:15.796Z] Node Version: v20.19.6
[2026-01-01T22:04:15.796Z] ========================================
[2026-01-01T22:04:15.796Z] Environment Variables Check:
[2026-01-01T22:04:15.796Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T22:04:15.796Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T22:04:15.796Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T22:04:15.796Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T22:04:15.796Z] 
Multi-Channel Configuration:
[2026-01-01T22:04:15.796Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T22:04:15.797Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T22:04:15.797Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T22:04:15.797Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T22:04:15.797Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T22:04:15.797Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T22:04:15.797Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T22:04:15.797Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T22:04:15.797Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T22:04:15.797Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T22:04:15.797Z] 
Data Files Check:
[2026-01-01T22:04:15.798Z] .github/data/new_jobs.json: ✅ Exists (4 items, 24807 bytes)
[2026-01-01T22:04:15.798Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 51789 bytes)
[2026-01-01T22:04:15.798Z] 
========================================
[2026-01-01T22:04:15.798Z] Starting Enhanced Discord Bot...
[2026-01-01T22:04:15.798Z] ========================================
[2026-01-01T22:04:16.320Z] [BOT] ✅ Loaded V2 database: 86 jobs
[2026-01-01T22:04:16.855Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T22:04:16.855Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T22:04:16.856Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T22:04:16.856Z] [BOT] 📦 Exporting 4 jobs to encrypted JSON...
[2026-01-01T22:04:16.898Z] [BOT] 🧹 Cleaned up 4 jobs older than 7 days
[2026-01-01T22:04:16.946Z] [BOT] ✅ Export complete: Added 4, Skipped 0, Total 40
[2026-01-01T22:04:16.947Z] [BOT] 📬 Found 4 new jobs (0 already posted)...
[2026-01-01T22:04:16.948Z] [BOT] 📋 After blacklist filter: 4 jobs (0 blacklisted)
[2026-01-01T22:04:16.948Z] [BOT] 📋 After data quality filter: 4 jobs (0 invalid)
[2026-01-01T22:04:16.948Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-01-01T22:04:16.949Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T22:04:16.952Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-01T22:04:16.953Z] [BOT] 📍 [ROUTING] "Engineering Support 1" @ ORG_93e4a7ef Water
[2026-01-01T22:04:16.953Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-01T22:04:16.957Z] [BOT ERROR] (node:2682) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T22:04:17.113Z] [BOT] ✅ Created forum post: 🏢 Engineering Support 1 @ ORG_93e4a7ef Water in #💻・tech-jobs
  ✅ Industry: Engineering Support 1 @ ORG_93e4a7ef Water
[2026-01-01T22:04:18.901Z] [BOT] ✅ Created forum post: 🏢 Engineering Support 1 @ ORG_93e4a7ef Water in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-01T22:04:20.402Z] [BOT] 💾 Marked as posted: Engineering Support 1 @ ORG_93e4a7ef Water (instance #1)
[2026-01-01T22:04:20.403Z] [BOT] 💾 BEFORE ARCHIVING: 87 jobs in database
[2026-01-01T22:04:20.403Z] [BOT] ✅ No jobs to archive (all 87 jobs within 7-day window)
[2026-01-01T22:04:20.408Z] [BOT] 💾 Saved posted_jobs.json: 87 active jobs
[2026-01-01T22:04:20.409Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T22:04:20.409Z] [BOT] 📍 [ROUTING] "Software Development Engineer Testing 1" @ ORG_5231c044inja
[2026-01-01T22:04:20.409Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-01T22:04:20.717Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer Testing 1 @ ORG_5231c044inja in #💻・tech-jobs
[2026-01-01T22:04:20.717Z] [BOT] ✅ Industry: Software Development Engineer Testing 1 @ ORG_5231c044inja
[2026-01-01T22:04:22.346Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer Testing 1 @ ORG_5231c044inja in #🚌・boston
[2026-01-01T22:04:22.346Z] [BOT] ✅ Location: 🚌・boston
[2026-01-01T22:04:23.847Z] [BOT] 💾 Marked as posted: Software Development Engineer Testing 1 @ ORG_5231c044inja (instance #1)
[2026-01-01T22:04:23.847Z] [BOT] 💾 BEFORE ARCHIVING: 88 jobs in database
✅ No jobs to archive (all 88 jobs within 7-day window)
[2026-01-01T22:04:23.849Z] [BOT] 💾 Saved posted_jobs.json: 88 active jobs
[2026-01-01T22:04:23.849Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T22:04:26.850Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-01T22:04:26.852Z] [BOT] 📍 [ROUTING] "Operations Research Analyst-Foundational" @ ORG_fee50aac
   Category: MARKETING (matched: "campaign")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-01T22:04:27.189Z] [BOT] ✅ Created forum post: 🏢 Operations Research Analyst-Foundational @ ORG_fee50aac in #📣・marketing-jobs
[2026-01-01T22:04:27.190Z] [BOT] ✅ Industry: Operations Research Analyst-Foundational @ ORG_fee50aac
[2026-01-01T22:04:28.898Z] [BOT] ✅ Created forum post: 🏢 Operations Research Analyst-Foundational @ ORG_fee50aac in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-01T22:04:30.399Z] [BOT] 💾 Marked as posted: Operations Research Analyst-Foundational @ ORG_fee50aac (instance #1)
[2026-01-01T22:04:30.400Z] [BOT] 💾 BEFORE ARCHIVING: 89 jobs in database
✅ No jobs to archive (all 89 jobs within 7-day window)
[2026-01-01T22:04:30.402Z] [BOT] 💾 Saved posted_jobs.json: 89 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-01T22:04:30.402Z] [BOT] 💾 Marked as posted: Operations Research Analyst-Foundational @ ORG_fee50aac (instance #1)
[2026-01-01T22:04:30.402Z] [BOT] 💾 BEFORE ARCHIVING: 90 jobs in database
✅ No jobs to archive (all 90 jobs within 7-day window)
[2026-01-01T22:04:30.405Z] [BOT] 💾 Saved posted_jobs.json: 90 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-01T22:04:33.406Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-01T22:04:33.406Z] [BOT] ⏭️  Skipping duplicate: JID_4f4623b8-i_10015998-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_3b6de877-kbr_careers-JID_89d20214-foundational_r2114720 (posted within 7 days)
[2026-01-01T22:04:33.406Z] [BOT] ⏭️  Skipping duplicate: JID_d87f72cb (posted within 7 days)
[2026-01-01T22:04:33.406Z] [BOT] ✅ Loaded pending queue: 4 total (0 pending, 4 enriched, 0 posted)
[2026-01-01T22:04:33.407Z] [BOT] ✅ Saved pending queue: 4 total (0 pending, 1 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-01T22:04:33.450Z] [BOT] 📂 Loaded 1160 existing routing entries
[2026-01-01T22:04:33.497Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2026-01-01T22:04:33.497Z] [BOT] Total entries: 1163
   Timestamp: 2026-01-01T22:04:33.491Z
[2026-01-01T22:04:33.498Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
[2026-01-01T22:04:33.498Z] [BOT] Total attempts: 6
   Successful: 6
   Failed: 0
   Skipped: 0
[2026-01-01T22:04:33.498Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-01T22:04:33.498Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 4
   Top channels:
[2026-01-01T22:04:33.498Z] [BOT] 1. #💻・tech-jobs: 2 posts
     2. #💻・remote-usa: 2 posts
     3. #🚌・boston: 1 posts
[2026-01-01T22:04:33.499Z] [BOT] 4. #📣・marketing-jobs: 1 posts
[2026-01-01T22:04:33.499Z] [BOT] [STATS] Channel stats saved
[2026-01-01T22:04:35.511Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2682) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*