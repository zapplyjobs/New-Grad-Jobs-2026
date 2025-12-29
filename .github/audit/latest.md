# Discord Bot Execution Audit
**Timestamp:** 2025-12-29T18:44:21.156Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-29T18:43:59.592Z] ========================================
[2025-12-29T18:43:59.594Z] Discord Bot Execution Log
[2025-12-29T18:43:59.594Z] Environment: GitHub Actions
[2025-12-29T18:43:59.594Z] Node Version: v20.19.6
[2025-12-29T18:43:59.594Z] ========================================
[2025-12-29T18:43:59.594Z] Environment Variables Check:
[2025-12-29T18:43:59.594Z] DISCORD_TOKEN: ✅ Set
[2025-12-29T18:43:59.594Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-29T18:43:59.594Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-29T18:43:59.594Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-29T18:43:59.595Z] 
Multi-Channel Configuration:
[2025-12-29T18:43:59.595Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-29T18:43:59.595Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-29T18:43:59.595Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-29T18:43:59.595Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-29T18:43:59.595Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-29T18:43:59.595Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-29T18:43:59.595Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-29T18:43:59.595Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-29T18:43:59.595Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-29T18:43:59.595Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-29T18:43:59.595Z] 
Data Files Check:
[2025-12-29T18:43:59.596Z] .github/data/new_jobs.json: ✅ Exists (3 items, 18688 bytes)
[2025-12-29T18:43:59.597Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 125641 bytes)
[2025-12-29T18:43:59.597Z] 
========================================
[2025-12-29T18:43:59.597Z] Starting Enhanced Discord Bot...
[2025-12-29T18:43:59.597Z] ========================================
[2025-12-29T18:44:00.128Z] [BOT] ✅ Loaded V2 database: 206 jobs
[2025-12-29T18:44:00.789Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2025-12-29T18:44:00.790Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-29T18:44:00.790Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-29T18:44:00.790Z] [BOT] 📦 Exporting 3 jobs to encrypted JSON...
[2025-12-29T18:44:00.886Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 63
[2025-12-29T18:44:00.887Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2025-12-29T18:44:00.887Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2025-12-29T18:44:00.887Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2025-12-29T18:44:00.888Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2025-12-29T18:44:00.888Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-29T18:44:00.889Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-29T18:44:00.890Z] [BOT] 📍 [ROUTING] "Data Scientist Assistant" @ ORG_0baaf6f2 Institutes for Research
[2025-12-29T18:44:00.891Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-29T18:44:00.895Z] [BOT ERROR] (node:2551) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-29T18:44:01.100Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Assistant @ ORG_0baaf6f2 Institutes for Research in #🤖・ai-jobs
  ✅ Industry: Data Scientist Assistant @ ORG_0baaf6f2 Institutes for Research
[2025-12-29T18:44:02.965Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Assistant @ ORG_0baaf6f2 Institutes for Research in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-29T18:44:04.466Z] [BOT] 💾 Marked as posted: Data Scientist Assistant @ ORG_0baaf6f2 Institutes for Research (instance #1)
[2025-12-29T18:44:04.466Z] [BOT] 💾 BEFORE ARCHIVING: 207 jobs in database
[2025-12-29T18:44:04.467Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-29T18:44:04.472Z] [BOT] 📦 Archived 127 jobs to 2025-12.json (127 total in archive)
[2025-12-29T18:44:04.472Z] [BOT] ✅ Archiving complete: 127 archived, 80 active
[2025-12-29T18:44:04.474Z] [BOT] 💾 Saved posted_jobs.json: 80 active jobs
[2025-12-29T18:44:04.474Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-29T18:44:04.475Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer - Data Pipelines" @ ORG_4709bc89
[2025-12-29T18:44:04.475Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-29T18:44:04.925Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - Data Pipelines @ ORG_4709bc89 in #🤖・ai-jobs
[2025-12-29T18:44:04.925Z] [BOT] ✅ Industry: Machine Learning Engineer - Data Pipelines @ ORG_4709bc89
[2025-12-29T18:44:06.645Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - Data Pipelines @ ORG_4709bc89 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-29T18:44:08.145Z] [BOT] 💾 Marked as posted: Machine Learning Engineer - Data Pipelines @ ORG_4709bc89 (instance #1)
[2025-12-29T18:44:08.145Z] [BOT] 💾 BEFORE ARCHIVING: 81 jobs in database
✅ No jobs to archive (all 81 jobs within 7-day window)
[2025-12-29T18:44:08.147Z] [BOT] 💾 Saved posted_jobs.json: 81 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-29T18:44:11.148Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-29T18:44:11.149Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_d6d2009d
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-29T18:44:11.422Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_d6d2009d in #💻・tech-jobs
  ✅ Industry: Junior Software Engineer @ ORG_d6d2009d
[2025-12-29T18:44:13.340Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_d6d2009d in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-29T18:44:14.840Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_d6d2009d (instance #1)
[2025-12-29T18:44:14.840Z] [BOT] 💾 BEFORE ARCHIVING: 82 jobs in database
✅ No jobs to archive (all 82 jobs within 7-day window)
[2025-12-29T18:44:14.842Z] [BOT] 💾 Saved posted_jobs.json: 82 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-29T18:44:17.843Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-12-29T18:44:17.843Z] [BOT] ⏭️  Skipping duplicate: JID_228c7620 (posted within 7 days)
[2025-12-29T18:44:17.843Z] [BOT] ⏭️  Skipping duplicate: JID_5612b53d-analyst_10074067-wd (posted within 7 days)
⏭️  Skipping duplicate: JID_bffdb759 (posted within 7 days)
[2025-12-29T18:44:17.844Z] [BOT] ✅ Loaded pending queue: 3 total (0 pending, 3 enriched, 0 posted)
[2025-12-29T18:44:17.845Z] [BOT] ✅ Saved pending queue: 3 total (0 pending, 0 enriched, 3 posted)
[2025-12-29T18:44:17.845Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-29T18:44:17.887Z] [BOT] 📂 Loaded 1086 existing routing entries
[2025-12-29T18:44:17.933Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2025-12-29T18:44:17.933Z] [BOT] Total entries: 1089
   Timestamp: 2025-12-29T18:44:17.927Z
[2025-12-29T18:44:17.933Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_268baebc.jsonl
[2025-12-29T18:44:17.933Z] [BOT] Total attempts: 6
   Successful: 6
   Failed: 0
   Skipped: 0
[2025-12-29T18:44:17.934Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-29T18:44:17.934Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 4
   Top channels:
[2025-12-29T18:44:17.934Z] [BOT] 1. #🤖・ai-jobs: 2 posts
     2. #💻・remote-usa: 2 posts
     3. #🗽・new-york: 1 posts
     4. #💻・tech-jobs: 1 posts
[2025-12-29T18:44:17.934Z] [BOT] [STATS] Channel stats saved
[2025-12-29T18:44:19.947Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2551) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*