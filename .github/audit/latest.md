# Discord Bot Execution Audit
**Timestamp:** 2025-12-22T10:39:37.872Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-22T10:39:21.199Z] ========================================
[2025-12-22T10:39:21.200Z] Discord Bot Execution Log
[2025-12-22T10:39:21.201Z] Environment: GitHub Actions
[2025-12-22T10:39:21.201Z] Node Version: v20.19.6
[2025-12-22T10:39:21.201Z] ========================================
[2025-12-22T10:39:21.201Z] Environment Variables Check:
[2025-12-22T10:39:21.201Z] DISCORD_TOKEN: ✅ Set
[2025-12-22T10:39:21.201Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-22T10:39:21.201Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-22T10:39:21.201Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-22T10:39:21.201Z] 
Multi-Channel Configuration:
[2025-12-22T10:39:21.201Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-22T10:39:21.201Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-22T10:39:21.201Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-22T10:39:21.201Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-22T10:39:21.202Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-22T10:39:21.202Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-22T10:39:21.202Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-22T10:39:21.202Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-22T10:39:21.202Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-22T10:39:21.202Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-22T10:39:21.202Z] 
Data Files Check:
[2025-12-22T10:39:21.202Z] .github/data/new_jobs.json: ✅ Exists (3 items, 7577 bytes)
[2025-12-22T10:39:21.206Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 535599 bytes)
[2025-12-22T10:39:21.206Z] 
========================================
[2025-12-22T10:39:21.206Z] Starting Enhanced Discord Bot...
[2025-12-22T10:39:21.206Z] ========================================
[2025-12-22T10:39:21.727Z] [BOT] ✅ Loaded V2 database: 915 jobs
[2025-12-22T10:39:22.147Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-22T10:39:22.147Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-22T10:39:22.148Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-22T10:39:22.148Z] [BOT] 📦 Exporting 3 jobs to encrypted JSON...
[2025-12-22T10:39:22.258Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 164
[2025-12-22T10:39:22.260Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2025-12-22T10:39:22.260Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-22T10:39:22.260Z] [BOT] 📋 After blacklist filter: 2 jobs (1 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2025-12-22T10:39:22.261Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2025-12-22T10:39:22.261Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
[2025-12-22T10:39:22.261Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-22T10:39:22.263Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-22T10:39:22.264Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_44ebd2cb
[2025-12-22T10:39:22.264Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-22T10:39:22.268Z] [BOT ERROR] (node:2464) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-22T10:39:22.421Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_44ebd2cb in #🤖・ai-jobs
  ✅ Industry: Junior Software Engineer @ ORG_44ebd2cb
[2025-12-22T10:39:24.255Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_44ebd2cb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-22T10:39:25.756Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_44ebd2cb (instance #1)
[2025-12-22T10:39:25.757Z] [BOT] 💾 BEFORE ARCHIVING: 916 jobs in database
[2025-12-22T10:39:25.757Z] [BOT] ✅ No jobs to archive (all 916 jobs within 7-day window)
[2025-12-22T10:39:25.768Z] [BOT] 💾 Saved posted_jobs.json: 916 active jobs
[2025-12-22T10:39:25.769Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-22T10:39:28.770Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-22T10:39:28.771Z] [BOT] 📍 [ROUTING] "Senior React Engineer - Wealth Management" @ ORG_5e4eb7c5 Bank
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-22T10:39:28.953Z] [BOT] ✅ Created forum post: 🏢 Senior React Engineer - Wealth Management @ ORG_5e4eb7c5 Bank in #💻・tech-jobs
[2025-12-22T10:39:28.953Z] [BOT] ✅ Industry: Senior React Engineer - Wealth Management @ ORG_5e4eb7c5 Bank
[2025-12-22T10:39:30.682Z] [BOT] ✅ Created forum post: 🏢 Senior React Engineer - Wealth Management @ ORG_5e4eb7c5 Bank in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-22T10:39:32.185Z] [BOT] 💾 Marked as posted: Senior React Engineer - Wealth Management @ ORG_5e4eb7c5 Bank (instance #1)
[2025-12-22T10:39:32.185Z] [BOT] 💾 BEFORE ARCHIVING: 917 jobs in database
[2025-12-22T10:39:32.186Z] [BOT] ✅ No jobs to archive (all 917 jobs within 7-day window)
[2025-12-22T10:39:32.194Z] [BOT] 💾 Saved posted_jobs.json: 917 active jobs
[2025-12-22T10:39:32.194Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-22T10:39:35.195Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-22T10:39:35.196Z] [BOT] ⏭️  Skipping duplicate: JID_0b7b19a5 (posted within 7 days)
[2025-12-22T10:39:35.196Z] [BOT] ⏭️  Skipping duplicate: JID_e5aa2072-us_bank_careers-JID_8da27f61-ga_2025-0030119 (posted within 7 days)
[2025-12-22T10:39:35.196Z] [BOT] ✅ Loaded pending queue: 3 total (0 pending, 3 enriched, 0 posted)
[2025-12-22T10:39:35.197Z] [BOT] ✅ Saved pending queue: 3 total (0 pending, 1 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-22T10:39:35.239Z] [BOT] 📂 Loaded 1000 existing routing entries
[2025-12-22T10:39:35.283Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 1002
[2025-12-22T10:39:35.284Z] [BOT] Timestamp: 2025-12-22T10:39:35.279Z
[2025-12-22T10:39:35.284Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_0b37efa6.jsonl
[2025-12-22T10:39:35.284Z] [BOT] Total attempts: 5
   Successful: 4
   Failed: 0
   Skipped: 1
[2025-12-22T10:39:35.284Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
[2025-12-22T10:39:35.284Z] [BOT] 1. #🌉・san-francisco: 2 posts
     2. #🤖・ai-jobs: 1 posts
     3. #💻・tech-jobs: 1 posts
[2025-12-22T10:39:35.284Z] [BOT] [STATS] Channel stats saved
[2025-12-22T10:39:37.296Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2464) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*