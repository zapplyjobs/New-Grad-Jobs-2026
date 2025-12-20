# Discord Bot Execution Audit
**Timestamp:** 2025-12-20T20:36:50.877Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-20T20:36:02.616Z] ========================================
[2025-12-20T20:36:02.618Z] Discord Bot Execution Log
[2025-12-20T20:36:02.618Z] Environment: GitHub Actions
[2025-12-20T20:36:02.618Z] Node Version: v20.19.6
[2025-12-20T20:36:02.618Z] ========================================
[2025-12-20T20:36:02.618Z] Environment Variables Check:
[2025-12-20T20:36:02.618Z] DISCORD_TOKEN: ✅ Set
[2025-12-20T20:36:02.618Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-20T20:36:02.618Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-20T20:36:02.618Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-20T20:36:02.618Z] 
Multi-Channel Configuration:
[2025-12-20T20:36:02.618Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-20T20:36:02.619Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-20T20:36:02.619Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-20T20:36:02.619Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-20T20:36:02.619Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-20T20:36:02.619Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-20T20:36:02.619Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-20T20:36:02.619Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-20T20:36:02.619Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-20T20:36:02.619Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-20T20:36:02.619Z] 
Data Files Check:
[2025-12-20T20:36:02.620Z] .github/data/new_jobs.json: ✅ Exists (10 items, 42751 bytes)
[2025-12-20T20:36:02.623Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 406806 bytes)
[2025-12-20T20:36:02.623Z] 
========================================
[2025-12-20T20:36:02.623Z] Starting Enhanced Discord Bot...
[2025-12-20T20:36:02.623Z] ========================================
[2025-12-20T20:36:03.146Z] [BOT] ✅ Loaded V2 database: 697 jobs
[2025-12-20T20:36:03.673Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-20T20:36:03.673Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-20T20:36:03.673Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-20T20:36:03.673Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-20T20:36:03.715Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-20T20:36:03.760Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 47
[2025-12-20T20:36:03.763Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-20T20:36:03.763Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-20T20:36:03.763Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-20T20:36:03.764Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-20T20:36:03.764Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-20T20:36:03.768Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-20T20:36:03.769Z] [BOT] 📍 [ROUTING] "AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd" @ ORG_08c9a13c
[2025-12-20T20:36:03.769Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T20:36:03.785Z] [BOT ERROR] (node:2652) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-20T20:36:03.966Z] [BOT] ✅ Created forum post: 🏢 AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd @ ORG_08c9a13c
[2025-12-20T20:36:05.647Z] [BOT] ✅ Created forum post: 🏢 AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T20:36:07.148Z] [BOT] 💾 Marked as posted: AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd @ ORG_08c9a13c (instance #1)
[2025-12-20T20:36:07.149Z] [BOT] 💾 BEFORE ARCHIVING: 698 jobs in database
[2025-12-20T20:36:07.149Z] [BOT] ✅ No jobs to archive (all 698 jobs within 7-day window)
[2025-12-20T20:36:07.159Z] [BOT] 💾 Saved posted_jobs.json: 698 active jobs
[2025-12-20T20:36:07.159Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer Graduate - Data Security-US" @ ORG_08c9a13c
[2025-12-20T20:36:07.160Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T20:36:07.431Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Data Security-US @ ORG_08c9a13c in #💻・tech-jobs
[2025-12-20T20:36:07.431Z] [BOT] ✅ Industry: Software Engineer Graduate - Data Security-US @ ORG_08c9a13c
[2025-12-20T20:36:09.176Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Data Security-US @ ORG_08c9a13c in #🌉・san-francisco
[2025-12-20T20:36:09.176Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T20:36:10.677Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Data Security-US @ ORG_08c9a13c (instance #1)
[2025-12-20T20:36:10.678Z] [BOT] 💾 BEFORE ARCHIVING: 699 jobs in database
[2025-12-20T20:36:10.678Z] [BOT] ✅ No jobs to archive (all 699 jobs within 7-day window)
[2025-12-20T20:36:10.684Z] [BOT] 💾 Saved posted_jobs.json: 699 active jobs
[2025-12-20T20:36:10.684Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:36:10.684Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_a258b30f Lending Services
[2025-12-20T20:36:10.684Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T20:36:10.932Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_a258b30f Lending Services in #💻・tech-jobs
[2025-12-20T20:36:10.932Z] [BOT] ✅ Industry: Software Developer @ ORG_a258b30f Lending Services
[2025-12-20T20:36:12.717Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_a258b30f Lending Services in #💻・remote-usa
[2025-12-20T20:36:12.718Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-20T20:36:14.219Z] [BOT] 💾 Marked as posted: Software Developer @ ORG_a258b30f Lending Services (instance #1)
[2025-12-20T20:36:14.219Z] [BOT] 💾 BEFORE ARCHIVING: 700 jobs in database
[2025-12-20T20:36:14.220Z] [BOT] ✅ No jobs to archive (all 700 jobs within 7-day window)
[2025-12-20T20:36:14.226Z] [BOT] 💾 Saved posted_jobs.json: 700 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T20:36:14.227Z] [BOT] 📍 [ROUTING] "Multiple Roles - Web Development Student Support" @ edX
[2025-12-20T20:36:14.227Z] [BOT] Category: TECH (matched: "web/mobile dev")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T20:36:14.543Z] [BOT] ✅ Created forum post: 🏢 Multiple Roles - Web Development Student Support @ edX in #💻・tech-jobs
[2025-12-20T20:36:14.543Z] [BOT] ✅ Industry: Multiple Roles - Web Development Student Support @ edX
[2025-12-20T20:36:16.188Z] [BOT] ✅ Created forum post: 🏢 Multiple Roles - Web Development Student Support @ edX in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T20:36:17.690Z] [BOT] 💾 Marked as posted: Multiple Roles - Web Development Student Support @ edX (instance #1)
[2025-12-20T20:36:17.690Z] [BOT] 💾 BEFORE ARCHIVING: 701 jobs in database
[2025-12-20T20:36:17.691Z] [BOT] ✅ No jobs to archive (all 701 jobs within 7-day window)
[2025-12-20T20:36:17.697Z] [BOT] 💾 Saved posted_jobs.json: 701 active jobs
[2025-12-20T20:36:17.697Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:36:17.697Z] [BOT] 📍 [ROUTING] "Graduate Leadership Program - AI & Software Engineering" @ ORG_b2822ace
   Category: TECH (matched: "software")
[2025-12-20T20:36:17.697Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T20:36:17.835Z] [BOT] ✅ Created forum post: 🏢 Graduate Leadership Program - AI & Software Engineering @ ORG_b2822ace in #💻・tech-jobs
  ✅ Industry: Graduate Leadership Program - AI & Software Engineering @ ORG_b2822ace
[2025-12-20T20:36:19.489Z] [BOT] ✅ Created forum post: 🏢 Graduate Leadership Program - AI & Software Engineering @ ORG_b2822ace in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-20T20:36:20.990Z] [BOT] 💾 Marked as posted: Graduate Leadership Program - AI & Software Engineering @ ORG_b2822ace (instance #1)
[2025-12-20T20:36:20.990Z] [BOT] 💾 BEFORE ARCHIVING: 702 jobs in database
[2025-12-20T20:36:20.990Z] [BOT] ✅ No jobs to archive (all 702 jobs within 7-day window)
[2025-12-20T20:36:20.997Z] [BOT] 💾 Saved posted_jobs.json: 702 active jobs
[2025-12-20T20:36:20.997Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:36:23.998Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2025-12-20T20:36:23.998Z] [BOT] 📍 [ROUTING] "Data Operations Specialist - GenAI Annotation" @ ORG_0b3f1c03inable Talent
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:36:24.326Z] [BOT] ✅ Created forum post: 🏢 Data Operations Specialist - GenAI Annotation @ ORG_0b3f1c03inable Talent in #🤖・ai-jobs
  ✅ Industry: Data Operations Specialist - GenAI Annotation @ ORG_0b3f1c03inable Talent
[2025-12-20T20:36:26.026Z] [BOT] ✅ Created forum post: 🏢 Data Operations Specialist - GenAI Annotation @ ORG_0b3f1c03inable Talent in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T20:36:27.527Z] [BOT] 💾 Marked as posted: Data Operations Specialist - GenAI Annotation @ ORG_0b3f1c03inable Talent (instance #1)
[2025-12-20T20:36:27.527Z] [BOT] 💾 BEFORE ARCHIVING: 703 jobs in database
[2025-12-20T20:36:27.528Z] [BOT] ✅ No jobs to archive (all 703 jobs within 7-day window)
[2025-12-20T20:36:27.535Z] [BOT] 💾 Saved posted_jobs.json: 703 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T20:36:27.536Z] [BOT] 📍 [ROUTING] "2026 – Americas - Salt Lake City - Engineering New Analyst" @ ORG_d49bddaa Sachs
   Category: AI (matched: "machine learning")
[2025-12-20T20:36:27.536Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:36:27.756Z] [BOT] ✅ Created forum post: 🏢 2026 – Americas - Salt Lake City - Engineering New Analyst @ ORG_d49bddaa Sachs in #🤖・ai-jobs
  ✅ Industry: 2026 – Americas - Salt Lake City - Engineering New Analyst @ ORG_d49bddaa Sachs
[2025-12-20T20:36:29.675Z] [BOT] ✅ Created forum post: 🏢 2026 – Americas - Salt Lake City - Engineering New Analyst @ ORG_d49bddaa Sachs in #💻・remote-usa
[2025-12-20T20:36:29.675Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-20T20:36:31.177Z] [BOT] 💾 Marked as posted: 2026 – Americas - Salt Lake City - Engineering New Analyst @ ORG_d49bddaa Sachs (instance #1)
[2025-12-20T20:36:31.177Z] [BOT] 💾 BEFORE ARCHIVING: 704 jobs in database
[2025-12-20T20:36:31.178Z] [BOT] ✅ No jobs to archive (all 704 jobs within 7-day window)
[2025-12-20T20:36:31.184Z] [BOT] 💾 Saved posted_jobs.json: 704 active jobs
[2025-12-20T20:36:31.185Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:36:31.185Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2025-12-20T20:36:31.185Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2025-12-20T20:36:31.392Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #🤖・ai-jobs
[2025-12-20T20:36:31.392Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2025-12-20T20:36:33.089Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-20T20:36:34.590Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California (instance #1)
[2025-12-20T20:36:34.591Z] [BOT] 💾 BEFORE ARCHIVING: 705 jobs in database
[2025-12-20T20:36:34.591Z] [BOT] ✅ No jobs to archive (all 705 jobs within 7-day window)
[2025-12-20T20:36:34.598Z] [BOT] 💾 Saved posted_jobs.json: 705 active jobs
[2025-12-20T20:36:34.598Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:36:34.598Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar - Research Associate" @ ORG_9d38443e of Southern California
[2025-12-20T20:36:34.598Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T20:36:34.831Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Research Associate @ ORG_9d38443e of Southern California in #🤖・ai-jobs
[2025-12-20T20:36:34.831Z] [BOT] ✅ Industry: Postdoctoral Scholar - Research Associate @ ORG_9d38443e of Southern California
[2025-12-20T20:36:37.060Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Research Associate @ ORG_9d38443e of Southern California in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-20T20:36:38.561Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar - Research Associate @ ORG_9d38443e of Southern California (instance #1)
[2025-12-20T20:36:38.562Z] [BOT] 💾 BEFORE ARCHIVING: 706 jobs in database
[2025-12-20T20:36:38.562Z] [BOT] ✅ No jobs to archive (all 706 jobs within 7-day window)
[2025-12-20T20:36:38.568Z] [BOT] 💾 Saved posted_jobs.json: 706 active jobs
[2025-12-20T20:36:38.568Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:36:41.569Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-20T20:36:41.569Z] [BOT] 📍 [ROUTING] "Business Systems Analyst - Application Development" @ ORG_a258b30f Lending Services
[2025-12-20T20:36:41.569Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-20T20:36:41.919Z] [BOT] ✅ Created forum post: 🏢 Business Systems Analyst - Application Development @ ORG_a258b30f Lending Services in #📣・marketing-jobs
  ✅ Industry: Business Systems Analyst - Application Development @ ORG_a258b30f Lending Services
[2025-12-20T20:36:43.684Z] [BOT] ✅ Created forum post: 🏢 Business Systems Analyst - Application Development @ ORG_a258b30f Lending Services in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T20:36:45.185Z] [BOT] 💾 Marked as posted: Business Systems Analyst - Application Development @ ORG_a258b30f Lending Services (instance #1)
[2025-12-20T20:36:45.185Z] [BOT] 💾 BEFORE ARCHIVING: 707 jobs in database
[2025-12-20T20:36:45.186Z] [BOT] ✅ No jobs to archive (all 707 jobs within 7-day window)
[2025-12-20T20:36:45.192Z] [BOT] 💾 Saved posted_jobs.json: 707 active jobs
[2025-12-20T20:36:45.193Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:36:48.193Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-20T20:36:48.193Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_dd747b4f-detail (posted within 7 days)
[2025-12-20T20:36:48.194Z] [BOT] ⏭️  Skipping duplicate: JID_3e7f280d (posted within 7 days)
[2025-12-20T20:36:48.194Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_40f1569e-detail (posted within 7 days)
[2025-12-20T20:36:48.194Z] [BOT] ⏭️  Skipping duplicate: JID_6e7a6309 (posted within 7 days)
[2025-12-20T20:36:48.194Z] [BOT] ⏭️  Skipping duplicate: JID_aba714f4 (posted within 7 days)
[2025-12-20T20:36:48.194Z] [BOT] ⏭️  Skipping duplicate: JID_ca942bfb (posted within 7 days)
[2025-12-20T20:36:48.194Z] [BOT] ⏭️  Skipping duplicate: JID_c851f929 (posted within 7 days)
[2025-12-20T20:36:48.194Z] [BOT] ⏭️  Skipping duplicate: JID_a61ccb38-associate_req20098741 (posted within 7 days)
[2025-12-20T20:36:48.194Z] [BOT] ⏭️  Skipping duplicate: JID_1968ab51-associate_req20161632 (posted within 7 days)
[2025-12-20T20:36:48.195Z] [BOT] ⏭️  Skipping duplicate: JID_e886390a (posted within 7 days)
[2025-12-20T20:36:48.197Z] [BOT] ✅ Loaded pending queue: 243 total (223 pending, 20 enriched, 0 posted)
[2025-12-20T20:36:48.201Z] [BOT] ✅ Saved pending queue: 243 total (223 pending, 10 enriched, 10 posted)
[2025-12-20T20:36:48.201Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-20T20:36:48.242Z] [BOT] 📂 Loaded 772 existing routing entries
[2025-12-20T20:36:48.290Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 782
   Timestamp: 2025-12-20T20:36:48.283Z
[2025-12-20T20:36:48.290Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_8d1a614e.jsonl
[2025-12-20T20:36:48.290Z] [BOT] Total attempts: 20
[2025-12-20T20:36:48.290Z] [BOT] Successful: 20
[2025-12-20T20:36:48.290Z] [BOT] Failed: 0
[2025-12-20T20:36:48.291Z] [BOT] Skipped: 0
[2025-12-20T20:36:48.293Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #💻・remote-usa: 4 posts
     3. #🤖・ai-jobs: 4 posts
     4. #🌉・san-francisco: 3 posts
     5. #🤠・austin: 2 posts
[STATS] Channel stats saved
[2025-12-20T20:36:50.302Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2652) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*