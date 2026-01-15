# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T07:04:11.649Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T07:03:22.949Z] ========================================
[2026-01-15T07:03:22.951Z] Discord Bot Execution Log
[2026-01-15T07:03:22.951Z] Environment: GitHub Actions
[2026-01-15T07:03:22.951Z] Node Version: v20.19.6
[2026-01-15T07:03:22.951Z] ========================================
[2026-01-15T07:03:22.951Z] Environment Variables Check:
[2026-01-15T07:03:22.951Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T07:03:22.951Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T07:03:22.952Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T07:03:22.952Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T07:03:22.952Z] 
Multi-Channel Configuration:
[2026-01-15T07:03:22.952Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T07:03:22.952Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T07:03:22.952Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T07:03:22.952Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T07:03:22.952Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T07:03:22.952Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T07:03:22.952Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T07:03:22.952Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T07:03:22.953Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T07:03:22.953Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T07:03:22.953Z] 
Data Files Check:
[2026-01-15T07:03:22.953Z] .github/data/new_jobs.json: ✅ Exists (10 items, 68886 bytes)
[2026-01-15T07:03:22.960Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 881899 bytes)
[2026-01-15T07:03:22.960Z] 
========================================
[2026-01-15T07:03:22.960Z] Starting Enhanced Discord Bot...
[2026-01-15T07:03:22.960Z] ========================================
[2026-01-15T07:03:23.490Z] [BOT] ✅ Loaded V2 database: 1657 jobs
[2026-01-15T07:03:24.106Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T07:03:24.106Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T07:03:24.106Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T07:03:24.222Z] [BOT] ✅ Loaded pending queue: 2729 total (2709 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Engineer 1 - Automation and Custom Applications at Magnite
[2026-01-15T07:03:24.224Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T07:03:24.225Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T07:03:24.225Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T07:03:24.226Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-15T07:03:24.226Z] [BOT] (2 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-15T07:03:24.226Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T07:03:24.231Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-15T07:03:24.231Z] [BOT] 📍 [ROUTING] "Engineer 1 - Automation and Custom Applications" @ ORG_f8b04bf3
[2026-01-15T07:03:24.232Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T07:03:24.249Z] [BOT ERROR] (node:4055) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T07:03:24.473Z] [BOT] ✅ Created forum post: 🏢 Engineer 1 - Automation and Custom Applications @ ORG_f8b04bf3 in #🤖・ai-jobs
[2026-01-15T07:03:24.473Z] [BOT] ✅ Industry: Engineer 1 - Automation and Custom Applications @ ORG_f8b04bf3
[2026-01-15T07:03:26.151Z] [BOT] ✅ Created forum post: 🏢 Engineer 1 - Automation and Custom Applications @ ORG_f8b04bf3 in #🗽・new-york
[2026-01-15T07:03:26.151Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-15T07:03:27.650Z] [BOT] 💾 Marked as posted: Engineer 1 - Automation and Custom Applications @ ORG_f8b04bf3 (instance #1)
[2026-01-15T07:03:27.650Z] [BOT] 💾 BEFORE ARCHIVING: 1658 jobs in database
[2026-01-15T07:03:27.652Z] [BOT] ✅ No jobs to archive (all 1658 jobs within 7-day window)
[2026-01-15T07:03:27.667Z] [BOT] 💾 Saved posted_jobs.json: 1658 active jobs
[2026-01-15T07:03:27.667Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:03:27.667Z] [BOT] 📍 [ROUTING] "Junior Web Developer" @ ORG_726232d3
[2026-01-15T07:03:27.667Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T07:03:27.824Z] [BOT] ✅ Created forum post: 🏢 Junior Web Developer @ ORG_726232d3 in #🤖・ai-jobs
[2026-01-15T07:03:27.824Z] [BOT] ✅ Industry: Junior Web Developer @ ORG_726232d3
[2026-01-15T07:03:29.540Z] [BOT] ✅ Created forum post: 🏢 Junior Web Developer @ ORG_726232d3 in #💻・remote-usa
[2026-01-15T07:03:29.540Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T07:03:31.041Z] [BOT] 💾 Marked as posted: Junior Web Developer @ ORG_726232d3 (instance #1)
[2026-01-15T07:03:31.041Z] [BOT] 💾 BEFORE ARCHIVING: 1659 jobs in database
[2026-01-15T07:03:31.043Z] [BOT] ✅ No jobs to archive (all 1659 jobs within 7-day window)
[2026-01-15T07:03:31.053Z] [BOT] 💾 Saved posted_jobs.json: 1659 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:03:31.054Z] [BOT] 📍 [ROUTING] "React Developer" @ ORG_726232d3
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T07:03:31.054Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T07:03:31.595Z] [BOT] ✅ Created forum post: 🏢 React Developer @ ORG_726232d3 in #🤖・ai-jobs
[2026-01-15T07:03:31.595Z] [BOT] ✅ Industry: React Developer @ ORG_726232d3
[2026-01-15T07:03:33.250Z] [BOT] ✅ Created forum post: 🏢 React Developer @ ORG_726232d3 in #💻・remote-usa
[2026-01-15T07:03:33.250Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T07:03:34.751Z] [BOT] 💾 Marked as posted: React Developer @ ORG_726232d3 (instance #1)
[2026-01-15T07:03:34.752Z] [BOT] 💾 BEFORE ARCHIVING: 1660 jobs in database
[2026-01-15T07:03:34.753Z] [BOT] ✅ No jobs to archive (all 1660 jobs within 7-day window)
[2026-01-15T07:03:34.766Z] [BOT] 💾 Saved posted_jobs.json: 1660 active jobs
[2026-01-15T07:03:34.766Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:03:34.767Z] [BOT] 📍 [ROUTING] "Junior React Developer" @ ORG_726232d3
[2026-01-15T07:03:34.767Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T07:03:34.898Z] [BOT] ✅ Created forum post: 🏢 Junior React Developer @ ORG_726232d3 in #🤖・ai-jobs
  ✅ Industry: Junior React Developer @ ORG_726232d3
[2026-01-15T07:03:36.587Z] [BOT] ✅ Created forum post: 🏢 Junior React Developer @ ORG_726232d3 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T07:03:38.088Z] [BOT] 💾 Marked as posted: Junior React Developer @ ORG_726232d3 (instance #1)
[2026-01-15T07:03:38.088Z] [BOT] 💾 BEFORE ARCHIVING: 1661 jobs in database
[2026-01-15T07:03:38.090Z] [BOT] ✅ No jobs to archive (all 1661 jobs within 7-day window)
[2026-01-15T07:03:38.100Z] [BOT] 💾 Saved posted_jobs.json: 1661 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:03:41.101Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-15T07:03:41.102Z] [BOT] 📍 [ROUTING] "Special Executions Group Analyst / Data Analytics Analyst" @ ORG_e97ba691 Technology Partners
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-15T07:03:41.102Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T07:03:41.264Z] [BOT] ✅ Created forum post: 🏢 Special Executions Group Analyst / Data Analytics Analyst @ ORG_e97ba691 Technology Partners in #📈・JID_fb739488
  ✅ Industry: Special Executions Group Analyst / Data Analytics Analyst @ ORG_e97ba691 Technology Partners
[2026-01-15T07:03:42.902Z] [BOT] ✅ Created forum post: 🏢 Special Executions Group Analyst / Data Analytics Analyst @ ORG_e97ba691 Technology Partners in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T07:03:44.404Z] [BOT] 💾 Marked as posted: Special Executions Group Analyst / Data Analytics Analyst @ ORG_e97ba691 Technology Partners (instance #1)
[2026-01-15T07:03:44.404Z] [BOT] 💾 BEFORE ARCHIVING: 1662 jobs in database
[2026-01-15T07:03:44.405Z] [BOT] ✅ No jobs to archive (all 1662 jobs within 7-day window)
[2026-01-15T07:03:44.416Z] [BOT] 💾 Saved posted_jobs.json: 1662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:03:47.417Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-15T07:03:47.417Z] [BOT] 📍 [ROUTING] "Postgres Engineer" @ supabase
   Category: TECH (matched: "engineer/engineering")
[2026-01-15T07:03:47.417Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:03:47.618Z] [BOT] ✅ Created forum post: 🏢 Postgres Engineer @ supabase in #💻・tech-jobs
  ✅ Industry: Postgres Engineer @ supabase
[2026-01-15T07:03:49.120Z] [BOT] 💾 Marked as posted: Postgres Engineer @ supabase (instance #1)
[2026-01-15T07:03:49.120Z] [BOT] 💾 BEFORE ARCHIVING: 1663 jobs in database
[2026-01-15T07:03:49.121Z] [BOT] ✅ No jobs to archive (all 1663 jobs within 7-day window)
[2026-01-15T07:03:49.134Z] [BOT] 💾 Saved posted_jobs.json: 1663 active jobs
[2026-01-15T07:03:49.134Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:03:49.134Z] [BOT] 📍 [ROUTING] "Post-Doctoral Fellow" @ ORG_f19d0512 Polytechnic Institute
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:03:49.271Z] [BOT] ✅ Created forum post: 🏢 Post-Doctoral Fellow @ ORG_f19d0512 Polytechnic Institute in #💻・tech-jobs
  ✅ Industry: Post-Doctoral Fellow @ ORG_f19d0512 Polytechnic Institute
[2026-01-15T07:03:50.893Z] [BOT] ✅ Created forum post: 🏢 Post-Doctoral Fellow @ ORG_f19d0512 Polytechnic Institute in #🚌・boston
[2026-01-15T07:03:50.893Z] [BOT] ✅ Location: 🚌・boston
[2026-01-15T07:03:52.393Z] [BOT] 💾 Marked as posted: Post-Doctoral Fellow @ ORG_f19d0512 Polytechnic Institute (instance #1)
[2026-01-15T07:03:52.393Z] [BOT] 💾 BEFORE ARCHIVING: 1664 jobs in database
[2026-01-15T07:03:52.395Z] [BOT] ✅ No jobs to archive (all 1664 jobs within 7-day window)
[2026-01-15T07:03:52.408Z] [BOT] 💾 Saved posted_jobs.json: 1664 active jobs
[2026-01-15T07:03:52.408Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:03:52.408Z] [BOT] 📍 [ROUTING] "Software Developer - TS/SCI Polygraph" @ ORG_c910d474 Dynamics Information Technology
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:03:52.606Z] [BOT] ✅ Created forum post: 🏢 Software Developer - TS/SCI Polygraph @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
  ✅ Industry: Software Developer - TS/SCI Polygraph @ ORG_c910d474 Dynamics Information Technology
[2026-01-15T07:03:54.327Z] [BOT] ✅ Created forum post: 🏢 Software Developer - TS/SCI Polygraph @ ORG_c910d474 Dynamics Information Technology in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T07:03:55.827Z] [BOT] 💾 Marked as posted: Software Developer - TS/SCI Polygraph @ ORG_c910d474 Dynamics Information Technology (instance #1)
[2026-01-15T07:03:55.827Z] [BOT] 💾 BEFORE ARCHIVING: 1665 jobs in database
[2026-01-15T07:03:55.828Z] [BOT] ✅ No jobs to archive (all 1665 jobs within 7-day window)
[2026-01-15T07:03:55.841Z] [BOT] 💾 Saved posted_jobs.json: 1665 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:03:55.841Z] [BOT] 📍 [ROUTING] "On-Site Application Engineer - I-Park" @ ORG_e13d59a1 Group
[2026-01-15T07:03:55.841Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:03:55.983Z] [BOT] ✅ Created forum post: 🏢 On-Site Application Engineer - I-Park @ ORG_e13d59a1 Group in #💻・tech-jobs
  ✅ Industry: On-Site Application Engineer - I-Park @ ORG_e13d59a1 Group
[2026-01-15T07:03:57.665Z] [BOT] ✅ Created forum post: 🏢 On-Site Application Engineer - I-Park @ ORG_e13d59a1 Group in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T07:03:59.165Z] [BOT] 💾 Marked as posted: On-Site Application Engineer - I-Park @ ORG_e13d59a1 Group (instance #1)
[2026-01-15T07:03:59.165Z] [BOT] 💾 BEFORE ARCHIVING: 1666 jobs in database
[2026-01-15T07:03:59.167Z] [BOT] ✅ No jobs to archive (all 1666 jobs within 7-day window)
[2026-01-15T07:03:59.178Z] [BOT] 💾 Saved posted_jobs.json: 1666 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:04:02.179Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2026-01-15T07:04:02.180Z] [BOT] 📍 [ROUTING] "Junior Image Scientist" @ ORG_fee50aac
   Category: SUPPLY-CHAIN (matched: "logistics")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2026-01-15T07:04:02.414Z] [BOT] ✅ Created forum post: 🏢 Junior Image Scientist @ ORG_fee50aac in #🏗️・JID_b7c6683f
[2026-01-15T07:04:02.414Z] [BOT] ✅ Industry: Junior Image Scientist @ ORG_fee50aac
[2026-01-15T07:04:04.056Z] [BOT] ✅ Created forum post: 🏢 Junior Image Scientist @ ORG_fee50aac in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T07:04:05.557Z] [BOT] 💾 Marked as posted: Junior Image Scientist @ ORG_fee50aac (instance #1)
[2026-01-15T07:04:05.558Z] [BOT] 💾 BEFORE ARCHIVING: 1667 jobs in database
[2026-01-15T07:04:05.559Z] [BOT] ✅ No jobs to archive (all 1667 jobs within 7-day window)
[2026-01-15T07:04:05.569Z] [BOT] 💾 Saved posted_jobs.json: 1667 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:04:08.570Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T07:04:08.570Z] [BOT] ⏭️  Skipping duplicate: JID_9738cbdc-applications_r-01139 (posted within 7 days)
[2026-01-15T07:04:08.570Z] [BOT] ⏭️  Skipping duplicate: JID_f199842a (posted within 7 days)
[2026-01-15T07:04:08.572Z] [BOT] ⏭️  Skipping duplicate: JID_16958348 (posted within 7 days)
⏭️  Skipping duplicate: JID_6de9817d (posted within 7 days)
⏭️  Skipping duplicate: JID_7a9ea97e (posted within 7 days)
⏭️  Skipping duplicate: JID_24b2ac9b (posted within 7 days)
⏭️  Skipping duplicate: JID_681daa8d-wpi_external_career_site-JID_7585a7ee-fellow_r0003237 (posted within 7 days)
⏭️  Skipping duplicate: JID_3b6de877-kbr_careers-JID_0d3a11ce-scientist_r2098927 (posted within 7 days)
⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_4fdd0ddb-polygraph_rq207428 (posted within 7 days)
⏭️  Skipping duplicate: JID_a825cb18-park_r_00091560 (posted within 7 days)
[2026-01-15T07:04:08.686Z] [BOT] ✅ Loaded pending queue: 2729 total (2709 pending, 20 enriched, 0 posted)
[2026-01-15T07:04:08.865Z] [BOT] ✅ Saved pending queue: 2729 total (2709 pending, 10 enriched, 10 posted)
[2026-01-15T07:04:08.865Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T07:04:08.921Z] [BOT] 📂 Loaded 3835 existing routing entries
[2026-01-15T07:04:08.985Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3845
[2026-01-15T07:04:08.985Z] [BOT] Timestamp: 2026-01-15T07:04:08.969Z
[2026-01-15T07:04:08.986Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
   Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-15T07:04:08.986Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 8
   Top channels:
     1. #💻・remote-usa: 6 posts
     2. #🤖・ai-jobs: 4 posts
     3. #💻・tech-jobs: 4 posts
     4. #🗽・new-york: 1 posts
[2026-01-15T07:04:08.987Z] [BOT] 5. #📈・JID_fb739488: 1 posts
[2026-01-15T07:04:08.987Z] [BOT] [STATS] Channel stats saved
[2026-01-15T07:04:11.012Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4055) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*