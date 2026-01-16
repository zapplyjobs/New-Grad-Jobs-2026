# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T21:43:02.417Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T21:42:11.975Z] ========================================
[2026-01-16T21:42:11.977Z] Discord Bot Execution Log
[2026-01-16T21:42:11.977Z] Environment: GitHub Actions
[2026-01-16T21:42:11.977Z] Node Version: v20.19.6
[2026-01-16T21:42:11.977Z] ========================================
[2026-01-16T21:42:11.977Z] Environment Variables Check:
[2026-01-16T21:42:11.977Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T21:42:11.977Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T21:42:11.977Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T21:42:11.977Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T21:42:11.977Z] 
Multi-Channel Configuration:
[2026-01-16T21:42:11.978Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T21:42:11.978Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T21:42:11.978Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T21:42:11.978Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T21:42:11.978Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T21:42:11.978Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T21:42:11.978Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T21:42:11.978Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T21:42:11.978Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T21:42:11.978Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T21:42:11.978Z] 
Data Files Check:
[2026-01-16T21:42:11.979Z] .github/data/new_jobs.json: ✅ Exists (10 items, 9358 bytes)
[2026-01-16T21:42:11.987Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1154130 bytes)
[2026-01-16T21:42:11.987Z] 
========================================
[2026-01-16T21:42:11.987Z] Starting Enhanced Discord Bot...
[2026-01-16T21:42:11.987Z] ========================================
[2026-01-16T21:42:12.511Z] [BOT] ✅ Loaded V2 database: 2128 jobs
[2026-01-16T21:42:13.491Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T21:42:13.491Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T21:42:13.491Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T21:42:13.606Z] [BOT] ✅ Loaded pending queue: 2787 total (2767 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Machine Learning Researcher at Citadel Securities
[2026-01-16T21:42:13.610Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T21:42:13.610Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T21:42:13.610Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T21:42:13.611Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-16T21:42:13.611Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-16T21:42:13.611Z] [BOT] - Cloud Network Engineer Graduate(Physical Network Infra) @ ByteDance: san jose, seattle
   - Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ByteDance: seattle, san jose
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T21:42:13.614Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-16T21:42:13.615Z] [BOT] 📍 [ROUTING] "Machine Learning Researcher" @ ORG_e5deb41a Securities
[2026-01-16T21:42:13.615Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T21:42:13.632Z] [BOT ERROR] (node:3204) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T21:42:13.876Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Researcher @ ORG_e5deb41a Securities in #🤖・ai-jobs
[2026-01-16T21:42:13.876Z] [BOT] ✅ Industry: Machine Learning Researcher @ ORG_e5deb41a Securities
[2026-01-16T21:42:15.606Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Researcher @ ORG_e5deb41a Securities in #🗽・new-york
[2026-01-16T21:42:15.606Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-16T21:42:17.107Z] [BOT] 💾 Marked as posted: Machine Learning Researcher @ ORG_e5deb41a Securities (instance #1)
[2026-01-16T21:42:17.107Z] [BOT] 💾 BEFORE ARCHIVING: 2129 jobs in database
[2026-01-16T21:42:17.108Z] [BOT] ✅ No jobs to archive (all 2129 jobs within 7-day window)
[2026-01-16T21:42:17.125Z] [BOT] 💾 Saved posted_jobs.json: 2129 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:42:20.126Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-16T21:42:20.127Z] [BOT] 📍 [ROUTING] "Cloud Network Engineer Graduate(Physical Network Infra)" @ ORG_08c9a13c
[2026-01-16T21:42:20.127Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:42:20.424Z] [BOT] ✅ Created forum post: 🏢 Cloud Network Engineer Graduate(Physical Network Infra) @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-16T21:42:20.424Z] [BOT] ✅ Industry: Cloud Network Engineer Graduate(Physical Network Infra) @ ORG_08c9a13c
[2026-01-16T21:42:22.122Z] [BOT] ✅ Created forum post: 🏢 Cloud Network Engineer Graduate(Physical Network Infra) @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-16T21:42:22.123Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T21:42:23.623Z] [BOT] 💾 Marked as posted: Cloud Network Engineer Graduate(Physical Network Infra) @ ORG_08c9a13c (instance #1)
[2026-01-16T21:42:23.624Z] [BOT] 💾 BEFORE ARCHIVING: 2130 jobs in database
[2026-01-16T21:42:23.625Z] [BOT] ✅ No jobs to archive (all 2130 jobs within 7-day window)
[2026-01-16T21:42:23.640Z] [BOT] 💾 Saved posted_jobs.json: 2130 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:42:23.641Z] [BOT] 💾 Marked as posted: Cloud Network Engineer Graduate(Physical Network Infra) @ ORG_08c9a13c (instance #1)
💾 BEFORE ARCHIVING: 2131 jobs in database
[2026-01-16T21:42:23.642Z] [BOT] ✅ No jobs to archive (all 2131 jobs within 7-day window)
[2026-01-16T21:42:23.657Z] [BOT] 💾 Saved posted_jobs.json: 2131 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:42:23.658Z] [BOT] 📍 [ROUTING] "Network Engineer Graduate (Physical Network Infra)" @ ORG_08c9a13c
[2026-01-16T21:42:23.658Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:42:23.899Z] [BOT] ✅ Created forum post: 🏢 Network Engineer Graduate (Physical Network Infra) @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-16T21:42:23.900Z] [BOT] ✅ Industry: Network Engineer Graduate (Physical Network Infra) @ ORG_08c9a13c
[2026-01-16T21:42:25.602Z] [BOT] ✅ Created forum post: 🏢 Network Engineer Graduate (Physical Network Infra) @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T21:42:27.103Z] [BOT] 💾 Marked as posted: Network Engineer Graduate (Physical Network Infra) @ ORG_08c9a13c (instance #1)
[2026-01-16T21:42:27.103Z] [BOT] 💾 BEFORE ARCHIVING: 2132 jobs in database
[2026-01-16T21:42:27.104Z] [BOT] ✅ No jobs to archive (all 2132 jobs within 7-day window)
[2026-01-16T21:42:27.117Z] [BOT] 💾 Saved posted_jobs.json: 2132 active jobs
[2026-01-16T21:42:27.117Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T21:42:27.118Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Edge Platform)" @ ORG_08c9a13c
[2026-01-16T21:42:27.118Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:42:27.317Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Edge Platform) @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-16T21:42:27.317Z] [BOT] ✅ Industry: Software Engineer Graduate (Edge Platform) @ ORG_08c9a13c
[2026-01-16T21:42:28.984Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Edge Platform) @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T21:42:30.485Z] [BOT] 💾 Marked as posted: Software Engineer Graduate (Edge Platform) @ ORG_08c9a13c (instance #1)
[2026-01-16T21:42:30.485Z] [BOT] 💾 BEFORE ARCHIVING: 2133 jobs in database
[2026-01-16T21:42:30.486Z] [BOT] ✅ No jobs to archive (all 2133 jobs within 7-day window)
[2026-01-16T21:42:30.500Z] [BOT] 💾 Saved posted_jobs.json: 2133 active jobs
[2026-01-16T21:42:30.500Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T21:42:30.501Z] [BOT] 📍 [ROUTING] "Site Reliability Engineer Graduate (Data Infrastructure)" @ ORG_08c9a13c
[2026-01-16T21:42:30.501Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:42:30.683Z] [BOT] ✅ Created forum post: 🏢 Site Reliability Engineer Graduate (Data Infrastructure) @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-16T21:42:30.683Z] [BOT] ✅ Industry: Site Reliability Engineer Graduate (Data Infrastructure) @ ORG_08c9a13c
[2026-01-16T21:42:32.368Z] [BOT] ✅ Created forum post: 🏢 Site Reliability Engineer Graduate (Data Infrastructure) @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-16T21:42:33.870Z] [BOT] 💾 Marked as posted: Site Reliability Engineer Graduate (Data Infrastructure) @ ORG_08c9a13c (instance #1)
[2026-01-16T21:42:33.870Z] [BOT] 💾 BEFORE ARCHIVING: 2134 jobs in database
[2026-01-16T21:42:33.871Z] [BOT] ✅ No jobs to archive (all 2134 jobs within 7-day window)
[2026-01-16T21:42:33.884Z] [BOT] 💾 Saved posted_jobs.json: 2134 active jobs
[2026-01-16T21:42:33.884Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T21:42:33.884Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Commerce Ads)" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:42:34.123Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Commerce Ads) @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate (Commerce Ads) @ ORG_1bb6fcfb
[2026-01-16T21:42:35.934Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Commerce Ads) @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-16T21:42:35.935Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T21:42:37.436Z] [BOT] 💾 Marked as posted: Software Engineer Graduate (Commerce Ads) @ ORG_1bb6fcfb (instance #1)
[2026-01-16T21:42:37.436Z] [BOT] 💾 BEFORE ARCHIVING: 2135 jobs in database
[2026-01-16T21:42:37.437Z] [BOT] ✅ No jobs to archive (all 2135 jobs within 7-day window)
[2026-01-16T21:42:37.451Z] [BOT] 💾 Saved posted_jobs.json: 2135 active jobs
[2026-01-16T21:42:37.451Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T21:42:37.451Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Media Platform)" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:42:37.887Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Media Platform) @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-16T21:42:37.887Z] [BOT] ✅ Industry: Software Engineer Graduate (Media Platform) @ ORG_1bb6fcfb
[2026-01-16T21:42:39.614Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Media Platform) @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T21:42:41.114Z] [BOT] 💾 Marked as posted: Software Engineer Graduate (Media Platform) @ ORG_1bb6fcfb (instance #1)
[2026-01-16T21:42:41.115Z] [BOT] 💾 BEFORE ARCHIVING: 2136 jobs in database
[2026-01-16T21:42:41.116Z] [BOT] ✅ No jobs to archive (all 2136 jobs within 7-day window)
[2026-01-16T21:42:41.130Z] [BOT] 💾 Saved posted_jobs.json: 2136 active jobs
[2026-01-16T21:42:41.130Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer Graduate (Foundation Platform)" @ ORG_1bb6fcfb
[2026-01-16T21:42:41.131Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:42:41.516Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Foundation Platform) @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-16T21:42:41.516Z] [BOT] ✅ Industry: Software Engineer Graduate (Foundation Platform) @ ORG_1bb6fcfb
[2026-01-16T21:42:43.373Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Foundation Platform) @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-16T21:42:43.373Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T21:42:44.874Z] [BOT] 💾 Marked as posted: Software Engineer Graduate (Foundation Platform) @ ORG_1bb6fcfb (instance #1)
[2026-01-16T21:42:44.874Z] [BOT] 💾 BEFORE ARCHIVING: 2137 jobs in database
[2026-01-16T21:42:44.875Z] [BOT] ✅ No jobs to archive (all 2137 jobs within 7-day window)
[2026-01-16T21:42:44.888Z] [BOT] 💾 Saved posted_jobs.json: 2137 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:42:44.889Z] [BOT] 📍 [ROUTING] "Product Security Engineer" @ ORG_4cc4e63c
[2026-01-16T21:42:44.889Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:42:45.267Z] [BOT] ✅ Created forum post: 🏢 Product Security Engineer @ ORG_4cc4e63c in #💻・tech-jobs
  ✅ Industry: Product Security Engineer @ ORG_4cc4e63c
[2026-01-16T21:42:47.366Z] [BOT] ✅ Created forum post: 🏢 Product Security Engineer @ ORG_4cc4e63c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T21:42:48.867Z] [BOT] 💾 Marked as posted: Product Security Engineer @ ORG_4cc4e63c (instance #1)
[2026-01-16T21:42:48.867Z] [BOT] 💾 BEFORE ARCHIVING: 2138 jobs in database
[2026-01-16T21:42:48.868Z] [BOT] ✅ No jobs to archive (all 2138 jobs within 7-day window)
[2026-01-16T21:42:48.883Z] [BOT] 💾 Saved posted_jobs.json: 2138 active jobs
[2026-01-16T21:42:48.883Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T21:42:51.884Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-16T21:42:51.884Z] [BOT] 📍 [ROUTING] "Software Engineer - Python - Cloud" @ ORG_782621d0
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-16T21:42:51.884Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T21:42:52.113Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Python - Cloud @ ORG_782621d0 in #📈・JID_fb739488
  ✅ Industry: Software Engineer - Python - Cloud @ ORG_782621d0
[2026-01-16T21:42:54.223Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Python - Cloud @ ORG_782621d0 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T21:42:55.724Z] [BOT] 💾 Marked as posted: Software Engineer - Python - Cloud @ ORG_782621d0 (instance #1)
[2026-01-16T21:42:55.724Z] [BOT] 💾 BEFORE ARCHIVING: 2139 jobs in database
[2026-01-16T21:42:55.726Z] [BOT] ✅ No jobs to archive (all 2139 jobs within 7-day window)
[2026-01-16T21:42:55.738Z] [BOT] 💾 Saved posted_jobs.json: 2139 active jobs
[2026-01-16T21:42:55.739Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T21:42:58.739Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T21:42:58.740Z] [BOT] ⏭️  Skipping duplicate: JID_7dd98b4e (posted within 7 days)
[2026-01-16T21:42:58.740Z] [BOT] ⏭️  Skipping duplicate: JID_9e797e73-CH_b4a995b0 (posted within 7 days)
[2026-01-16T21:42:58.740Z] [BOT] ⏭️  Skipping duplicate: JID_9e797e73-CH_29fb1444 (posted within 7 days)
[2026-01-16T21:42:58.740Z] [BOT] ⏭️  Skipping duplicate: JID_9e797e73-CH_e49e2048 (posted within 7 days)
[2026-01-16T21:42:58.740Z] [BOT] ⏭️  Skipping duplicate: JID_9e797e73-CH_e35097ea (posted within 7 days)
[2026-01-16T21:42:58.741Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_780d031e (posted within 7 days)
[2026-01-16T21:42:58.741Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_52c67f2c (posted within 7 days)
[2026-01-16T21:42:58.741Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_68317bd5 (posted within 7 days)
⏭️  Skipping duplicate: JID_747b71b4 (posted within 7 days)
⏭️  Skipping duplicate: JID_d4e2cf85 (posted within 7 days)
[2026-01-16T21:42:58.855Z] [BOT] ✅ Loaded pending queue: 2787 total (2767 pending, 20 enriched, 0 posted)
[2026-01-16T21:42:59.019Z] [BOT] ✅ Saved pending queue: 2787 total (2767 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-16T21:42:59.019Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-16T21:42:59.077Z] [BOT] 📂 Loaded 4365 existing routing entries
[2026-01-16T21:42:59.141Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-16T21:42:59.141Z] [BOT] Total entries: 4375
   Timestamp: 2026-01-16T21:42:59.124Z
[2026-01-16T21:42:59.142Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T21:42:59.142Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-16T21:42:59.142Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T21:42:59.142Z] [BOT] Last cleanup: Never
   Total posts: 20
[2026-01-16T21:42:59.143Z] [BOT] Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 8 posts
     2. #🌉・san-francisco: 7 posts
     3. #🤖・ai-jobs: 1 posts
     4. #🗽・new-york: 1 posts
     5. #🌧️・seattle: 1 posts
[2026-01-16T21:42:59.143Z] [BOT] [STATS] Channel stats saved
[2026-01-16T21:43:01.165Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3204) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*