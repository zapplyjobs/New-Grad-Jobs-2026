# Discord Bot Execution Audit
**Timestamp:** 2025-12-20T20:04:57.261Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-20T20:04:12.519Z] ========================================
[2025-12-20T20:04:12.521Z] Discord Bot Execution Log
[2025-12-20T20:04:12.521Z] Environment: GitHub Actions
[2025-12-20T20:04:12.521Z] Node Version: v20.19.6
[2025-12-20T20:04:12.521Z] ========================================
[2025-12-20T20:04:12.521Z] Environment Variables Check:
[2025-12-20T20:04:12.521Z] DISCORD_TOKEN: ✅ Set
[2025-12-20T20:04:12.521Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-20T20:04:12.522Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-20T20:04:12.522Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-20T20:04:12.522Z] 
Multi-Channel Configuration:
[2025-12-20T20:04:12.522Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-20T20:04:12.522Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-20T20:04:12.522Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-20T20:04:12.522Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-20T20:04:12.522Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-20T20:04:12.522Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-20T20:04:12.522Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-20T20:04:12.522Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-20T20:04:12.522Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-20T20:04:12.523Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-20T20:04:12.523Z] 
Data Files Check:
[2025-12-20T20:04:12.523Z] .github/data/new_jobs.json: ✅ Exists (10 items, 7034 bytes)
[2025-12-20T20:04:12.526Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 396361 bytes)
[2025-12-20T20:04:12.526Z] 
========================================
[2025-12-20T20:04:12.526Z] Starting Enhanced Discord Bot...
[2025-12-20T20:04:12.526Z] ========================================
[2025-12-20T20:04:13.040Z] [BOT] ✅ Loaded V2 database: 677 jobs
[2025-12-20T20:04:13.651Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-20T20:04:13.652Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-20T20:04:13.652Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-20T20:04:13.652Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-20T20:04:13.697Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-20T20:04:13.741Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 47
[2025-12-20T20:04:13.743Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-20T20:04:13.743Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-20T20:04:13.743Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-20T20:04:13.744Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-20T20:04:13.744Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-20T20:04:13.747Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2025-12-20T20:04:13.748Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - 2025 Start" @ ORG_1bb6fcfb
[2025-12-20T20:04:13.748Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:04:13.764Z] [BOT ERROR] (node:2426) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-20T20:04:13.931Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - 2025 Start @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - 2025 Start @ ORG_1bb6fcfb
[2025-12-20T20:04:15.629Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - 2025 Start @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T20:04:17.131Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - 2025 Start @ ORG_1bb6fcfb (instance #1)
[2025-12-20T20:04:17.132Z] [BOT] 💾 BEFORE ARCHIVING: 678 jobs in database
[2025-12-20T20:04:17.132Z] [BOT] ✅ No jobs to archive (all 678 jobs within 7-day window)
[2025-12-20T20:04:17.141Z] [BOT] 💾 Saved posted_jobs.json: 678 active jobs
[2025-12-20T20:04:17.142Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - CV/Multimodal @ ORG_1bb6fcfb (instance #1)
💾 BEFORE ARCHIVING: 679 jobs in database
[2025-12-20T20:04:17.142Z] [BOT] ✅ No jobs to archive (all 679 jobs within 7-day window)
[2025-12-20T20:04:17.148Z] [BOT] 💾 Saved posted_jobs.json: 679 active jobs
[2025-12-20T20:04:17.148Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:04:17.148Z] [BOT] 📍 [ROUTING] "Engineer Graduate: - Machine Learning Engineer - Local Services Search" @ ORG_1bb6fcfb
[2025-12-20T20:04:17.148Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:04:17.580Z] [BOT] ✅ Created forum post: 🏢 Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-20T20:04:17.580Z] [BOT] ✅ Industry: Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb
[2025-12-20T20:04:19.239Z] [BOT] ✅ Created forum post: 🏢 Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T20:04:20.740Z] [BOT] 💾 Marked as posted: Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb (instance #1)
[2025-12-20T20:04:20.740Z] [BOT] 💾 BEFORE ARCHIVING: 680 jobs in database
[2025-12-20T20:04:20.741Z] [BOT] ✅ No jobs to archive (all 680 jobs within 7-day window)
[2025-12-20T20:04:20.747Z] [BOT] 💾 Saved posted_jobs.json: 680 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T20:04:20.747Z] [BOT] 📍 [ROUTING] "Engineer Graduate: – Machine Learning Engineer Graduate - Search E-Commerce - Seattle 2026 Start PhD" @ ORG_1bb6fcfb
[2025-12-20T20:04:20.748Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:04:20.986Z] [BOT] ✅ Created forum post: 🏢 Engineer Graduate: – Machine Learning Engineer Graduate - Search E-Commerce - Seattle 2026 Start  in #🤖・ai-jobs
[2025-12-20T20:04:20.986Z] [BOT] ✅ Industry: Engineer Graduate: – Machine Learning Engineer Graduate - Search E-Commerce - Seattle 2026 Start PhD @ ORG_1bb6fcfb
[2025-12-20T20:04:22.707Z] [BOT] ✅ Created forum post: 🏢 Engineer Graduate: – Machine Learning Engineer Graduate - Search E-Commerce - Seattle 2026 Start  in #🌧️・seattle
[2025-12-20T20:04:22.707Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-20T20:04:24.208Z] [BOT] 💾 Marked as posted: Engineer Graduate: – Machine Learning Engineer Graduate - Search E-Commerce - Seattle 2026 Start PhD @ ORG_1bb6fcfb (instance #1)
[2025-12-20T20:04:24.209Z] [BOT] 💾 BEFORE ARCHIVING: 681 jobs in database
[2025-12-20T20:04:24.209Z] [BOT] ✅ No jobs to archive (all 681 jobs within 7-day window)
[2025-12-20T20:04:24.216Z] [BOT] 💾 Saved posted_jobs.json: 681 active jobs
[2025-12-20T20:04:24.216Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:04:24.217Z] [BOT] 📍 [ROUTING] "General Hire – Machine Learning Engineer Graduate - 2026 Start","BS/MS" @ ORG_1bb6fcfb
[2025-12-20T20:04:24.217Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:04:24.393Z] [BOT] ✅ Created forum post: 🏢 General Hire – Machine Learning Engineer Graduate - 2026 Start","BS/MS @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: General Hire – Machine Learning Engineer Graduate - 2026 Start","BS/MS @ ORG_1bb6fcfb
[2025-12-20T20:04:26.017Z] [BOT] ✅ Created forum post: 🏢 General Hire – Machine Learning Engineer Graduate - 2026 Start","BS/MS @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T20:04:27.518Z] [BOT] 💾 Marked as posted: General Hire – Machine Learning Engineer Graduate - 2026 Start","BS/MS @ ORG_1bb6fcfb (instance #1)
[2025-12-20T20:04:27.519Z] [BOT] 💾 BEFORE ARCHIVING: 682 jobs in database
[2025-12-20T20:04:27.519Z] [BOT] ✅ No jobs to archive (all 682 jobs within 7-day window)
[2025-12-20T20:04:27.525Z] [BOT] 💾 Saved posted_jobs.json: 682 active jobs
[2025-12-20T20:04:27.525Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:04:27.525Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Machine Learning Engineer - Data-Search-Tiktok Recommendation" @ ORG_1bb6fcfb
[2025-12-20T20:04:27.526Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:04:28.332Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Machine Learning Engineer - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Graduate Engineer - Machine Learning Engineer - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb
[2025-12-20T20:04:29.978Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Machine Learning Engineer - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-20T20:04:31.480Z] [BOT] 💾 Marked as posted: Graduate Engineer - Machine Learning Engineer - Data-Search-Tiktok Recommendation @ ORG_1bb6fcfb (instance #1)
[2025-12-20T20:04:31.480Z] [BOT] 💾 BEFORE ARCHIVING: 683 jobs in database
[2025-12-20T20:04:31.480Z] [BOT] ✅ No jobs to archive (all 683 jobs within 7-day window)
[2025-12-20T20:04:31.488Z] [BOT] 💾 Saved posted_jobs.json: 683 active jobs
[2025-12-20T20:04:31.488Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:04:31.488Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Search Ads Technology" @ ORG_1bb6fcfb
[2025-12-20T20:04:31.489Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:04:31.827Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Search Ads Technology @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Engineer - Search Ads Technology @ ORG_1bb6fcfb
[2025-12-20T20:04:33.452Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Search Ads Technology @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T20:04:34.953Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - Search Ads Technology @ ORG_1bb6fcfb (instance #1)
[2025-12-20T20:04:34.954Z] [BOT] 💾 BEFORE ARCHIVING: 684 jobs in database
[2025-12-20T20:04:34.954Z] [BOT] ✅ No jobs to archive (all 684 jobs within 7-day window)
[2025-12-20T20:04:34.960Z] [BOT] 💾 Saved posted_jobs.json: 684 active jobs
[2025-12-20T20:04:34.960Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:04:37.961Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-20T20:04:37.962Z] [BOT] 📍 [ROUTING] "Graduate Algorithm Engineer" @ ORG_1bb6fcfb
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T20:04:38.221Z] [BOT] ✅ Created forum post: 🏢 Graduate Algorithm Engineer @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Graduate Algorithm Engineer @ ORG_1bb6fcfb
[2025-12-20T20:04:40.007Z] [BOT] ✅ Created forum post: 🏢 Graduate Algorithm Engineer @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T20:04:41.507Z] [BOT] 💾 Marked as posted: Graduate Algorithm Engineer @ ORG_1bb6fcfb (instance #1)
[2025-12-20T20:04:41.508Z] [BOT] 💾 BEFORE ARCHIVING: 685 jobs in database
[2025-12-20T20:04:41.508Z] [BOT] ✅ No jobs to archive (all 685 jobs within 7-day window)
[2025-12-20T20:04:41.515Z] [BOT] 💾 Saved posted_jobs.json: 685 active jobs
[2025-12-20T20:04:41.515Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:04:41.516Z] [BOT] 📍 [ROUTING] "Graduate Engineer" @ ORG_1bb6fcfb
[2025-12-20T20:04:41.516Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T20:04:41.704Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-20T20:04:41.704Z] [BOT] ✅ Industry: Graduate Engineer @ ORG_1bb6fcfb
[2025-12-20T20:04:43.439Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer @ ORG_1bb6fcfb in #🌧️・seattle
[2025-12-20T20:04:43.439Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-20T20:04:44.939Z] [BOT] 💾 Marked as posted: Graduate Engineer @ ORG_1bb6fcfb (instance #1)
[2025-12-20T20:04:44.940Z] [BOT] 💾 BEFORE ARCHIVING: 686 jobs in database
[2025-12-20T20:04:44.940Z] [BOT] ✅ No jobs to archive (all 686 jobs within 7-day window)
[2025-12-20T20:04:44.948Z] [BOT] 💾 Saved posted_jobs.json: 686 active jobs
[2025-12-20T20:04:44.948Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:04:47.949Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-20T20:04:47.949Z] [BOT] 📍 [ROUTING] "Data Engineer Graduate - Multiple Teams" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-20T20:04:48.312Z] [BOT] ✅ Created forum post: 🏢 Data Engineer Graduate - Multiple Teams @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Data Engineer Graduate - Multiple Teams @ ORG_1bb6fcfb
[2025-12-20T20:04:50.052Z] [BOT] ✅ Created forum post: 🏢 Data Engineer Graduate - Multiple Teams @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T20:04:51.553Z] [BOT] 💾 Marked as posted: Data Engineer Graduate - Multiple Teams @ ORG_1bb6fcfb (instance #1)
[2025-12-20T20:04:51.553Z] [BOT] 💾 BEFORE ARCHIVING: 687 jobs in database
[2025-12-20T20:04:51.554Z] [BOT] ✅ No jobs to archive (all 687 jobs within 7-day window)
[2025-12-20T20:04:51.561Z] [BOT] 💾 Saved posted_jobs.json: 687 active jobs
[2025-12-20T20:04:51.561Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:04:54.562Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-20T20:04:54.562Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_c309cf74 (posted within 7 days)
[2025-12-20T20:04:54.562Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_9e609b2f (posted within 7 days)
[2025-12-20T20:04:54.562Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_6ef6fdf8 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_5e88383a (posted within 7 days)
[2025-12-20T20:04:54.563Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_049fadae (posted within 7 days)
[2025-12-20T20:04:54.563Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_9c78e28f (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_0fb3e517 (posted within 7 days)
[2025-12-20T20:04:54.563Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f78a57c6 (posted within 7 days)
[2025-12-20T20:04:54.563Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_4470288e (posted within 7 days)
[2025-12-20T20:04:54.565Z] [BOT] ✅ Loaded pending queue: 263 total (243 pending, 20 enriched, 0 posted)
[2025-12-20T20:04:54.568Z] [BOT] ✅ Saved pending queue: 263 total (243 pending, 11 enriched, 9 posted)
[2025-12-20T20:04:54.569Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-20T20:04:54.610Z] [BOT] 📂 Loaded 753 existing routing entries
[2025-12-20T20:04:54.656Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 762
   Timestamp: 2025-12-20T20:04:54.650Z
📝 Discord posting log saved: .github/logs/JID_8d1a614e.jsonl
   Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 5
   Top channels:
[2025-12-20T20:04:54.656Z] [BOT] 1. #🤖・ai-jobs: 6 posts
[2025-12-20T20:04:54.656Z] [BOT] 2. #🌉・san-francisco: 6 posts
[2025-12-20T20:04:54.656Z] [BOT] 3. #🌧️・seattle: 3 posts
[2025-12-20T20:04:54.656Z] [BOT] 4. #💻・tech-jobs: 2 posts
[2025-12-20T20:04:54.656Z] [BOT] 5. #📈・JID_fb739488: 1 posts
[2025-12-20T20:04:54.657Z] [BOT] [STATS] Channel stats saved
[2025-12-20T20:04:56.669Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2426) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*