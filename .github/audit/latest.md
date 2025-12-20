# Discord Bot Execution Audit
**Timestamp:** 2025-12-20T21:35:33.331Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-20T21:34:55.803Z] ========================================
[2025-12-20T21:34:55.804Z] Discord Bot Execution Log
[2025-12-20T21:34:55.805Z] Environment: GitHub Actions
[2025-12-20T21:34:55.805Z] Node Version: v20.19.6
[2025-12-20T21:34:55.805Z] ========================================
[2025-12-20T21:34:55.805Z] Environment Variables Check:
[2025-12-20T21:34:55.805Z] DISCORD_TOKEN: ✅ Set
[2025-12-20T21:34:55.805Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-20T21:34:55.805Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-20T21:34:55.805Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-20T21:34:55.805Z] 
Multi-Channel Configuration:
[2025-12-20T21:34:55.805Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-20T21:34:55.806Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-20T21:34:55.806Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-20T21:34:55.806Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-20T21:34:55.806Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-20T21:34:55.806Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-20T21:34:55.806Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-20T21:34:55.806Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-20T21:34:55.806Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-20T21:34:55.806Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-20T21:34:55.806Z] 
Data Files Check:
[2025-12-20T21:34:55.807Z] .github/data/new_jobs.json: ✅ Exists (10 items, 24160 bytes)
[2025-12-20T21:34:55.810Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 429416 bytes)
[2025-12-20T21:34:55.810Z] 
========================================
[2025-12-20T21:34:55.810Z] Starting Enhanced Discord Bot...
[2025-12-20T21:34:55.810Z] ========================================
[2025-12-20T21:34:56.353Z] [BOT] ✅ Loaded V2 database: 737 jobs
[2025-12-20T21:34:56.965Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-20T21:34:56.966Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-20T21:34:56.966Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-20T21:34:56.966Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-20T21:34:57.010Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-20T21:34:57.055Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 47
[2025-12-20T21:34:57.057Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-20T21:34:57.058Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-20T21:34:57.058Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-20T21:34:57.059Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
[2025-12-20T21:34:57.059Z] [BOT] (3 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 3 deferred for next run
📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-20T21:34:57.061Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2025-12-20T21:34:57.062Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2025-12-20T21:34:57.062Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T21:34:57.080Z] [BOT ERROR] (node:2870) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-20T21:34:57.267Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-20T21:34:57.267Z] [BOT] ✅ Industry: Machine Learning Graduate @ ORG_08c9a13c
[2025-12-20T21:34:59.092Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-20T21:35:00.592Z] [BOT] 💾 Marked as posted: Machine Learning Graduate @ ORG_08c9a13c (instance #1)
[2025-12-20T21:35:00.593Z] [BOT] 💾 BEFORE ARCHIVING: 738 jobs in database
[2025-12-20T21:35:00.593Z] [BOT] ✅ No jobs to archive (all 738 jobs within 7-day window)
[2025-12-20T21:35:00.604Z] [BOT] 💾 Saved posted_jobs.json: 738 active jobs
[2025-12-20T21:35:00.604Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T21:35:00.604Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Applied Machine Learning - Orchestration" @ ORG_08c9a13c
[2025-12-20T21:35:00.604Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T21:35:00.605Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T21:35:00.794Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-20T21:35:00.794Z] [BOT] ✅ Industry: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c
[2025-12-20T21:35:02.421Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c in #🌉・san-francisco
[2025-12-20T21:35:02.421Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T21:35:03.923Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c (instance #1)
[2025-12-20T21:35:03.923Z] [BOT] 💾 BEFORE ARCHIVING: 739 jobs in database
[2025-12-20T21:35:03.924Z] [BOT] ✅ No jobs to archive (all 739 jobs within 7-day window)
[2025-12-20T21:35:03.929Z] [BOT] 💾 Saved posted_jobs.json: 739 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:35:03.930Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Applied Machine Learning - Training @ ORG_08c9a13c (instance #1)
[2025-12-20T21:35:03.930Z] [BOT] 💾 BEFORE ARCHIVING: 740 jobs in database
[2025-12-20T21:35:03.930Z] [BOT] ✅ No jobs to archive (all 740 jobs within 7-day window)
[2025-12-20T21:35:03.936Z] [BOT] 💾 Saved posted_jobs.json: 740 active jobs
[2025-12-20T21:35:03.936Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Software Engineer Graduate - Applied Machine Learning - Mldev @ ORG_08c9a13c (instance #1)
[2025-12-20T21:35:03.936Z] [BOT] 💾 BEFORE ARCHIVING: 741 jobs in database
[2025-12-20T21:35:03.937Z] [BOT] ✅ No jobs to archive (all 741 jobs within 7-day window)
[2025-12-20T21:35:03.942Z] [BOT] 💾 Saved posted_jobs.json: 741 active jobs
[2025-12-20T21:35:03.942Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Software Engineer Graduate - Applied Machine Learning - Enterprise @ ORG_08c9a13c (instance #1)
[2025-12-20T21:35:03.942Z] [BOT] 💾 BEFORE ARCHIVING: 742 jobs in database
[2025-12-20T21:35:03.943Z] [BOT] ✅ No jobs to archive (all 742 jobs within 7-day window)
[2025-12-20T21:35:03.949Z] [BOT] 💾 Saved posted_jobs.json: 742 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:35:03.949Z] [BOT] 📍 [ROUTING] "Builder – New Grad - Software Engineer" @ ORG_eb020b7a
[2025-12-20T21:35:03.950Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T21:35:04.165Z] [BOT] ✅ Created forum post: 🏢 Builder – New Grad - Software Engineer @ ORG_eb020b7a in #🤖・ai-jobs
[2025-12-20T21:35:04.166Z] [BOT] ✅ Industry: Builder – New Grad - Software Engineer @ ORG_eb020b7a
[2025-12-20T21:35:06.021Z] [BOT] ✅ Created forum post: 🏢 Builder – New Grad - Software Engineer @ ORG_eb020b7a in #🌉・san-francisco
[2025-12-20T21:35:06.022Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T21:35:07.522Z] [BOT] 💾 Marked as posted: Builder – New Grad - Software Engineer @ ORG_eb020b7a (instance #1)
[2025-12-20T21:35:07.523Z] [BOT] 💾 BEFORE ARCHIVING: 743 jobs in database
[2025-12-20T21:35:07.523Z] [BOT] ✅ No jobs to archive (all 743 jobs within 7-day window)
[2025-12-20T21:35:07.530Z] [BOT] 💾 Saved posted_jobs.json: 743 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:35:07.531Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd" @ ORG_08c9a13c
[2025-12-20T21:35:07.531Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T21:35:07.823Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd @ ORG_08c9a13c
[2025-12-20T21:35:09.524Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T21:35:11.026Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd @ ORG_08c9a13c (instance #1)
[2025-12-20T21:35:11.026Z] [BOT] 💾 BEFORE ARCHIVING: 744 jobs in database
[2025-12-20T21:35:11.027Z] [BOT] ✅ No jobs to archive (all 744 jobs within 7-day window)
[2025-12-20T21:35:11.032Z] [BOT] 💾 Saved posted_jobs.json: 744 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:35:11.033Z] [BOT] 📍 [ROUTING] "Software Engineer 3 - Infrastructure - Google Cloud Global Networking" @ ORG_ce770667
[2025-12-20T21:35:11.033Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T21:35:11.245Z] [BOT] ✅ Created forum post: 🟢 Software Engineer 3 - Infrastructure - Google Cloud Global Networking @ ORG_ce770667 in #🤖・ai-jobs
[2025-12-20T21:35:11.245Z] [BOT] ✅ Industry: Software Engineer 3 - Infrastructure - Google Cloud Global Networking @ ORG_ce770667
[2025-12-20T21:35:12.949Z] [BOT] ✅ Created forum post: 🟢 Software Engineer 3 - Infrastructure - Google Cloud Global Networking @ ORG_ce770667 in #☀️・sunnyvale
[2025-12-20T21:35:12.949Z] [BOT] ✅ Location: ☀️・sunnyvale
[2025-12-20T21:35:14.451Z] [BOT] 💾 Marked as posted: Software Engineer 3 - Infrastructure - Google Cloud Global Networking @ ORG_ce770667 (instance #1)
[2025-12-20T21:35:14.451Z] [BOT] 💾 BEFORE ARCHIVING: 745 jobs in database
[2025-12-20T21:35:14.451Z] [BOT] ✅ No jobs to archive (all 745 jobs within 7-day window)
[2025-12-20T21:35:14.459Z] [BOT] 💾 Saved posted_jobs.json: 745 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:35:17.460Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-20T21:35:17.460Z] [BOT] 📍 [ROUTING] "Data Scientist - Experimentation" @ ORG_10ad956d
   Category: DATA-SCIENCE (matched: "data science")
[2025-12-20T21:35:17.460Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-20T21:35:17.460Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-20T21:35:17.644Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Experimentation @ ORG_10ad956d in #📈・JID_fb739488
  ✅ Industry: Data Scientist - Experimentation @ ORG_10ad956d
[2025-12-20T21:35:19.331Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Experimentation @ ORG_10ad956d in #🌉・san-francisco
[2025-12-20T21:35:19.331Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T21:35:20.833Z] [BOT] 💾 Marked as posted: Data Scientist - Experimentation @ ORG_10ad956d (instance #1)
[2025-12-20T21:35:20.834Z] [BOT] 💾 BEFORE ARCHIVING: 746 jobs in database
[2025-12-20T21:35:20.834Z] [BOT] ✅ No jobs to archive (all 746 jobs within 7-day window)
[2025-12-20T21:35:20.841Z] [BOT] 💾 Saved posted_jobs.json: 746 active jobs
[2025-12-20T21:35:20.841Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T21:35:23.842Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-20T21:35:23.843Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - C++" @ ORG_aeb11001 Research Capital
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T21:35:24.503Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad - C++ @ ORG_aeb11001 Research Capital in #💻・tech-jobs
[2025-12-20T21:35:24.504Z] [BOT] ✅ Industry: Software Engineer – New Grad - C++ @ ORG_aeb11001 Research Capital
[2025-12-20T21:35:26.153Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad - C++ @ ORG_aeb11001 Research Capital in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-20T21:35:27.655Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad - C++ @ ORG_aeb11001 Research Capital (instance #1)
[2025-12-20T21:35:27.655Z] [BOT] 💾 BEFORE ARCHIVING: 747 jobs in database
[2025-12-20T21:35:27.656Z] [BOT] ✅ No jobs to archive (all 747 jobs within 7-day window)
[2025-12-20T21:35:27.663Z] [BOT] 💾 Saved posted_jobs.json: 747 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:35:30.663Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2025-12-20T21:35:30.663Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_953d2072-detail (posted within 7 days)
[2025-12-20T21:35:30.663Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_db521b2b-detail (posted within 7 days)
[2025-12-20T21:35:30.664Z] [BOT] ⏭️  Skipping duplicate: JID_5ae4949c (posted within 7 days)
[2025-12-20T21:35:30.664Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_d95b5556-detail (posted within 7 days)
[2025-12-20T21:35:30.664Z] [BOT] ⏭️  Skipping duplicate: JID_de09fe59 (posted within 7 days)
[2025-12-20T21:35:30.664Z] [BOT] ⏭️  Skipping duplicate: JID_bb1deae5 (posted within 7 days)
⏭️  Skipping duplicate: JID_400caf3b (posted within 7 days)
[2025-12-20T21:35:30.666Z] [BOT] ✅ Loaded pending queue: 203 total (183 pending, 20 enriched, 0 posted)
[2025-12-20T21:35:30.670Z] [BOT] ✅ Saved pending queue: 203 total (183 pending, 13 enriched, 7 posted)
[2025-12-20T21:35:30.670Z] [BOT] 📋 Updated queue: marked 7 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-20T21:35:30.713Z] [BOT] 📂 Loaded 809 existing routing entries
[2025-12-20T21:35:30.758Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-12-20T21:35:30.759Z] [BOT] New entries: 7
   Total entries: 816
   Timestamp: 2025-12-20T21:35:30.754Z
[2025-12-20T21:35:30.759Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_8d1a614e.jsonl
[2025-12-20T21:35:30.759Z] [BOT] Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2025-12-20T21:35:30.759Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-20T21:35:30.760Z] [BOT] Last cleanup: Never
   Total posts: 14
   Channels used: 7
   Top channels:
[2025-12-20T21:35:30.760Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #🌉・san-francisco: 4 posts
     3. #🌧️・seattle: 1 posts
     4. #☀️・sunnyvale: 1 posts
     5. #📈・JID_fb739488: 1 posts
[2025-12-20T21:35:30.760Z] [BOT] [STATS] Channel stats saved
[2025-12-20T21:35:32.772Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2870) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*