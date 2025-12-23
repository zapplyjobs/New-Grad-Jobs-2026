# Discord Bot Execution Audit
**Timestamp:** 2025-12-23T17:37:58.672Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-23T17:37:40.230Z] ========================================
[2025-12-23T17:37:40.232Z] Discord Bot Execution Log
[2025-12-23T17:37:40.232Z] Environment: GitHub Actions
[2025-12-23T17:37:40.232Z] Node Version: v20.19.6
[2025-12-23T17:37:40.232Z] ========================================
[2025-12-23T17:37:40.232Z] Environment Variables Check:
[2025-12-23T17:37:40.232Z] DISCORD_TOKEN: ✅ Set
[2025-12-23T17:37:40.232Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-23T17:37:40.232Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-23T17:37:40.232Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-23T17:37:40.232Z] 
Multi-Channel Configuration:
[2025-12-23T17:37:40.233Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-23T17:37:40.233Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-23T17:37:40.233Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-23T17:37:40.233Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-23T17:37:40.233Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-23T17:37:40.233Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-23T17:37:40.233Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-23T17:37:40.233Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-23T17:37:40.233Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-23T17:37:40.233Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-23T17:37:40.233Z] 
Data Files Check:
[2025-12-23T17:37:40.234Z] .github/data/new_jobs.json: ✅ Exists (3 items, 12944 bytes)
[2025-12-23T17:37:40.236Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 372817 bytes)
[2025-12-23T17:37:40.236Z] 
========================================
[2025-12-23T17:37:40.236Z] Starting Enhanced Discord Bot...
[2025-12-23T17:37:40.236Z] ========================================
[2025-12-23T17:37:40.757Z] [BOT] ✅ Loaded V2 database: 645 jobs
[2025-12-23T17:37:41.565Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-23T17:37:41.565Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-23T17:37:41.566Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-23T17:37:41.566Z] [BOT] 📦 Exporting 3 jobs to encrypted JSON...
[2025-12-23T17:37:41.673Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 160
[2025-12-23T17:37:41.674Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2025-12-23T17:37:41.674Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-23T17:37:41.674Z] [BOT] 📋 After blacklist filter: 2 jobs (1 blacklisted)
[2025-12-23T17:37:41.675Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2025-12-23T17:37:41.675Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2025-12-23T17:37:41.675Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-23T17:37:41.676Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-23T17:37:41.678Z] [BOT] 📍 [ROUTING] "Software Engineer - Manufacturing Integration" @ ORG_e03f7067 Technologies
[2025-12-23T17:37:41.678Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-23T17:37:41.682Z] [BOT ERROR] (node:2336) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-23T17:37:42.072Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Manufacturing Integration @ ORG_e03f7067 Technologies in #💻・tech-jobs
  ✅ Industry: Software Engineer - Manufacturing Integration @ ORG_e03f7067 Technologies
[2025-12-23T17:37:44.081Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Manufacturing Integration @ ORG_e03f7067 Technologies in #🌧️・seattle
[2025-12-23T17:37:44.082Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-23T17:37:45.582Z] [BOT] 💾 Marked as posted: Software Engineer - Manufacturing Integration @ ORG_e03f7067 Technologies (instance #1)
[2025-12-23T17:37:45.582Z] [BOT] 💾 BEFORE ARCHIVING: 646 jobs in database
[2025-12-23T17:37:45.583Z] [BOT] ✅ No jobs to archive (all 646 jobs within 7-day window)
[2025-12-23T17:37:45.595Z] [BOT] 💾 Saved posted_jobs.json: 646 active jobs
[2025-12-23T17:37:45.596Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-23T17:37:48.597Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-23T17:37:48.597Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_d6d2009d
   Category: AI (matched: "machine learning")
[2025-12-23T17:37:48.598Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-23T17:37:49.124Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_d6d2009d in #🤖・ai-jobs
[2025-12-23T17:37:49.124Z] [BOT] ✅ Industry: Data Scientist @ ORG_d6d2009d
[2025-12-23T17:37:50.813Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_d6d2009d in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-23T17:37:52.313Z] [BOT] 💾 Marked as posted: Data Scientist @ ORG_d6d2009d (instance #1)
[2025-12-23T17:37:52.314Z] [BOT] 💾 BEFORE ARCHIVING: 647 jobs in database
[2025-12-23T17:37:52.314Z] [BOT] ✅ No jobs to archive (all 647 jobs within 7-day window)
[2025-12-23T17:37:52.320Z] [BOT] 💾 Saved posted_jobs.json: 647 active jobs
[2025-12-23T17:37:52.321Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-23T17:37:55.322Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-23T17:37:55.322Z] [BOT] ⏭️  Skipping duplicate: JID_758e78d3 (posted within 7 days)
[2025-12-23T17:37:55.322Z] [BOT] ⏭️  Skipping duplicate: JID_f9bf5b9a (posted within 7 days)
[2025-12-23T17:37:55.323Z] [BOT] ✅ Loaded pending queue: 3 total (0 pending, 3 enriched, 0 posted)
[2025-12-23T17:37:55.324Z] [BOT] ✅ Saved pending queue: 3 total (0 pending, 1 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2025-12-23T17:37:55.324Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-23T17:37:55.366Z] [BOT] 📂 Loaded 1038 existing routing entries
[2025-12-23T17:37:55.411Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-12-23T17:37:55.411Z] [BOT] New entries: 2
   Total entries: 1040
   Timestamp: 2025-12-23T17:37:55.405Z
[2025-12-23T17:37:55.411Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_805c58df.jsonl
[2025-12-23T17:37:55.412Z] [BOT] Total attempts: 5
   Successful: 4
   Failed: 0
   Skipped: 1
[2025-12-23T17:37:55.412Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🌧️・seattle: 1 posts
     3. #🤖・ai-jobs: 1 posts
     4. #💻・remote-usa: 1 posts
[2025-12-23T17:37:55.412Z] [BOT] [STATS] Channel stats saved
[2025-12-23T17:37:57.424Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2336) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*