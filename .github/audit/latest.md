# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T08:44:55.881Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T08:44:08.690Z] ========================================
[2026-01-17T08:44:08.692Z] Discord Bot Execution Log
[2026-01-17T08:44:08.692Z] Environment: GitHub Actions
[2026-01-17T08:44:08.692Z] Node Version: v20.19.6
[2026-01-17T08:44:08.692Z] ========================================
[2026-01-17T08:44:08.692Z] Environment Variables Check:
[2026-01-17T08:44:08.692Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T08:44:08.692Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T08:44:08.693Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T08:44:08.693Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T08:44:08.693Z] 
Multi-Channel Configuration:
[2026-01-17T08:44:08.693Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T08:44:08.693Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T08:44:08.693Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T08:44:08.693Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T08:44:08.693Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T08:44:08.693Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T08:44:08.693Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T08:44:08.693Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T08:44:08.693Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T08:44:08.693Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T08:44:08.694Z] 
Data Files Check:
[2026-01-17T08:44:08.694Z] .github/data/new_jobs.json: ✅ Exists (10 items, 44669 bytes)
[2026-01-17T08:44:08.703Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1288592 bytes)
[2026-01-17T08:44:08.703Z] 
========================================
[2026-01-17T08:44:08.703Z] Starting Enhanced Discord Bot...
[2026-01-17T08:44:08.703Z] ========================================
[2026-01-17T08:44:09.238Z] [BOT] ✅ Loaded V2 database: 2381 jobs
[2026-01-17T08:44:09.658Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T08:44:09.659Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T08:44:09.659Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T08:44:09.780Z] [BOT] ✅ Loaded pending queue: 2894 total (2874 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd at ByteDance
[2026-01-17T08:44:09.783Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T08:44:09.783Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T08:44:09.783Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T08:44:09.784Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-17T08:44:09.784Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T08:44:09.787Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-17T08:44:09.788Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd" @ ORG_08c9a13c
[2026-01-17T08:44:09.788Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T08:44:09.806Z] [BOT ERROR] (node:2985) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T08:44:10.111Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd in #🤖・ai-jobs
[2026-01-17T08:44:10.111Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd @ ORG_08c9a13c
[2026-01-17T08:44:11.900Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T08:44:13.400Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd @ ORG_08c9a13c (instance #1)
[2026-01-17T08:44:13.401Z] [BOT] 💾 BEFORE ARCHIVING: 2382 jobs in database
[2026-01-17T08:44:13.402Z] [BOT] ✅ No jobs to archive (all 2382 jobs within 7-day window)
[2026-01-17T08:44:13.424Z] [BOT] 💾 Saved posted_jobs.json: 2382 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:44:13.425Z] [BOT] 📍 [ROUTING] "Accounting Manager" @ nominal
[2026-01-17T08:44:13.425Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T08:44:13.640Z] [BOT] ✅ Created forum post: 🏢 Accounting Manager @ nominal in #🤖・ai-jobs
[2026-01-17T08:44:13.640Z] [BOT] ✅ Industry: Accounting Manager @ nominal
[2026-01-17T08:44:15.494Z] [BOT] ✅ Created forum post: 🏢 Accounting Manager @ nominal in #🤠・austin
[2026-01-17T08:44:15.494Z] [BOT] ✅ Location: 🤠・austin
[2026-01-17T08:44:16.994Z] [BOT] 💾 Marked as posted: Accounting Manager @ nominal (instance #1)
[2026-01-17T08:44:16.995Z] [BOT] 💾 BEFORE ARCHIVING: 2383 jobs in database
[2026-01-17T08:44:16.996Z] [BOT] ✅ No jobs to archive (all 2383 jobs within 7-day window)
[2026-01-17T08:44:17.009Z] [BOT] 💾 Saved posted_jobs.json: 2383 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:44:17.009Z] [BOT] 📍 [ROUTING] "Software Engineer 3 - Infrastructure - Google Cloud Global Networking" @ ORG_ce770667
[2026-01-17T08:44:17.009Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T08:44:17.245Z] [BOT] ✅ Created forum post: 🟢 Software Engineer 3 - Infrastructure - Google Cloud Global Networking @ ORG_ce770667 in #🤖・ai-jobs
[2026-01-17T08:44:17.245Z] [BOT] ✅ Industry: Software Engineer 3 - Infrastructure - Google Cloud Global Networking @ ORG_ce770667
[2026-01-17T08:44:19.017Z] [BOT] ✅ Created forum post: 🟢 Software Engineer 3 - Infrastructure - Google Cloud Global Networking @ ORG_ce770667 in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2026-01-17T08:44:20.519Z] [BOT] 💾 Marked as posted: Software Engineer 3 - Infrastructure - Google Cloud Global Networking @ ORG_ce770667 (instance #1)
[2026-01-17T08:44:20.520Z] [BOT] 💾 BEFORE ARCHIVING: 2384 jobs in database
[2026-01-17T08:44:20.522Z] [BOT] ✅ No jobs to archive (all 2384 jobs within 7-day window)
[2026-01-17T08:44:20.539Z] [BOT] 💾 Saved posted_jobs.json: 2384 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:44:23.539Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-17T08:44:23.540Z] [BOT] 📍 [ROUTING] "Data Scientist - Experimentation" @ ORG_10ad956d
[2026-01-17T08:44:23.540Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T08:44:23.773Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Experimentation @ ORG_10ad956d in #📈・JID_fb739488
  ✅ Industry: Data Scientist - Experimentation @ ORG_10ad956d
[2026-01-17T08:44:25.472Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Experimentation @ ORG_10ad956d in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T08:44:26.973Z] [BOT] 💾 Marked as posted: Data Scientist - Experimentation @ ORG_10ad956d (instance #1)
[2026-01-17T08:44:26.973Z] [BOT] 💾 BEFORE ARCHIVING: 2385 jobs in database
[2026-01-17T08:44:26.975Z] [BOT] ✅ No jobs to archive (all 2385 jobs within 7-day window)
[2026-01-17T08:44:26.991Z] [BOT] 💾 Saved posted_jobs.json: 2385 active jobs
[2026-01-17T08:44:26.991Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:44:29.992Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-17T08:44:29.993Z] [BOT] 📍 [ROUTING] "Software Engineer (Backend Rust)" @ N1
[2026-01-17T08:44:29.993Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:44:30.227Z] [BOT] ✅ Created forum post: 🏢 Software Engineer (Backend Rust) @ N1 in #💻・tech-jobs
[2026-01-17T08:44:30.227Z] [BOT] ✅ Industry: Software Engineer (Backend Rust) @ N1
[2026-01-17T08:44:31.982Z] [BOT] ✅ Created forum post: 🏢 Software Engineer (Backend Rust) @ N1 in #🗽・new-york
[2026-01-17T08:44:31.983Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-17T08:44:33.484Z] [BOT] 💾 Marked as posted: Software Engineer (Backend Rust) @ N1 (instance #1)
[2026-01-17T08:44:33.484Z] [BOT] 💾 BEFORE ARCHIVING: 2386 jobs in database
[2026-01-17T08:44:33.487Z] [BOT] ✅ No jobs to archive (all 2386 jobs within 7-day window)
[2026-01-17T08:44:33.505Z] [BOT] 💾 Saved posted_jobs.json: 2386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:44:33.506Z] [BOT] 📍 [ROUTING] "New Grad Software Engineer (Backend Rust)" @ N1
[2026-01-17T08:44:33.506Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:44:33.890Z] [BOT] ✅ Created forum post: 🏢 New Grad Software Engineer (Backend Rust) @ N1 in #💻・tech-jobs
[2026-01-17T08:44:33.890Z] [BOT] ✅ Industry: New Grad Software Engineer (Backend Rust) @ N1
[2026-01-17T08:44:35.592Z] [BOT] ✅ Created forum post: 🏢 New Grad Software Engineer (Backend Rust) @ N1 in #🗽・new-york
[2026-01-17T08:44:35.592Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-17T08:44:37.094Z] [BOT] 💾 Marked as posted: New Grad Software Engineer (Backend Rust) @ N1 (instance #1)
[2026-01-17T08:44:37.094Z] [BOT] 💾 BEFORE ARCHIVING: 2387 jobs in database
[2026-01-17T08:44:37.096Z] [BOT] ✅ No jobs to archive (all 2387 jobs within 7-day window)
[2026-01-17T08:44:37.111Z] [BOT] 💾 Saved posted_jobs.json: 2387 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:44:37.112Z] [BOT] 📍 [ROUTING] "New Grad Software Engineer (Full Stack)" @ N1
[2026-01-17T08:44:37.113Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:44:37.337Z] [BOT] ✅ Created forum post: 🏢 New Grad Software Engineer (Full Stack) @ N1 in #💻・tech-jobs
[2026-01-17T08:44:37.337Z] [BOT] ✅ Industry: New Grad Software Engineer (Full Stack) @ N1
[2026-01-17T08:44:38.992Z] [BOT] ✅ Created forum post: 🏢 New Grad Software Engineer (Full Stack) @ N1 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-17T08:44:40.492Z] [BOT] 💾 Marked as posted: New Grad Software Engineer (Full Stack) @ N1 (instance #1)
[2026-01-17T08:44:40.493Z] [BOT] 💾 BEFORE ARCHIVING: 2388 jobs in database
[2026-01-17T08:44:40.495Z] [BOT] ✅ No jobs to archive (all 2388 jobs within 7-day window)
[2026-01-17T08:44:40.512Z] [BOT] 💾 Saved posted_jobs.json: 2388 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:44:40.513Z] [BOT] 📍 [ROUTING] "Multigres Engineer" @ supabase
[2026-01-17T08:44:40.513Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:44:40.699Z] [BOT] ✅ Created forum post: 🏢 Multigres Engineer @ supabase in #💻・tech-jobs
[2026-01-17T08:44:40.699Z] [BOT] ✅ Industry: Multigres Engineer @ supabase
[2026-01-17T08:44:42.200Z] [BOT] 💾 Marked as posted: Multigres Engineer @ supabase (instance #1)
[2026-01-17T08:44:42.200Z] [BOT] 💾 BEFORE ARCHIVING: 2389 jobs in database
[2026-01-17T08:44:42.202Z] [BOT] ✅ No jobs to archive (all 2389 jobs within 7-day window)
[2026-01-17T08:44:42.217Z] [BOT] 💾 Saved posted_jobs.json: 2389 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:44:42.217Z] [BOT] 📍 [ROUTING] "Forward Deployed Engineer" @ ORG_7f56ab51in
[2026-01-17T08:44:42.217Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:44:42.459Z] [BOT] ✅ Created forum post: 🏢 Forward Deployed Engineer @ ORG_7f56ab51in in #💻・tech-jobs
[2026-01-17T08:44:42.459Z] [BOT] ✅ Industry: Forward Deployed Engineer @ ORG_7f56ab51in
[2026-01-17T08:44:44.576Z] [BOT] ✅ Created forum post: 🏢 Forward Deployed Engineer @ ORG_7f56ab51in in #🦢・los-angeles
[2026-01-17T08:44:44.576Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-17T08:44:46.077Z] [BOT] 💾 Marked as posted: Forward Deployed Engineer @ ORG_7f56ab51in (instance #1)
[2026-01-17T08:44:46.078Z] [BOT] 💾 BEFORE ARCHIVING: 2390 jobs in database
[2026-01-17T08:44:46.079Z] [BOT] ✅ No jobs to archive (all 2390 jobs within 7-day window)
[2026-01-17T08:44:46.095Z] [BOT] 💾 Saved posted_jobs.json: 2390 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:44:46.095Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_7f56ab51in
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:44:46.342Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_7f56ab51in in #💻・tech-jobs
  ✅ Industry: Software Engineer I @ ORG_7f56ab51in
[2026-01-17T08:44:48.114Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_7f56ab51in in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-17T08:44:49.615Z] [BOT] 💾 Marked as posted: Software Engineer I @ ORG_7f56ab51in (instance #1)
[2026-01-17T08:44:49.616Z] [BOT] 💾 BEFORE ARCHIVING: 2391 jobs in database
[2026-01-17T08:44:49.617Z] [BOT] ✅ No jobs to archive (all 2391 jobs within 7-day window)
[2026-01-17T08:44:49.633Z] [BOT] 💾 Saved posted_jobs.json: 2391 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:44:52.634Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-17T08:44:52.634Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_d95b5556-detail (posted within 7 days)
[2026-01-17T08:44:52.635Z] [BOT] ⏭️  Skipping duplicate: JID_de09fe59 (posted within 7 days)
[2026-01-17T08:44:52.635Z] [BOT] ⏭️  Skipping duplicate: JID_d32f1699 (posted within 7 days)
[2026-01-17T08:44:52.635Z] [BOT] ⏭️  Skipping duplicate: JID_947f4192 (posted within 7 days)
[2026-01-17T08:44:52.635Z] [BOT] ⏭️  Skipping duplicate: JID_ad406d50 (posted within 7 days)
[2026-01-17T08:44:52.635Z] [BOT] ⏭️  Skipping duplicate: JID_a9174489 (posted within 7 days)
[2026-01-17T08:44:52.635Z] [BOT] ⏭️  Skipping duplicate: JID_c6c11003 (posted within 7 days)
[2026-01-17T08:44:52.635Z] [BOT] ⏭️  Skipping duplicate: JID_5d12906c (posted within 7 days)
[2026-01-17T08:44:52.636Z] [BOT] ⏭️  Skipping duplicate: JID_b073f653 (posted within 7 days)
[2026-01-17T08:44:52.636Z] [BOT] ⏭️  Skipping duplicate: JID_400caf3b (posted within 7 days)
[2026-01-17T08:44:52.746Z] [BOT] ✅ Loaded pending queue: 2894 total (2874 pending, 20 enriched, 0 posted)
[2026-01-17T08:44:52.920Z] [BOT] ✅ Saved pending queue: 2894 total (2874 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-17T08:44:52.920Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-17T08:44:52.994Z] [BOT] 📂 Loaded 4585 existing routing entries
[2026-01-17T08:44:53.064Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-17T08:44:53.064Z] [BOT] Total entries: 4595
   Timestamp: 2026-01-17T08:44:53.045Z
[2026-01-17T08:44:53.065Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
   Total attempts: 19
[2026-01-17T08:44:53.065Z] [BOT] Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-17T08:44:53.065Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 8
[2026-01-17T08:44:53.065Z] [BOT] Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・new-york: 3 posts
[2026-01-17T08:44:53.065Z] [BOT] 4. #🌉・san-francisco: 2 posts
     5. #🦢・los-angeles: 2 posts
[2026-01-17T08:44:53.065Z] [BOT] [STATS] Channel stats saved
[2026-01-17T08:44:55.087Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2985) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*