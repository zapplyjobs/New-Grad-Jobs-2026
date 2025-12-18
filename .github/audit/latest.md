# Discord Bot Execution Audit
**Timestamp:** 2025-12-18T20:06:57.774Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-18T20:06:08.308Z] ========================================
[2025-12-18T20:06:08.310Z] Discord Bot Execution Log
[2025-12-18T20:06:08.310Z] Environment: GitHub Actions
[2025-12-18T20:06:08.311Z] Node Version: v20.19.6
[2025-12-18T20:06:08.311Z] ========================================
[2025-12-18T20:06:08.311Z] Environment Variables Check:
[2025-12-18T20:06:08.311Z] DISCORD_TOKEN: ✅ Set
[2025-12-18T20:06:08.311Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-18T20:06:08.311Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-18T20:06:08.311Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-18T20:06:08.311Z] 
Multi-Channel Configuration:
[2025-12-18T20:06:08.311Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-18T20:06:08.312Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-18T20:06:08.312Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-18T20:06:08.312Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-18T20:06:08.312Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-18T20:06:08.312Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-18T20:06:08.312Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-18T20:06:08.312Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-18T20:06:08.312Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-18T20:06:08.312Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-18T20:06:08.312Z] 
Data Files Check:
[2025-12-18T20:06:08.313Z] .github/data/new_jobs.json: ✅ Exists (10 items, 24491 bytes)
[2025-12-18T20:06:08.315Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 302566 bytes)
[2025-12-18T20:06:08.315Z] 
========================================
[2025-12-18T20:06:08.315Z] Starting Enhanced Discord Bot...
[2025-12-18T20:06:08.315Z] ========================================
[2025-12-18T20:06:08.841Z] [BOT] ✅ Loaded V2 database: 495 jobs
[2025-12-18T20:06:09.662Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-18T20:06:09.662Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-18T20:06:09.662Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-18T20:06:09.662Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-18T20:06:09.711Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-18T20:06:09.764Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 105
[2025-12-18T20:06:09.766Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-18T20:06:09.767Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-18T20:06:09.767Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-18T20:06:09.768Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-18T20:06:09.768Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-18T20:06:09.772Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2025-12-18T20:06:09.773Z] [BOT] 📍 [ROUTING] "Scout Search Quality Rater - English - United States" @ ORG_066855bc
[2025-12-18T20:06:09.773Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:06:09.790Z] [BOT ERROR] (node:3492) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-18T20:06:09.998Z] [BOT] ✅ Created forum post: 🏢 Scout Search Quality Rater - English - United States @ ORG_066855bc in #💻・tech-jobs
  ✅ Industry: Scout Search Quality Rater - English - United States @ ORG_066855bc
[2025-12-18T20:06:11.732Z] [BOT] ✅ Created forum post: 🏢 Scout Search Quality Rater - English - United States @ ORG_066855bc in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T20:06:13.232Z] [BOT] 💾 Marked as posted: Scout Search Quality Rater - English - United States @ ORG_066855bc (instance #1)
[2025-12-18T20:06:13.232Z] [BOT] 💾 BEFORE ARCHIVING: 496 jobs in database
[2025-12-18T20:06:13.233Z] [BOT] ✅ No jobs to archive (all 496 jobs within 7-day window)
[2025-12-18T20:06:13.242Z] [BOT] 💾 Saved posted_jobs.json: 496 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:06:13.242Z] [BOT] 📍 [ROUTING] "B-Crew Dockman - 7" @ ORG_b23b6b4d 
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:06:13.518Z] [BOT] ✅ Created forum post: 🏢 B-Crew Dockman - 7 @ ORG_b23b6b4d  in #💻・tech-jobs
[2025-12-18T20:06:13.518Z] [BOT] ✅ Industry: B-Crew Dockman - 7 @ ORG_b23b6b4d
[2025-12-18T20:06:15.256Z] [BOT] ✅ Created forum post: 🏢 B-Crew Dockman - 7 @ ORG_b23b6b4d  in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T20:06:16.756Z] [BOT] 💾 Marked as posted: B-Crew Dockman - 7 @ ORG_b23b6b4d  (instance #1)
[2025-12-18T20:06:16.756Z] [BOT] 💾 BEFORE ARCHIVING: 497 jobs in database
[2025-12-18T20:06:16.757Z] [BOT] ✅ No jobs to archive (all 497 jobs within 7-day window)
[2025-12-18T20:06:16.762Z] [BOT] 💾 Saved posted_jobs.json: 497 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:06:16.762Z] [BOT] 📍 [ROUTING] "Software Engineer - Starship Quality" @ ORG_afd623b1
[2025-12-18T20:06:16.762Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:06:17.133Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Starship Quality @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Starship Quality @ ORG_afd623b1
[2025-12-18T20:06:18.887Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Starship Quality @ ORG_afd623b1 in #🤠・austin
[2025-12-18T20:06:18.887Z] [BOT] ✅ Location: 🤠・austin
[2025-12-18T20:06:20.388Z] [BOT] 💾 Marked as posted: Software Engineer - Starship Quality @ ORG_afd623b1 (instance #1)
[2025-12-18T20:06:20.388Z] [BOT] 💾 BEFORE ARCHIVING: 498 jobs in database
[2025-12-18T20:06:20.389Z] [BOT] ✅ No jobs to archive (all 498 jobs within 7-day window)
[2025-12-18T20:06:20.394Z] [BOT] 💾 Saved posted_jobs.json: 498 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:06:20.394Z] [BOT] 📍 [ROUTING] "Material Handler I" @ ORG_7f2969dd & Minor
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:06:20.665Z] [BOT] ✅ Created forum post: 🏢 Material Handler I @ ORG_7f2969dd & Minor in #💻・tech-jobs
  ✅ Industry: Material Handler I @ ORG_7f2969dd & Minor
[2025-12-18T20:06:22.427Z] [BOT] ✅ Created forum post: 🏢 Material Handler I @ ORG_7f2969dd & Minor in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T20:06:23.929Z] [BOT] 💾 Marked as posted: Material Handler I @ ORG_7f2969dd & Minor (instance #1)
[2025-12-18T20:06:23.929Z] [BOT] 💾 BEFORE ARCHIVING: 499 jobs in database
[2025-12-18T20:06:23.930Z] [BOT] ✅ No jobs to archive (all 499 jobs within 7-day window)
[2025-12-18T20:06:23.935Z] [BOT] 💾 Saved posted_jobs.json: 499 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:06:23.935Z] [BOT] 📍 [ROUTING] "Baseball Operations Associate Analyst" @ ORG_66123962 Giants
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:06:24.147Z] [BOT] ✅ Created forum post: 🏢 Baseball Operations Associate Analyst @ ORG_66123962 Giants in #💻・tech-jobs
  ✅ Industry: Baseball Operations Associate Analyst @ ORG_66123962 Giants
[2025-12-18T20:06:26.046Z] [BOT] ✅ Created forum post: 🏢 Baseball Operations Associate Analyst @ ORG_66123962 Giants in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T20:06:27.546Z] [BOT] 💾 Marked as posted: Baseball Operations Associate Analyst @ ORG_66123962 Giants (instance #1)
[2025-12-18T20:06:27.546Z] [BOT] 💾 BEFORE ARCHIVING: 500 jobs in database
[2025-12-18T20:06:27.546Z] [BOT] ✅ No jobs to archive (all 500 jobs within 7-day window)
[2025-12-18T20:06:27.551Z] [BOT] 💾 Saved posted_jobs.json: 500 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:06:27.551Z] [BOT] 📍 [ROUTING] "Technology Associate" @ ORG_f0945c53
[2025-12-18T20:06:27.551Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:06:27.786Z] [BOT] ✅ Created forum post: 🏢 Technology Associate @ ORG_f0945c53 in #💻・tech-jobs
  ✅ Industry: Technology Associate @ ORG_f0945c53
[2025-12-18T20:06:29.748Z] [BOT] ✅ Created forum post: 🏢 Technology Associate @ ORG_f0945c53 in #💻・remote-usa
[2025-12-18T20:06:29.748Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T20:06:31.249Z] [BOT] 💾 Marked as posted: Technology Associate @ ORG_f0945c53 (instance #1)
[2025-12-18T20:06:31.249Z] [BOT] 💾 BEFORE ARCHIVING: 501 jobs in database
[2025-12-18T20:06:31.249Z] [BOT] ✅ No jobs to archive (all 501 jobs within 7-day window)
[2025-12-18T20:06:31.256Z] [BOT] 💾 Saved posted_jobs.json: 501 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:06:34.256Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-18T20:06:34.256Z] [BOT] 📍 [ROUTING] "Data Analytics Engineer 1 - Future Opening" @ ORG_e9a14aad
   Category: DATA-SCIENCE (matched: "analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T20:06:34.458Z] [BOT] ✅ Created forum post: 🏢 Data Analytics Engineer 1 - Future Opening @ ORG_e9a14aad in #📈・JID_fb739488
  ✅ Industry: Data Analytics Engineer 1 - Future Opening @ ORG_e9a14aad
[2025-12-18T20:06:35.958Z] [BOT] 💾 Marked as posted: Data Analytics Engineer 1 - Future Opening @ ORG_e9a14aad (instance #1)
[2025-12-18T20:06:35.959Z] [BOT] 💾 BEFORE ARCHIVING: 502 jobs in database
[2025-12-18T20:06:35.959Z] [BOT] ✅ No jobs to archive (all 502 jobs within 7-day window)
[2025-12-18T20:06:35.964Z] [BOT] 💾 Saved posted_jobs.json: 502 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:06:35.964Z] [BOT] 📍 [ROUTING] "Analyst 1 - Rotational Program" @ ORG_742553d6 Entertainment
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-18T20:06:36.163Z] [BOT] ✅ Created forum post: 🏢 Analyst 1 - Rotational Program @ ORG_742553d6 Entertainment in #📈・JID_fb739488
  ✅ Industry: Analyst 1 - Rotational Program @ ORG_742553d6 Entertainment
[2025-12-18T20:06:37.856Z] [BOT] ✅ Created forum post: 🏢 Analyst 1 - Rotational Program @ ORG_742553d6 Entertainment in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T20:06:39.356Z] [BOT] 💾 Marked as posted: Analyst 1 - Rotational Program @ ORG_742553d6 Entertainment (instance #1)
[2025-12-18T20:06:39.357Z] [BOT] 💾 BEFORE ARCHIVING: 503 jobs in database
[2025-12-18T20:06:39.357Z] [BOT] ✅ No jobs to archive (all 503 jobs within 7-day window)
[2025-12-18T20:06:39.363Z] [BOT] 💾 Saved posted_jobs.json: 503 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:06:42.364Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-18T20:06:42.364Z] [BOT] 📍 [ROUTING] "Agent Engineer" @ ORG_7c27bb5f Ohio
[2025-12-18T20:06:42.365Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T20:06:42.631Z] [BOT] ✅ Created forum post: 🏢 Agent Engineer @ ORG_7c27bb5f Ohio in #🤖・ai-jobs
[2025-12-18T20:06:42.631Z] [BOT] ✅ Industry: Agent Engineer @ ORG_7c27bb5f Ohio
[2025-12-18T20:06:44.386Z] [BOT] ✅ Created forum post: 🏢 Agent Engineer @ ORG_7c27bb5f Ohio in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T20:06:45.887Z] [BOT] 💾 Marked as posted: Agent Engineer @ ORG_7c27bb5f Ohio (instance #1)
[2025-12-18T20:06:45.887Z] [BOT] 💾 BEFORE ARCHIVING: 504 jobs in database
[2025-12-18T20:06:45.887Z] [BOT] ✅ No jobs to archive (all 504 jobs within 7-day window)
[2025-12-18T20:06:45.893Z] [BOT] 💾 Saved posted_jobs.json: 504 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:06:45.894Z] [BOT] 📍 [ROUTING] "Compiler Optimization Engineer – New College Grad - LLVM and Mlir" @ ORG_0890f456
[2025-12-18T20:06:45.894Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T20:06:46.100Z] [BOT] ✅ Created forum post: 🏢 Compiler Optimization Engineer – New College Grad - LLVM and Mlir @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Compiler Optimization Engineer – New College Grad - LLVM and Mlir @ ORG_0890f456
[2025-12-18T20:06:49.942Z] [BOT] ✅ Created forum post: 🏢 Compiler Optimization Engineer – New College Grad - LLVM and Mlir @ ORG_0890f456 in #🖥️・redmond
[2025-12-18T20:06:49.943Z] [BOT] ✅ Location: 🖥️・redmond
[2025-12-18T20:06:51.443Z] [BOT] 💾 Marked as posted: Compiler Optimization Engineer – New College Grad - LLVM and Mlir @ ORG_0890f456 (instance #1)
[2025-12-18T20:06:51.443Z] [BOT] 💾 BEFORE ARCHIVING: 505 jobs in database
[2025-12-18T20:06:51.444Z] [BOT] ✅ No jobs to archive (all 505 jobs within 7-day window)
[2025-12-18T20:06:51.449Z] [BOT] 💾 Saved posted_jobs.json: 505 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:06:54.450Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-18T20:06:54.450Z] [BOT] ⏭️  Skipping duplicate: JID_6b12b586 (posted within 7 days)
[2025-12-18T20:06:54.450Z] [BOT] ⏭️  Skipping duplicate: JID_06b89b40-universal_logistics_holdings-JID_12c4bbf1-7_jr115349-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_89f6c23a (posted within 7 days)
[2025-12-18T20:06:54.451Z] [BOT] ⏭️  Skipping duplicate: JID_df378c87 (posted within 7 days)
⏭️  Skipping duplicate: JID_29d15e1b-cx_1-job-72821 (posted within 7 days)
[2025-12-18T20:06:54.451Z] [BOT] ⏭️  Skipping duplicate: JID_b09bb8c9-i_req_24_19332 (posted within 7 days)
[2025-12-18T20:06:54.451Z] [BOT] ⏭️  Skipping duplicate: JID_9de1c459 (posted within 7 days)
⏭️  Skipping duplicate: JID_a3059077 (posted within 7 days)
[2025-12-18T20:06:54.451Z] [BOT] ⏭️  Skipping duplicate: JID_84b54c84-cx_2001-job-26148 (posted within 7 days)
[2025-12-18T20:06:54.451Z] [BOT] ⏭️  Skipping duplicate: JID_8b5b81f9-2025_jr2006770 (posted within 7 days)
[2025-12-18T20:06:54.454Z] [BOT] ✅ Loaded pending queue: 477 total (457 pending, 20 enriched, 0 posted)
[2025-12-18T20:06:54.463Z] [BOT] ✅ Saved pending queue: 477 total (457 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2025-12-18T20:06:54.463Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-18T20:06:54.504Z] [BOT] 📂 Loaded 479 existing routing entries
[2025-12-18T20:06:54.546Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 489
   Timestamp: 2025-12-18T20:06:54.543Z
[2025-12-18T20:06:54.546Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6b1de7e9.jsonl
   Total attempts: 19
[2025-12-18T20:06:54.547Z] [BOT] Successful: 19
   Failed: 0
   Skipped: 0
[2025-12-18T20:06:54.547Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 6 posts
[2025-12-18T20:06:54.547Z] [BOT] 2. #💻・remote-usa: 6 posts
     3. #📈・JID_fb739488: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #🤠・austin: 1 posts
[2025-12-18T20:06:54.547Z] [BOT] [STATS] Channel stats saved
[2025-12-18T20:06:56.558Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3492) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*