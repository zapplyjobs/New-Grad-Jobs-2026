# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T14:38:41.035Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T14:37:50.949Z] ========================================
[2026-01-04T14:37:50.951Z] Discord Bot Execution Log
[2026-01-04T14:37:50.951Z] Environment: GitHub Actions
[2026-01-04T14:37:50.951Z] Node Version: v20.19.6
[2026-01-04T14:37:50.951Z] ========================================
[2026-01-04T14:37:50.951Z] Environment Variables Check:
[2026-01-04T14:37:50.951Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T14:37:50.951Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T14:37:50.951Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T14:37:50.952Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T14:37:50.952Z] 
Multi-Channel Configuration:
[2026-01-04T14:37:50.952Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T14:37:50.952Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T14:37:50.952Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T14:37:50.952Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T14:37:50.952Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T14:37:50.952Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T14:37:50.952Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T14:37:50.952Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T14:37:50.952Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T14:37:50.952Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T14:37:50.953Z] 
Data Files Check:
[2026-01-04T14:37:50.954Z] .github/data/new_jobs.json: ✅ Exists (10 items, 134148 bytes)
[2026-01-04T14:37:50.958Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 572874 bytes)
[2026-01-04T14:37:50.958Z] 
========================================
[2026-01-04T14:37:50.958Z] Starting Enhanced Discord Bot...
[2026-01-04T14:37:50.958Z] ========================================
[2026-01-04T14:37:51.490Z] [BOT] ✅ Loaded V2 database: 1140 jobs
[2026-01-04T14:37:51.886Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T14:37:51.886Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T14:37:51.887Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T14:37:51.887Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T14:37:51.959Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T14:37:52.056Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T14:37:52.059Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T14:37:52.059Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T14:37:52.059Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T14:37:52.060Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T14:37:52.060Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T14:37:52.064Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-04T14:37:52.065Z] [BOT] 📍 [ROUTING] "Multigres Deployment Engineer" @ supabase
[2026-01-04T14:37:52.065Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T14:37:52.083Z] [BOT ERROR] (node:2616) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T14:37:52.666Z] [BOT] ✅ Created forum post: 🏢 Multigres Deployment Engineer @ supabase in #💻・tech-jobs
[2026-01-04T14:37:52.666Z] [BOT] ✅ Industry: Multigres Deployment Engineer @ supabase
[2026-01-04T14:37:54.169Z] [BOT] 💾 Marked as posted: Multigres Deployment Engineer @ supabase (instance #1)
[2026-01-04T14:37:54.169Z] [BOT] 💾 BEFORE ARCHIVING: 1141 jobs in database
[2026-01-04T14:37:54.170Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-04T14:37:54.184Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
[2026-01-04T14:37:54.184Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T14:37:54.186Z] [BOT] 📍 [ROUTING] "Senior Security Engineer" @ duolingo
[2026-01-04T14:37:54.186Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T14:37:54.441Z] [BOT] ✅ Created forum post: 🏢 Senior Security Engineer @ duolingo in #💻・tech-jobs
[2026-01-04T14:37:54.441Z] [BOT] ✅ Industry: Senior Security Engineer @ duolingo
[2026-01-04T14:37:56.142Z] [BOT] ✅ Created forum post: 🏢 Senior Security Engineer @ duolingo in #🗽・new-york
[2026-01-04T14:37:56.142Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T14:37:57.643Z] [BOT] 💾 Marked as posted: Senior Security Engineer @ duolingo (instance #1)
[2026-01-04T14:37:57.643Z] [BOT] 💾 BEFORE ARCHIVING: 1142 jobs in database
[2026-01-04T14:37:57.644Z] [BOT] ✅ No jobs to archive (all 1142 jobs within 7-day window)
[2026-01-04T14:37:57.652Z] [BOT] 💾 Saved posted_jobs.json: 1142 active jobs
[2026-01-04T14:37:57.652Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T14:37:57.653Z] [BOT] 📍 [ROUTING] "Senior Site Reliability Engineer" @ duolingo
   Category: TECH (matched: "DevOps/SRE")
[2026-01-04T14:37:57.653Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T14:37:58.008Z] [BOT] ✅ Created forum post: 🏢 Senior Site Reliability Engineer @ duolingo in #💻・tech-jobs
  ✅ Industry: Senior Site Reliability Engineer @ duolingo
[2026-01-04T14:37:59.692Z] [BOT] ✅ Created forum post: 🏢 Senior Site Reliability Engineer @ duolingo in #🗽・new-york
[2026-01-04T14:37:59.693Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T14:38:01.194Z] [BOT] 💾 Marked as posted: Senior Site Reliability Engineer @ duolingo (instance #1)
[2026-01-04T14:38:01.194Z] [BOT] 💾 BEFORE ARCHIVING: 1143 jobs in database
[2026-01-04T14:38:01.196Z] [BOT] ✅ No jobs to archive (all 1143 jobs within 7-day window)
[2026-01-04T14:38:01.204Z] [BOT] 💾 Saved posted_jobs.json: 1143 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T14:38:01.204Z] [BOT] 📍 [ROUTING] "FinOps Engineer" @ supabase
[2026-01-04T14:38:01.205Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T14:38:01.369Z] [BOT] ✅ Created forum post: 🏢 FinOps Engineer @ supabase in #💻・tech-jobs
[2026-01-04T14:38:01.369Z] [BOT] ✅ Industry: FinOps Engineer @ supabase
[2026-01-04T14:38:02.869Z] [BOT] 💾 Marked as posted: FinOps Engineer @ supabase (instance #1)
[2026-01-04T14:38:02.869Z] [BOT] 💾 BEFORE ARCHIVING: 1144 jobs in database
[2026-01-04T14:38:02.870Z] [BOT] ✅ No jobs to archive (all 1144 jobs within 7-day window)
[2026-01-04T14:38:02.878Z] [BOT] 💾 Saved posted_jobs.json: 1144 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T14:38:02.878Z] [BOT] 📍 [ROUTING] "Customer Success Engineer" @ railway
[2026-01-04T14:38:02.878Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T14:38:03.192Z] [BOT] ✅ Created forum post: 🏢 Customer Success Engineer @ railway in #💻・tech-jobs
[2026-01-04T14:38:03.192Z] [BOT] ✅ Industry: Customer Success Engineer @ railway
[2026-01-04T14:38:07.092Z] [BOT] ✅ Created forum post: 🏢 Customer Success Engineer @ railway in #💻・remote-usa
[2026-01-04T14:38:07.092Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-04T14:38:08.592Z] [BOT] 💾 Marked as posted: Customer Success Engineer @ railway (instance #1)
[2026-01-04T14:38:08.593Z] [BOT] 💾 BEFORE ARCHIVING: 1145 jobs in database
[2026-01-04T14:38:08.594Z] [BOT] ✅ No jobs to archive (all 1145 jobs within 7-day window)
[2026-01-04T14:38:08.603Z] [BOT] 💾 Saved posted_jobs.json: 1145 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T14:38:11.605Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2026-01-04T14:38:11.605Z] [BOT] 📍 [ROUTING] "Data Science Manager, Safety" @ discord
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-04T14:38:11.606Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-04T14:38:11.906Z] [BOT] ✅ Created forum post: 🏢 Data Science Manager, Safety @ discord in #📈・JID_fb739488
[2026-01-04T14:38:11.906Z] [BOT] ✅ Industry: Data Science Manager, Safety @ discord
[2026-01-04T14:38:13.655Z] [BOT] ✅ Created forum post: 🏢 Data Science Manager, Safety @ discord in #🌉・san-francisco
[2026-01-04T14:38:13.655Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T14:38:15.155Z] [BOT] 💾 Marked as posted: Data Science Manager, Safety @ discord (instance #1)
[2026-01-04T14:38:15.155Z] [BOT] 💾 BEFORE ARCHIVING: 1146 jobs in database
[2026-01-04T14:38:15.157Z] [BOT] ✅ No jobs to archive (all 1146 jobs within 7-day window)
[2026-01-04T14:38:15.167Z] [BOT] 💾 Saved posted_jobs.json: 1146 active jobs
[2026-01-04T14:38:15.167Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T14:38:15.168Z] [BOT] 📍 [ROUTING] "Senior Director, Trust & Safety" @ discord
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-04T14:38:15.351Z] [BOT] ✅ Created forum post: 🏢 Senior Director, Trust & Safety @ discord in #📈・JID_fb739488
[2026-01-04T14:38:15.351Z] [BOT] ✅ Industry: Senior Director, Trust & Safety @ discord
[2026-01-04T14:38:17.043Z] [BOT] ✅ Created forum post: 🏢 Senior Director, Trust & Safety @ discord in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-04T14:38:18.543Z] [BOT] 💾 Marked as posted: Senior Director, Trust & Safety @ discord (instance #1)
[2026-01-04T14:38:18.544Z] [BOT] 💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-04T14:38:18.545Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-04T14:38:18.555Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T14:38:18.555Z] [BOT] 📍 [ROUTING] "Staff Data Scientist, Strategic Research & Reporting" @ discord
[2026-01-04T14:38:18.555Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-04T14:38:18.984Z] [BOT] ✅ Created forum post: 🏢 Staff Data Scientist, Strategic Research & Reporting @ discord in #📈・JID_fb739488
  ✅ Industry: Staff Data Scientist, Strategic Research & Reporting @ discord
[2026-01-04T14:38:20.702Z] [BOT] ✅ Created forum post: 🏢 Staff Data Scientist, Strategic Research & Reporting @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T14:38:22.202Z] [BOT] 💾 Marked as posted: Staff Data Scientist, Strategic Research & Reporting @ discord (instance #1)
[2026-01-04T14:38:22.202Z] [BOT] 💾 BEFORE ARCHIVING: 1148 jobs in database
[2026-01-04T14:38:22.203Z] [BOT] ✅ No jobs to archive (all 1148 jobs within 7-day window)
[2026-01-04T14:38:22.212Z] [BOT] 💾 Saved posted_jobs.json: 1148 active jobs
[2026-01-04T14:38:22.213Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T14:38:25.213Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-04T14:38:25.213Z] [BOT] 📍 [ROUTING] "Safety By Design Policy Expert, Revenue" @ discord
[2026-01-04T14:38:25.214Z] [BOT] Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T14:38:25.453Z] [BOT] ✅ Created forum post: 🏢 Safety By Design Policy Expert, Revenue @ discord in #💲・sales-jobs
  ✅ Industry: Safety By Design Policy Expert, Revenue @ discord
[2026-01-04T14:38:27.325Z] [BOT] ✅ Created forum post: 🏢 Safety By Design Policy Expert, Revenue @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T14:38:28.825Z] [BOT] 💾 Marked as posted: Safety By Design Policy Expert, Revenue @ discord (instance #1)
[2026-01-04T14:38:28.825Z] [BOT] 💾 BEFORE ARCHIVING: 1149 jobs in database
[2026-01-04T14:38:28.827Z] [BOT] ✅ No jobs to archive (all 1149 jobs within 7-day window)
[2026-01-04T14:38:28.836Z] [BOT] 💾 Saved posted_jobs.json: 1149 active jobs
[2026-01-04T14:38:28.836Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T14:38:31.837Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-04T14:38:31.838Z] [BOT] 📍 [ROUTING] "Senior Recruiter, Advertising Solutions & GTM" @ discord
[2026-01-04T14:38:31.838Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-04T14:38:32.146Z] [BOT] ✅ Created forum post: 🏢 Senior Recruiter, Advertising Solutions & GTM @ discord in #📁・JID_e938df7b
[2026-01-04T14:38:32.147Z] [BOT] ✅ Industry: Senior Recruiter, Advertising Solutions & GTM @ discord
[2026-01-04T14:38:33.820Z] [BOT] ✅ Created forum post: 🏢 Senior Recruiter, Advertising Solutions & GTM @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T14:38:35.320Z] [BOT] 💾 Marked as posted: Senior Recruiter, Advertising Solutions & GTM @ discord (instance #1)
[2026-01-04T14:38:35.320Z] [BOT] 💾 BEFORE ARCHIVING: 1150 jobs in database
[2026-01-04T14:38:35.321Z] [BOT] ✅ No jobs to archive (all 1150 jobs within 7-day window)
[2026-01-04T14:38:35.330Z] [BOT] 💾 Saved posted_jobs.json: 1150 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T14:38:38.330Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T14:38:38.331Z] [BOT] ⏭️  Skipping duplicate: JID_a30c7e21 (posted within 7 days)
[2026-01-04T14:38:38.331Z] [BOT] ⏭️  Skipping duplicate: JID_cfe20d8a (posted within 7 days)
[2026-01-04T14:38:38.331Z] [BOT] ⏭️  Skipping duplicate: JID_8b52879f (posted within 7 days)
[2026-01-04T14:38:38.331Z] [BOT] ⏭️  Skipping duplicate: JID_50e12d0e (posted within 7 days)
[2026-01-04T14:38:38.331Z] [BOT] ⏭️  Skipping duplicate: JID_8ee8a4bf (posted within 7 days)
[2026-01-04T14:38:38.332Z] [BOT] ⏭️  Skipping duplicate: JID_e7f245fe (posted within 7 days)
⏭️  Skipping duplicate: JID_da86d8ba (posted within 7 days)
[2026-01-04T14:38:38.332Z] [BOT] ⏭️  Skipping duplicate: JID_6993f0a0 (posted within 7 days)
⏭️  Skipping duplicate: JID_6650298a (posted within 7 days)
⏭️  Skipping duplicate: JID_963977f9 (posted within 7 days)
[2026-01-04T14:38:38.338Z] [BOT] ✅ Loaded pending queue: 150 total (130 pending, 20 enriched, 0 posted)
[2026-01-04T14:38:38.346Z] [BOT] ✅ Saved pending queue: 150 total (130 pending, 10 enriched, 10 posted)
[2026-01-04T14:38:38.346Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T14:38:38.399Z] [BOT] 📂 Loaded 2059 existing routing entries
[2026-01-04T14:38:38.458Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-04T14:38:38.458Z] [BOT] Total entries: 2069
   Timestamp: 2026-01-04T14:38:38.447Z
[2026-01-04T14:38:38.459Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-04T14:38:38.459Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T14:38:38.459Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 7
   Top channels:
[2026-01-04T14:38:38.459Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🌉・san-francisco: 4 posts
     3. #📈・JID_fb739488: 3 posts
     4. #🗽・new-york: 2 posts
[2026-01-04T14:38:38.460Z] [BOT] 5. #💻・remote-usa: 2 posts
[2026-01-04T14:38:38.460Z] [BOT] [STATS] Channel stats saved
[2026-01-04T14:38:40.473Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2616) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*