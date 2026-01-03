# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T19:24:45.796Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T19:24:05.063Z] ========================================
[2026-01-03T19:24:05.065Z] Discord Bot Execution Log
[2026-01-03T19:24:05.065Z] Environment: GitHub Actions
[2026-01-03T19:24:05.065Z] Node Version: v20.19.6
[2026-01-03T19:24:05.065Z] ========================================
[2026-01-03T19:24:05.065Z] Environment Variables Check:
[2026-01-03T19:24:05.065Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T19:24:05.065Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T19:24:05.065Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T19:24:05.066Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T19:24:05.066Z] 
Multi-Channel Configuration:
[2026-01-03T19:24:05.066Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T19:24:05.066Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T19:24:05.066Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T19:24:05.066Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T19:24:05.066Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T19:24:05.066Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T19:24:05.066Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T19:24:05.066Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T19:24:05.066Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T19:24:05.066Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T19:24:05.067Z] 
Data Files Check:
[2026-01-03T19:24:05.068Z] .github/data/new_jobs.json: ✅ Exists (10 items, 202539 bytes)
[2026-01-03T19:24:05.071Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 371318 bytes)
[2026-01-03T19:24:05.071Z] 
========================================
[2026-01-03T19:24:05.071Z] Starting Enhanced Discord Bot...
[2026-01-03T19:24:05.071Z] ========================================
[2026-01-03T19:24:05.593Z] [BOT] ✅ Loaded V2 database: 723 jobs
[2026-01-03T19:24:06.355Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T19:24:06.355Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T19:24:06.356Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T19:24:06.357Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T19:24:06.426Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T19:24:06.516Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T19:24:06.518Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T19:24:06.518Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T19:24:06.518Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T19:24:06.519Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T19:24:06.519Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T19:24:06.523Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T19:24:06.524Z] [BOT] 📍 [ROUTING] "Global Partner Lead, Deloitte" @ anthropic
[2026-01-03T19:24:06.524Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T19:24:06.529Z] [BOT ERROR] (node:2365) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T19:24:06.773Z] [BOT] ✅ Created forum post: 🏢 Global Partner Lead, Deloitte @ anthropic in #💲・sales-jobs
[2026-01-03T19:24:06.773Z] [BOT] ✅ Industry: Global Partner Lead, Deloitte @ anthropic
[2026-01-03T19:24:08.483Z] [BOT] ✅ Created forum post: 🏢 Global Partner Lead, Deloitte @ anthropic in #🌉・san-francisco
[2026-01-03T19:24:08.483Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T19:24:09.983Z] [BOT] 💾 Marked as posted: Global Partner Lead, Deloitte @ anthropic (instance #1)
[2026-01-03T19:24:09.984Z] [BOT] 💾 BEFORE ARCHIVING: 724 jobs in database
[2026-01-03T19:24:09.984Z] [BOT] ✅ No jobs to archive (all 724 jobs within 7-day window)
[2026-01-03T19:24:09.993Z] [BOT] 💾 Saved posted_jobs.json: 724 active jobs
[2026-01-03T19:24:09.993Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T19:24:09.995Z] [BOT] 📍 [ROUTING] "Global Partner Lead, Accenture" @ anthropic
[2026-01-03T19:24:09.996Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T19:24:10.165Z] [BOT] ✅ Created forum post: 🏢 Global Partner Lead, Accenture @ anthropic in #💲・sales-jobs
[2026-01-03T19:24:10.165Z] [BOT] ✅ Industry: Global Partner Lead, Accenture @ anthropic
[2026-01-03T19:24:11.993Z] [BOT] ✅ Created forum post: 🏢 Global Partner Lead, Accenture @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T19:24:13.494Z] [BOT] 💾 Marked as posted: Global Partner Lead, Accenture @ anthropic (instance #1)
[2026-01-03T19:24:13.494Z] [BOT] 💾 BEFORE ARCHIVING: 725 jobs in database
[2026-01-03T19:24:13.495Z] [BOT] ✅ No jobs to archive (all 725 jobs within 7-day window)
[2026-01-03T19:24:13.500Z] [BOT] 💾 Saved posted_jobs.json: 725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:24:13.501Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ anthropic
[2026-01-03T19:24:13.501Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T19:24:13.753Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ anthropic in #💲・sales-jobs
[2026-01-03T19:24:13.753Z] [BOT] ✅ Industry: Enterprise Account Executive @ anthropic
[2026-01-03T19:24:15.473Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ anthropic in #🗽・new-york
[2026-01-03T19:24:15.474Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T19:24:16.975Z] [BOT] 💾 Marked as posted: Enterprise Account Executive @ anthropic (instance #1)
[2026-01-03T19:24:16.975Z] [BOT] 💾 BEFORE ARCHIVING: 726 jobs in database
[2026-01-03T19:24:16.977Z] [BOT] ✅ No jobs to archive (all 726 jobs within 7-day window)
[2026-01-03T19:24:16.983Z] [BOT] 💾 Saved posted_jobs.json: 726 active jobs
[2026-01-03T19:24:16.983Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T19:24:19.983Z] [BOT] 📌 Posting 7 jobs to #🤖・ai-jobs
[2026-01-03T19:24:19.984Z] [BOT] 📍 [ROUTING] "Engagement Manager, Applied AI" @ anthropic
[2026-01-03T19:24:19.985Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T19:24:20.322Z] [BOT] ✅ Created forum post: 🏢 Engagement Manager, Applied AI @ anthropic in #🤖・ai-jobs
[2026-01-03T19:24:20.322Z] [BOT] ✅ Industry: Engagement Manager, Applied AI @ anthropic
[2026-01-03T19:24:22.190Z] [BOT] ✅ Created forum post: 🏢 Engagement Manager, Applied AI @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T19:24:23.691Z] [BOT] 💾 Marked as posted: Engagement Manager, Applied AI @ anthropic (instance #1)
[2026-01-03T19:24:23.692Z] [BOT] 💾 BEFORE ARCHIVING: 727 jobs in database
[2026-01-03T19:24:23.692Z] [BOT] ✅ No jobs to archive (all 727 jobs within 7-day window)
[2026-01-03T19:24:23.698Z] [BOT] 💾 Saved posted_jobs.json: 727 active jobs
[2026-01-03T19:24:23.699Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T19:24:23.699Z] [BOT] 📍 [ROUTING] "Partner Solutions Architect, Applied AI" @ anthropic
[2026-01-03T19:24:23.699Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-03T19:24:23.927Z] [BOT] ✅ Created forum post: 🏢 Partner Solutions Architect, Applied AI @ anthropic in #🤖・ai-jobs
  ✅ Industry: Partner Solutions Architect, Applied AI @ anthropic
[2026-01-03T19:24:25.753Z] [BOT] ✅ Created forum post: 🏢 Partner Solutions Architect, Applied AI @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T19:24:27.254Z] [BOT] 💾 Marked as posted: Partner Solutions Architect, Applied AI @ anthropic (instance #1)
[2026-01-03T19:24:27.254Z] [BOT] 💾 BEFORE ARCHIVING: 728 jobs in database
[2026-01-03T19:24:27.254Z] [BOT] ✅ No jobs to archive (all 728 jobs within 7-day window)
[2026-01-03T19:24:27.261Z] [BOT] 💾 Saved posted_jobs.json: 728 active jobs
[2026-01-03T19:24:27.261Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T19:24:27.261Z] [BOT] 📍 [ROUTING] "Associate Manager, Compliance" @ coinbase
[2026-01-03T19:24:27.261Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:24:27.441Z] [BOT] ✅ Created forum post: 🏢 Associate Manager, Compliance @ coinbase in #🤖・ai-jobs
[2026-01-03T19:24:27.441Z] [BOT] ✅ Industry: Associate Manager, Compliance @ coinbase
[2026-01-03T19:24:28.943Z] [BOT] 💾 Marked as posted: Associate Manager, Compliance @ coinbase (instance #1)
[2026-01-03T19:24:28.943Z] [BOT] 💾 BEFORE ARCHIVING: 729 jobs in database
[2026-01-03T19:24:28.944Z] [BOT] ✅ No jobs to archive (all 729 jobs within 7-day window)
[2026-01-03T19:24:28.950Z] [BOT] 💾 Saved posted_jobs.json: 729 active jobs
[2026-01-03T19:24:28.950Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T19:24:28.950Z] [BOT] 📍 [ROUTING] "Associate Manager, EDD Compliance" @ coinbase
[2026-01-03T19:24:28.950Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:24:29.239Z] [BOT] ✅ Created forum post: 🏢 Associate Manager, EDD Compliance @ coinbase in #🤖・ai-jobs
[2026-01-03T19:24:29.239Z] [BOT] ✅ Industry: Associate Manager, EDD Compliance @ coinbase
[2026-01-03T19:24:30.740Z] [BOT] 💾 Marked as posted: Associate Manager, EDD Compliance @ coinbase (instance #1)
[2026-01-03T19:24:30.740Z] [BOT] 💾 BEFORE ARCHIVING: 730 jobs in database
[2026-01-03T19:24:30.741Z] [BOT] ✅ No jobs to archive (all 730 jobs within 7-day window)
[2026-01-03T19:24:30.746Z] [BOT] 💾 Saved posted_jobs.json: 730 active jobs
[2026-01-03T19:24:30.746Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T19:24:30.747Z] [BOT] 📍 [ROUTING] "Associate Manager, Family Office Security" @ coinbase
[2026-01-03T19:24:30.747Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T19:24:31.336Z] [BOT] ✅ Created forum post: 🏢 Associate Manager, Family Office Security @ coinbase in #🤖・ai-jobs
  ✅ Industry: Associate Manager, Family Office Security @ coinbase
[2026-01-03T19:24:33.039Z] [BOT] ✅ Created forum post: 🏢 Associate Manager, Family Office Security @ coinbase in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-03T19:24:34.541Z] [BOT] 💾 Marked as posted: Associate Manager, Family Office Security @ coinbase (instance #1)
[2026-01-03T19:24:34.541Z] [BOT] 💾 BEFORE ARCHIVING: 731 jobs in database
[2026-01-03T19:24:34.542Z] [BOT] ✅ No jobs to archive (all 731 jobs within 7-day window)
[2026-01-03T19:24:34.547Z] [BOT] 💾 Saved posted_jobs.json: 731 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T19:24:34.548Z] [BOT] 📍 [ROUTING] "Associate Manager, Quality Compliance" @ coinbase
[2026-01-03T19:24:34.548Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T19:24:34.734Z] [BOT] ✅ Created forum post: 🏢 Associate Manager, Quality Compliance @ coinbase in #🤖・ai-jobs
[2026-01-03T19:24:34.734Z] [BOT] ✅ Industry: Associate Manager, Quality Compliance @ coinbase
[2026-01-03T19:24:36.235Z] [BOT] 💾 Marked as posted: Associate Manager, Quality Compliance @ coinbase (instance #1)
[2026-01-03T19:24:36.235Z] [BOT] 💾 BEFORE ARCHIVING: 732 jobs in database
[2026-01-03T19:24:36.236Z] [BOT] ✅ No jobs to archive (all 732 jobs within 7-day window)
[2026-01-03T19:24:36.242Z] [BOT] 💾 Saved posted_jobs.json: 732 active jobs
[2026-01-03T19:24:36.242Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T19:24:36.243Z] [BOT] 📍 [ROUTING] "Associate Manager, Residential Security" @ coinbase
[2026-01-03T19:24:36.243Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T19:24:36.454Z] [BOT] ✅ Created forum post: 🏢 Associate Manager, Residential Security @ coinbase in #🤖・ai-jobs
[2026-01-03T19:24:36.454Z] [BOT] ✅ Industry: Associate Manager, Residential Security @ coinbase
[2026-01-03T19:24:38.232Z] [BOT] ✅ Created forum post: 🏢 Associate Manager, Residential Security @ coinbase in #🦢・los-angeles
[2026-01-03T19:24:38.232Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-03T19:24:39.733Z] [BOT] 💾 Marked as posted: Associate Manager, Residential Security @ coinbase (instance #1)
[2026-01-03T19:24:39.734Z] [BOT] 💾 BEFORE ARCHIVING: 733 jobs in database
[2026-01-03T19:24:39.734Z] [BOT] ✅ No jobs to archive (all 733 jobs within 7-day window)
[2026-01-03T19:24:39.740Z] [BOT] 💾 Saved posted_jobs.json: 733 active jobs
[2026-01-03T19:24:39.740Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T19:24:42.740Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T19:24:42.741Z] [BOT] ⏭️  Skipping duplicate: JID_0e05785c (posted within 7 days)
[2026-01-03T19:24:42.741Z] [BOT] ⏭️  Skipping duplicate: JID_d3893432 (posted within 7 days)
[2026-01-03T19:24:42.741Z] [BOT] ⏭️  Skipping duplicate: JID_2a8c4251 (posted within 7 days)
[2026-01-03T19:24:42.741Z] [BOT] ⏭️  Skipping duplicate: JID_5dac1616 (posted within 7 days)
[2026-01-03T19:24:42.741Z] [BOT] ⏭️  Skipping duplicate: JID_d4f45886 (posted within 7 days)
[2026-01-03T19:24:42.741Z] [BOT] ⏭️  Skipping duplicate: JID_92500131 (posted within 7 days)
[2026-01-03T19:24:42.741Z] [BOT] ⏭️  Skipping duplicate: JID_c2eb788e (posted within 7 days)
[2026-01-03T19:24:42.742Z] [BOT] ⏭️  Skipping duplicate: JID_7f6c28db (posted within 7 days)
⏭️  Skipping duplicate: JID_27942dfd (posted within 7 days)
⏭️  Skipping duplicate: JID_664eef40 (posted within 7 days)
[2026-01-03T19:24:42.795Z] [BOT] ✅ Loaded pending queue: 566 total (546 pending, 20 enriched, 0 posted)
[2026-01-03T19:24:42.850Z] [BOT] ✅ Saved pending queue: 566 total (546 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-03T19:24:42.850Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T19:24:42.896Z] [BOT] 📂 Loaded 1677 existing routing entries
[2026-01-03T19:24:42.944Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1687
[2026-01-03T19:24:42.944Z] [BOT] Timestamp: 2026-01-03T19:24:42.936Z
[2026-01-03T19:24:42.945Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 17
[2026-01-03T19:24:42.945Z] [BOT] Successful: 17
   Failed: 0
   Skipped: 0
[2026-01-03T19:24:42.945Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T19:24:42.945Z] [BOT] Last cleanup: Never
   Total posts: 17
   Channels used: 5
   Top channels:
     1. #🤖・ai-jobs: 7 posts
[2026-01-03T19:24:42.945Z] [BOT] 2. #🌉・san-francisco: 4 posts
     3. #💲・sales-jobs: 3 posts
     4. #🦢・los-angeles: 2 posts
     5. #🗽・new-york: 1 posts
[2026-01-03T19:24:42.946Z] [BOT] [STATS] Channel stats saved
[2026-01-03T19:24:44.963Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2365) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*