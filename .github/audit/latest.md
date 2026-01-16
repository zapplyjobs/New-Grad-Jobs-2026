# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T22:36:00.887Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T22:35:14.751Z] ========================================
[2026-01-16T22:35:14.753Z] Discord Bot Execution Log
[2026-01-16T22:35:14.753Z] Environment: GitHub Actions
[2026-01-16T22:35:14.753Z] Node Version: v20.19.6
[2026-01-16T22:35:14.753Z] ========================================
[2026-01-16T22:35:14.753Z] Environment Variables Check:
[2026-01-16T22:35:14.753Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T22:35:14.754Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T22:35:14.754Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T22:35:14.754Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T22:35:14.754Z] 
Multi-Channel Configuration:
[2026-01-16T22:35:14.754Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T22:35:14.754Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T22:35:14.754Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T22:35:14.754Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T22:35:14.754Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T22:35:14.754Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T22:35:14.754Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T22:35:14.754Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T22:35:14.754Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T22:35:14.755Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T22:35:14.755Z] 
Data Files Check:
[2026-01-16T22:35:14.755Z] .github/data/new_jobs.json: ✅ Exists (10 items, 7617 bytes)
[2026-01-16T22:35:14.763Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1174498 bytes)
[2026-01-16T22:35:14.763Z] 
========================================
[2026-01-16T22:35:14.763Z] Starting Enhanced Discord Bot...
[2026-01-16T22:35:14.763Z] ========================================
[2026-01-16T22:35:15.283Z] [BOT] ✅ Loaded V2 database: 2165 jobs
[2026-01-16T22:35:15.768Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T22:35:15.768Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T22:35:15.769Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T22:35:15.887Z] [BOT] ✅ Loaded pending queue: 2781 total (2761 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Entry Level Flight Simulation Software Engineer at Boeing
[2026-01-16T22:35:15.893Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T22:35:15.893Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T22:35:15.893Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T22:35:15.894Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-16T22:35:15.894Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-16T22:35:15.895Z] [BOT] - Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies: dallas, chesterfield
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T22:35:15.897Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-16T22:35:15.898Z] [BOT] 📍 [ROUTING] "Entry Level Flight Simulation Software Engineer" @ ORG_6181447bing
[2026-01-16T22:35:15.898Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:35:15.916Z] [BOT ERROR] (node:2381) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T22:35:16.143Z] [BOT] ✅ Created forum post: 🏢 Entry Level Flight Simulation Software Engineer @ ORG_6181447bing in #💻・tech-jobs
[2026-01-16T22:35:16.144Z] [BOT] ✅ Industry: Entry Level Flight Simulation Software Engineer @ ORG_6181447bing
[2026-01-16T22:35:17.830Z] [BOT] ✅ Created forum post: 🏢 Entry Level Flight Simulation Software Engineer @ ORG_6181447bing in #🌉・san-francisco
[2026-01-16T22:35:17.831Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T22:35:19.332Z] [BOT] 💾 Marked as posted: Entry Level Flight Simulation Software Engineer @ ORG_6181447bing (instance #1)
[2026-01-16T22:35:19.333Z] [BOT] 💾 BEFORE ARCHIVING: 2166 jobs in database
[2026-01-16T22:35:19.334Z] [BOT] ✅ No jobs to archive (all 2166 jobs within 7-day window)
[2026-01-16T22:35:19.348Z] [BOT] 💾 Saved posted_jobs.json: 2166 active jobs
[2026-01-16T22:35:19.348Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T22:35:19.349Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_7b717950
   Category: TECH (matched: "software")
[2026-01-16T22:35:19.349Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:35:19.565Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_7b717950 in #💻・tech-jobs
[2026-01-16T22:35:19.565Z] [BOT] ✅ Industry: Software Engineer I @ ORG_7b717950
[2026-01-16T22:35:21.431Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_7b717950 in #🌉・san-francisco
[2026-01-16T22:35:21.431Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T22:35:22.933Z] [BOT] 💾 Marked as posted: Software Engineer I @ ORG_7b717950 (instance #1)
[2026-01-16T22:35:22.933Z] [BOT] 💾 BEFORE ARCHIVING: 2167 jobs in database
[2026-01-16T22:35:22.934Z] [BOT] ✅ No jobs to archive (all 2167 jobs within 7-day window)
[2026-01-16T22:35:22.947Z] [BOT] 💾 Saved posted_jobs.json: 2167 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:35:22.947Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_fee50aac
   Category: TECH (matched: "software")
[2026-01-16T22:35:22.947Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:35:23.128Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_fee50aac in #💻・tech-jobs
[2026-01-16T22:35:23.128Z] [BOT] ✅ Industry: Software Engineer I @ ORG_fee50aac
[2026-01-16T22:35:24.962Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_fee50aac in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T22:35:26.463Z] [BOT] 💾 Marked as posted: Software Engineer I @ ORG_fee50aac (instance #1)
[2026-01-16T22:35:26.464Z] [BOT] 💾 BEFORE ARCHIVING: 2168 jobs in database
[2026-01-16T22:35:26.466Z] [BOT] ✅ No jobs to archive (all 2168 jobs within 7-day window)
[2026-01-16T22:35:26.481Z] [BOT] 💾 Saved posted_jobs.json: 2168 active jobs
[2026-01-16T22:35:26.482Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T22:35:26.482Z] [BOT] 📍 [ROUTING] "Software Engineer I - Embedded Devices" @ ORG_aea5fbb0
   Category: TECH (matched: "software")
[2026-01-16T22:35:26.482Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:35:26.762Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I - Embedded Devices @ ORG_aea5fbb0 in #💻・tech-jobs
[2026-01-16T22:35:26.762Z] [BOT] ✅ Industry: Software Engineer I - Embedded Devices @ ORG_aea5fbb0
[2026-01-16T22:35:28.472Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I - Embedded Devices @ ORG_aea5fbb0 in #🚌・boston
[2026-01-16T22:35:28.473Z] [BOT] ✅ Location: 🚌・boston
[2026-01-16T22:35:29.974Z] [BOT] 💾 Marked as posted: Software Engineer I - Embedded Devices @ ORG_aea5fbb0 (instance #1)
[2026-01-16T22:35:29.974Z] [BOT] 💾 BEFORE ARCHIVING: 2169 jobs in database
[2026-01-16T22:35:29.976Z] [BOT] ✅ No jobs to archive (all 2169 jobs within 7-day window)
[2026-01-16T22:35:29.990Z] [BOT] 💾 Saved posted_jobs.json: 2169 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:35:29.991Z] [BOT] 📍 [ROUTING] "Software Engineer: Microsoft AI Development Acceleration Program" @ ORG_c7bac469
[2026-01-16T22:35:29.991Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:35:30.221Z] [BOT] ✅ Created forum post: 🟦 Software Engineer: Microsoft AI Development Acceleration Program @ ORG_c7bac469 in #💻・tech-jobs
[2026-01-16T22:35:30.221Z] [BOT] ✅ Industry: Software Engineer: Microsoft AI Development Acceleration Program @ ORG_c7bac469
[2026-01-16T22:35:32.135Z] [BOT] ✅ Created forum post: 🟦 Software Engineer: Microsoft AI Development Acceleration Program @ ORG_c7bac469 in #🖥️・redmond
[2026-01-16T22:35:32.135Z] [BOT] ✅ Location: 🖥️・redmond
[2026-01-16T22:35:33.636Z] [BOT] 💾 Marked as posted: Software Engineer: Microsoft AI Development Acceleration Program @ ORG_c7bac469 (instance #1)
[2026-01-16T22:35:33.637Z] [BOT] 💾 BEFORE ARCHIVING: 2170 jobs in database
[2026-01-16T22:35:33.639Z] [BOT] ✅ No jobs to archive (all 2170 jobs within 7-day window)
[2026-01-16T22:35:33.652Z] [BOT] 💾 Saved posted_jobs.json: 2170 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:35:33.653Z] [BOT] 📍 [ROUTING] "Algorithm Developer (Quant Researcher) – 2026 Grads" @ ORG_ccdc7d45 River Trading
[2026-01-16T22:35:33.653Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:35:33.943Z] [BOT] ✅ Created forum post: 🏢 Algorithm Developer (Quant Researcher) – 2026 Grads @ ORG_ccdc7d45 River Trading in #💻・tech-jobs
  ✅ Industry: Algorithm Developer (Quant Researcher) – 2026 Grads @ ORG_ccdc7d45 River Trading
[2026-01-16T22:35:35.645Z] [BOT] ✅ Created forum post: 🏢 Algorithm Developer (Quant Researcher) – 2026 Grads @ ORG_ccdc7d45 River Trading in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T22:35:37.147Z] [BOT] 💾 Marked as posted: Algorithm Developer (Quant Researcher) – 2026 Grads @ ORG_ccdc7d45 River Trading (instance #1)
[2026-01-16T22:35:37.147Z] [BOT] 💾 BEFORE ARCHIVING: 2171 jobs in database
[2026-01-16T22:35:37.148Z] [BOT] ✅ No jobs to archive (all 2171 jobs within 7-day window)
[2026-01-16T22:35:37.161Z] [BOT] 💾 Saved posted_jobs.json: 2171 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:35:37.162Z] [BOT] 📍 [ROUTING] "Network Engineer Graduate (Edge Network) - 2026 Start (BS/ MS)" @ ORG_08c9a13c
[2026-01-16T22:35:37.162Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:35:37.450Z] [BOT] ✅ Created forum post: 🏢 Network Engineer Graduate (Edge Network) - 2026 Start (BS/ MS) @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Network Engineer Graduate (Edge Network) - 2026 Start (BS/ MS) @ ORG_08c9a13c
[2026-01-16T22:35:39.199Z] [BOT] ✅ Created forum post: 🏢 Network Engineer Graduate (Edge Network) - 2026 Start (BS/ MS) @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T22:35:40.700Z] [BOT] 💾 Marked as posted: Network Engineer Graduate (Edge Network) - 2026 Start (BS/ MS) @ ORG_08c9a13c (instance #1)
[2026-01-16T22:35:40.701Z] [BOT] 💾 BEFORE ARCHIVING: 2172 jobs in database
[2026-01-16T22:35:40.702Z] [BOT] ✅ No jobs to archive (all 2172 jobs within 7-day window)
[2026-01-16T22:35:40.715Z] [BOT] 💾 Saved posted_jobs.json: 2172 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:35:40.716Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Dev Infra) - 2026 Start (BS/MS)" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:35:41.095Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Dev Infra) - 2026 Start (BS/MS) @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate (Dev Infra) - 2026 Start (BS/MS) @ ORG_08c9a13c
[2026-01-16T22:35:42.816Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Dev Infra) - 2026 Start (BS/MS) @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T22:35:44.317Z] [BOT] 💾 Marked as posted: Software Engineer Graduate (Dev Infra) - 2026 Start (BS/MS) @ ORG_08c9a13c (instance #1)
[2026-01-16T22:35:44.317Z] [BOT] 💾 BEFORE ARCHIVING: 2173 jobs in database
[2026-01-16T22:35:44.319Z] [BOT] ✅ No jobs to archive (all 2173 jobs within 7-day window)
[2026-01-16T22:35:44.332Z] [BOT] 💾 Saved posted_jobs.json: 2173 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:35:47.332Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-16T22:35:47.333Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate (Monetization Technology - TikTok Ads Creative & Ecosystem) - 2026 Start (BS/MS)" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T22:35:47.709Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate (Monetization Technology - TikTok Ads Creative & Ecosystem) -  in #🤖・ai-jobs
[2026-01-16T22:35:47.709Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate (Monetization Technology - TikTok Ads Creative & Ecosystem) - 2026 Start (BS/MS) @ ORG_1bb6fcfb
[2026-01-16T22:35:49.532Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate (Monetization Technology - TikTok Ads Creative & Ecosystem) -  in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T22:35:51.033Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate (Monetization Technology - TikTok Ads Creative & Ecosystem) - 2026 Start (BS/MS) @ ORG_1bb6fcfb (instance #1)
[2026-01-16T22:35:51.033Z] [BOT] 💾 BEFORE ARCHIVING: 2174 jobs in database
[2026-01-16T22:35:51.035Z] [BOT] ✅ No jobs to archive (all 2174 jobs within 7-day window)
[2026-01-16T22:35:51.050Z] [BOT] 💾 Saved posted_jobs.json: 2174 active jobs
[2026-01-16T22:35:51.050Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T22:35:51.051Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Applied Machine Learning - Enterprise) - 2026 Start (BS/MS)" @ ORG_08c9a13c
[2026-01-16T22:35:51.051Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T22:35:51.333Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Applied Machine Learning - Enterprise) - 2026 Start (BS/MS) @ ORG_f8740713 in #🤖・ai-jobs
[2026-01-16T22:35:51.334Z] [BOT] ✅ Industry: Software Engineer Graduate (Applied Machine Learning - Enterprise) - 2026 Start (BS/MS) @ ORG_08c9a13c
[2026-01-16T22:35:53.134Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Applied Machine Learning - Enterprise) - 2026 Start (BS/MS) @ ORG_f8740713 in #🌉・san-francisco
[2026-01-16T22:35:53.134Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T22:35:54.635Z] [BOT] 💾 Marked as posted: Software Engineer Graduate (Applied Machine Learning - Enterprise) - 2026 Start (BS/MS) @ ORG_08c9a13c (instance #1)
[2026-01-16T22:35:54.636Z] [BOT] 💾 BEFORE ARCHIVING: 2175 jobs in database
[2026-01-16T22:35:54.637Z] [BOT] ✅ No jobs to archive (all 2175 jobs within 7-day window)
[2026-01-16T22:35:54.651Z] [BOT] 💾 Saved posted_jobs.json: 2175 active jobs
[2026-01-16T22:35:54.651Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T22:35:57.652Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T22:35:57.652Z] [BOT] ⏭️  Skipping duplicate: JID_bb1d3179-external_careers-JID_22ee5b0a-engineer_jr2025454088 (posted within 7 days)
[2026-01-16T22:35:57.652Z] [BOT] ⏭️  Skipping duplicate: JID_1d9fa0cb (posted within 7 days)
[2026-01-16T22:35:57.652Z] [BOT] ⏭️  Skipping duplicate: JID_3a7bd095-kbr_careers-JID_92201714-i_r2110482 (posted within 7 days)
[2026-01-16T22:35:57.653Z] [BOT] ⏭️  Skipping duplicate: JID_e34c8ab9-devices_r16418 (posted within 7 days)
[2026-01-16T22:35:57.653Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_efd35e0a (posted within 7 days)
⏭️  Skipping duplicate: JID_5639f003 (posted within 7 days)
[2026-01-16T22:35:57.653Z] [BOT] ⏭️  Skipping duplicate: JID_620d4a22 (posted within 7 days)
[2026-01-16T22:35:57.653Z] [BOT] ⏭️  Skipping duplicate: JID_9e797e73-CH_77b0f5d6 (posted within 7 days)
[2026-01-16T22:35:57.653Z] [BOT] ⏭️  Skipping duplicate: JID_9e797e73-CH_a186c8e3 (posted within 7 days)
[2026-01-16T22:35:57.653Z] [BOT] ⏭️  Skipping duplicate: JID_9e797e73-CH_c2df5284 (posted within 7 days)
[2026-01-16T22:35:57.764Z] [BOT] ✅ Loaded pending queue: 2781 total (2761 pending, 20 enriched, 0 posted)
[2026-01-16T22:35:57.939Z] [BOT] ✅ Saved pending queue: 2781 total (2761 pending, 10 enriched, 10 posted)
[2026-01-16T22:35:57.939Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T22:35:57.996Z] [BOT] 📂 Loaded 4395 existing routing entries
[2026-01-16T22:35:58.061Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-16T22:35:58.062Z] [BOT] Total entries: 4405
   Timestamp: 2026-01-16T22:35:58.043Z
[2026-01-16T22:35:58.062Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T22:35:58.062Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-16T22:35:58.062Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
[2026-01-16T22:35:58.063Z] [BOT] Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 8 posts
     2. #🌉・san-francisco: 6 posts
     3. #🤖・ai-jobs: 2 posts
     4. #💻・remote-usa: 1 posts
     5. #🚌・boston: 1 posts
[2026-01-16T22:35:58.063Z] [BOT] [STATS] Channel stats saved
[2026-01-16T22:36:00.087Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2381) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*