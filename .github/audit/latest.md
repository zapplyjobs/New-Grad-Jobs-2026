# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T06:48:39.145Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T06:47:45.593Z] ========================================
[2026-01-13T06:47:45.595Z] Discord Bot Execution Log
[2026-01-13T06:47:45.595Z] Environment: GitHub Actions
[2026-01-13T06:47:45.595Z] Node Version: v20.19.6
[2026-01-13T06:47:45.595Z] ========================================
[2026-01-13T06:47:45.596Z] Environment Variables Check:
[2026-01-13T06:47:45.596Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T06:47:45.596Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T06:47:45.596Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T06:47:45.596Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T06:47:45.596Z] 
Multi-Channel Configuration:
[2026-01-13T06:47:45.596Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T06:47:45.596Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T06:47:45.596Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T06:47:45.596Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T06:47:45.596Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T06:47:45.597Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T06:47:45.597Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T06:47:45.597Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T06:47:45.597Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T06:47:45.597Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T06:47:45.597Z] 
Data Files Check:
[2026-01-13T06:47:45.598Z] .github/data/new_jobs.json: ✅ Exists (10 items, 96841 bytes)
[2026-01-13T06:47:45.601Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 424402 bytes)
[2026-01-13T06:47:45.601Z] 
========================================
[2026-01-13T06:47:45.601Z] Starting Enhanced Discord Bot...
[2026-01-13T06:47:45.601Z] ========================================
[2026-01-13T06:47:46.130Z] [BOT] ✅ Loaded V2 database: 808 jobs
[2026-01-13T06:47:47.039Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T06:47:47.039Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T06:47:47.040Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T06:47:47.147Z] [BOT] ✅ Loaded pending queue: 2700 total (2680 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Strategic Account Executive (Corp) at verkada
[2026-01-13T06:47:47.149Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T06:47:47.150Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T06:47:47.150Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T06:47:47.151Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-13T06:47:47.151Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Android Sales Expert @ 2020 Companies: sf, alameda
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-13T06:47:47.151Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T06:47:47.156Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-13T06:47:47.156Z] [BOT] 📍 [ROUTING] "Strategic Account Executive (Corp)" @ verkada
[2026-01-13T06:47:47.156Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T06:47:47.161Z] [BOT ERROR] (node:2954) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T06:47:47.338Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive (Corp) @ verkada in #💲・sales-jobs
[2026-01-13T06:47:47.338Z] [BOT] ✅ Industry: Strategic Account Executive (Corp) @ verkada
[2026-01-13T06:47:48.841Z] [BOT] 💾 Marked as posted: Strategic Account Executive (Corp) @ verkada (instance #1)
[2026-01-13T06:47:48.841Z] [BOT] 💾 BEFORE ARCHIVING: 809 jobs in database
[2026-01-13T06:47:48.842Z] [BOT] ✅ No jobs to archive (all 809 jobs within 7-day window)
[2026-01-13T06:47:48.852Z] [BOT] 💾 Saved posted_jobs.json: 809 active jobs
[2026-01-13T06:47:48.852Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:47:48.853Z] [BOT] 📍 [ROUTING] "Tradeshow Associate" @ verkada
   Category: SALES (matched: "sales")
[2026-01-13T06:47:48.853Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T06:47:49.004Z] [BOT] ✅ Created forum post: 🏢 Tradeshow Associate @ verkada in #💲・sales-jobs
[2026-01-13T06:47:49.004Z] [BOT] ✅ Industry: Tradeshow Associate @ verkada
[2026-01-13T06:47:50.675Z] [BOT] ✅ Created forum post: 🏢 Tradeshow Associate @ verkada in #🗽・new-york
[2026-01-13T06:47:50.675Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-13T06:47:52.176Z] [BOT] 💾 Marked as posted: Tradeshow Associate @ verkada (instance #1)
[2026-01-13T06:47:52.176Z] [BOT] 💾 BEFORE ARCHIVING: 810 jobs in database
[2026-01-13T06:47:52.177Z] [BOT] ✅ No jobs to archive (all 810 jobs within 7-day window)
[2026-01-13T06:47:52.182Z] [BOT] 💾 Saved posted_jobs.json: 810 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T06:47:52.183Z] [BOT] 📍 [ROUTING] "Strategic Finance Manager, GTM" @ vercel
[2026-01-13T06:47:52.183Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T06:47:52.517Z] [BOT] ✅ Created forum post: 🏢 Strategic Finance Manager, GTM @ vercel in #💲・sales-jobs
  ✅ Industry: Strategic Finance Manager, GTM @ vercel
[2026-01-13T06:47:54.426Z] [BOT] ✅ Created forum post: 🏢 Strategic Finance Manager, GTM @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T06:47:55.927Z] [BOT] 💾 Marked as posted: Strategic Finance Manager, GTM @ vercel (instance #1)
[2026-01-13T06:47:55.927Z] [BOT] 💾 BEFORE ARCHIVING: 811 jobs in database
[2026-01-13T06:47:55.928Z] [BOT] ✅ No jobs to archive (all 811 jobs within 7-day window)
[2026-01-13T06:47:55.934Z] [BOT] 💾 Saved posted_jobs.json: 811 active jobs
[2026-01-13T06:47:55.934Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:47:58.935Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T06:47:58.936Z] [BOT] 📍 [ROUTING] "Predoctoral Scholar" @ ORG_9d38443e of Chicago
[2026-01-13T06:47:58.936Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-13T06:47:59.141Z] [BOT] ✅ Created forum post: 🏢 Predoctoral Scholar @ ORG_9d38443e of Chicago in #📈・JID_fb739488
  ✅ Industry: Predoctoral Scholar @ ORG_9d38443e of Chicago
[2026-01-13T06:48:00.821Z] [BOT] ✅ Created forum post: 🏢 Predoctoral Scholar @ ORG_9d38443e of Chicago in #🌆・chicago
[2026-01-13T06:48:00.821Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-13T06:48:02.322Z] [BOT] 💾 Marked as posted: Predoctoral Scholar @ ORG_9d38443e of Chicago (instance #1)
[2026-01-13T06:48:02.322Z] [BOT] 💾 BEFORE ARCHIVING: 812 jobs in database
[2026-01-13T06:48:02.323Z] [BOT] ✅ No jobs to archive (all 812 jobs within 7-day window)
[2026-01-13T06:48:02.329Z] [BOT] 💾 Saved posted_jobs.json: 812 active jobs
[2026-01-13T06:48:02.329Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:48:05.330Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-13T06:48:05.331Z] [BOT] 📍 [ROUTING] "Data & Business Insights Associate" @ ORG_0ee6cb3e Data
[2026-01-13T06:48:05.331Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T06:48:05.578Z] [BOT] ✅ Created forum post: 🏢 Data & Business Insights Associate @ ORG_0ee6cb3e Data in #💻・tech-jobs
[2026-01-13T06:48:05.579Z] [BOT] ✅ Industry: Data & Business Insights Associate @ ORG_0ee6cb3e Data
[2026-01-13T06:48:07.245Z] [BOT] ✅ Created forum post: 🏢 Data & Business Insights Associate @ ORG_0ee6cb3e Data in #🤠・austin
[2026-01-13T06:48:07.245Z] [BOT] ✅ Location: 🤠・austin
[2026-01-13T06:48:08.747Z] [BOT] 💾 Marked as posted: Data & Business Insights Associate @ ORG_0ee6cb3e Data (instance #1)
[2026-01-13T06:48:08.747Z] [BOT] 💾 BEFORE ARCHIVING: 813 jobs in database
[2026-01-13T06:48:08.748Z] [BOT] ✅ No jobs to archive (all 813 jobs within 7-day window)
[2026-01-13T06:48:08.754Z] [BOT] 💾 Saved posted_jobs.json: 813 active jobs
[2026-01-13T06:48:08.755Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:48:08.755Z] [BOT] 📍 [ROUTING] "Software Engineer - Manufacturing Integration" @ ORG_e03f7067 Technologies
   Category: TECH (matched: "software")
[2026-01-13T06:48:08.755Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T06:48:09.038Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Manufacturing Integration @ ORG_e03f7067 Technologies in #💻・tech-jobs
[2026-01-13T06:48:09.038Z] [BOT] ✅ Industry: Software Engineer - Manufacturing Integration @ ORG_e03f7067 Technologies
[2026-01-13T06:48:10.797Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Manufacturing Integration @ ORG_e03f7067 Technologies in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-13T06:48:12.298Z] [BOT] 💾 Marked as posted: Software Engineer - Manufacturing Integration @ ORG_e03f7067 Technologies (instance #1)
[2026-01-13T06:48:12.298Z] [BOT] 💾 BEFORE ARCHIVING: 814 jobs in database
[2026-01-13T06:48:12.299Z] [BOT] ✅ No jobs to archive (all 814 jobs within 7-day window)
[2026-01-13T06:48:12.305Z] [BOT] 💾 Saved posted_jobs.json: 814 active jobs
[2026-01-13T06:48:12.305Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:48:12.305Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_a23d95bc Network Holdings
[2026-01-13T06:48:12.305Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T06:48:13.799Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_a23d95bc Network Holdings in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_a23d95bc Network Holdings
[2026-01-13T06:48:15.445Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_a23d95bc Network Holdings in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T06:48:16.946Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_a23d95bc Network Holdings (instance #1)
[2026-01-13T06:48:16.947Z] [BOT] 💾 BEFORE ARCHIVING: 815 jobs in database
[2026-01-13T06:48:16.947Z] [BOT] ✅ No jobs to archive (all 815 jobs within 7-day window)
[2026-01-13T06:48:16.955Z] [BOT] 💾 Saved posted_jobs.json: 815 active jobs
[2026-01-13T06:48:16.955Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:48:19.955Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-13T06:48:19.955Z] [BOT] 📍 [ROUTING] "Senior Privacy Counsel" @ discord
   Category: HR (matched: "recruiter")
[2026-01-13T06:48:19.956Z] [BOT] Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-13T06:48:20.129Z] [BOT] ✅ Created forum post: 🏢 Senior Privacy Counsel @ discord in #📁・JID_e938df7b
  ✅ Industry: Senior Privacy Counsel @ discord
[2026-01-13T06:48:21.751Z] [BOT] ✅ Created forum post: 🏢 Senior Privacy Counsel @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T06:48:23.252Z] [BOT] 💾 Marked as posted: Senior Privacy Counsel @ discord (instance #1)
[2026-01-13T06:48:23.253Z] [BOT] 💾 BEFORE ARCHIVING: 816 jobs in database
[2026-01-13T06:48:23.253Z] [BOT] ✅ No jobs to archive (all 816 jobs within 7-day window)
[2026-01-13T06:48:23.260Z] [BOT] 💾 Saved posted_jobs.json: 816 active jobs
[2026-01-13T06:48:23.260Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:48:26.261Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-13T06:48:26.261Z] [BOT] 📍 [ROUTING] "AI Software Engineer - Agents - Ace" @ ORG_e03f7067 Technologies
   Category: AI (matched: "AI/ML")
[2026-01-13T06:48:26.262Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T06:48:26.452Z] [BOT] ✅ Created forum post: 🏢 AI Software Engineer - Agents - Ace @ ORG_e03f7067 Technologies in #🤖・ai-jobs
  ✅ Industry: AI Software Engineer - Agents - Ace @ ORG_e03f7067 Technologies
[2026-01-13T06:48:28.250Z] [BOT] ✅ Created forum post: 🏢 AI Software Engineer - Agents - Ace @ ORG_e03f7067 Technologies in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-13T06:48:29.751Z] [BOT] 💾 Marked as posted: AI Software Engineer - Agents - Ace @ ORG_e03f7067 Technologies (instance #1)
[2026-01-13T06:48:29.752Z] [BOT] 💾 BEFORE ARCHIVING: 817 jobs in database
[2026-01-13T06:48:29.752Z] [BOT] ✅ No jobs to archive (all 817 jobs within 7-day window)
[2026-01-13T06:48:29.759Z] [BOT] 💾 Saved posted_jobs.json: 817 active jobs
[2026-01-13T06:48:29.759Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:48:29.759Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_d6d2009d
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T06:48:29.759Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-13T06:48:29.966Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_d6d2009d in #🤖・ai-jobs
[2026-01-13T06:48:29.967Z] [BOT] ✅ Industry: Data Scientist @ ORG_d6d2009d
[2026-01-13T06:48:31.623Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_d6d2009d in #💻・remote-usa
[2026-01-13T06:48:31.623Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T06:48:33.124Z] [BOT] 💾 Marked as posted: Data Scientist @ ORG_d6d2009d (instance #1)
[2026-01-13T06:48:33.125Z] [BOT] 💾 BEFORE ARCHIVING: 818 jobs in database
[2026-01-13T06:48:33.125Z] [BOT] ✅ No jobs to archive (all 818 jobs within 7-day window)
[2026-01-13T06:48:33.132Z] [BOT] 💾 Saved posted_jobs.json: 818 active jobs
[2026-01-13T06:48:33.132Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:48:36.133Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T06:48:36.133Z] [BOT] ⏭️  Skipping duplicate: JID_dce564fc (posted within 7 days)
[2026-01-13T06:48:36.133Z] [BOT] ⏭️  Skipping duplicate: JID_297ef683 (posted within 7 days)
[2026-01-13T06:48:36.134Z] [BOT] ⏭️  Skipping duplicate: JID_a58979e1-scholar_jr32397 (posted within 7 days)
[2026-01-13T06:48:36.134Z] [BOT] ⏭️  Skipping duplicate: JID_db4fb92b (posted within 7 days)
[2026-01-13T06:48:36.134Z] [BOT] ⏭️  Skipping duplicate: JID_4625054f (posted within 7 days)
⏭️  Skipping duplicate: JID_9ad24dae (posted within 7 days)
⏭️  Skipping duplicate: JID_758e78d3 (posted within 7 days)
⏭️  Skipping duplicate: JID_23021325 (posted within 7 days)
⏭️  Skipping duplicate: JID_f9bf5b9a (posted within 7 days)
⏭️  Skipping duplicate: JID_50a9794b (posted within 7 days)
[2026-01-13T06:48:36.250Z] [BOT] ✅ Loaded pending queue: 2700 total (2680 pending, 20 enriched, 0 posted)
[2026-01-13T06:48:36.411Z] [BOT] ✅ Saved pending queue: 2700 total (2680 pending, 10 enriched, 10 posted)
[2026-01-13T06:48:36.411Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T06:48:36.462Z] [BOT] 📂 Loaded 2945 existing routing entries
[2026-01-13T06:48:36.517Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-13T06:48:36.517Z] [BOT] Total entries: 2955
   Timestamp: 2026-01-13T06:48:36.505Z
[2026-01-13T06:48:36.518Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
   Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-13T06:48:36.518Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T06:48:36.518Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 11
   Top channels:
     1. #💲・sales-jobs: 3 posts
[2026-01-13T06:48:36.518Z] [BOT] 2. #🌉・san-francisco: 3 posts
     3. #💻・tech-jobs: 3 posts
     4. #🌧️・seattle: 2 posts
     5. #🤖・ai-jobs: 2 posts
[2026-01-13T06:48:36.518Z] [BOT] [STATS] Channel stats saved
[2026-01-13T06:48:38.543Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2954) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*