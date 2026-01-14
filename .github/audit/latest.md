# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T01:18:17.690Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T01:17:25.407Z] ========================================
[2026-01-14T01:17:25.409Z] Discord Bot Execution Log
[2026-01-14T01:17:25.409Z] Environment: GitHub Actions
[2026-01-14T01:17:25.409Z] Node Version: v20.19.6
[2026-01-14T01:17:25.409Z] ========================================
[2026-01-14T01:17:25.409Z] Environment Variables Check:
[2026-01-14T01:17:25.409Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T01:17:25.410Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T01:17:25.410Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T01:17:25.410Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T01:17:25.410Z] 
Multi-Channel Configuration:
[2026-01-14T01:17:25.410Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T01:17:25.410Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T01:17:25.410Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T01:17:25.410Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T01:17:25.410Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T01:17:25.410Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T01:17:25.410Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T01:17:25.410Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T01:17:25.410Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T01:17:25.411Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T01:17:25.411Z] 
Data Files Check:
[2026-01-14T01:17:25.411Z] .github/data/new_jobs.json: ✅ Exists (10 items, 44598 bytes)
[2026-01-14T01:17:25.416Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 584565 bytes)
[2026-01-14T01:17:25.416Z] 
========================================
[2026-01-14T01:17:25.416Z] Starting Enhanced Discord Bot...
[2026-01-14T01:17:25.416Z] ========================================
[2026-01-14T01:17:25.953Z] [BOT] ✅ Loaded V2 database: 1097 jobs
[2026-01-14T01:17:26.769Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T01:17:26.770Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T01:17:26.770Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T01:17:26.873Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[2026-01-14T01:17:26.873Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Dictionary Software Engineer 1 at CACI
[2026-01-14T01:17:26.877Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T01:17:26.877Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T01:17:26.877Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T01:17:26.878Z] [BOT] 📋 After multi-location grouping: 14 unique jobs to post
[2026-01-14T01:17:26.878Z] [BOT] (6 grouped as same job with different locations)
[2026-01-14T01:17:26.879Z] [BOT] 📍 4 jobs with multiple locations:
   - Software Engineer I, Frontend @ Twitch: san francisco, irvine
   - Account Executive, Mid Market @ brex: salt lake city, utah, united states, san francisco, california, united states
   - Accounting Channel Partnerships Manager @ brex: new york, new york, united states, san francisco, california, united states
   -  Accounting Manager, Legal Entity Controllership @ brex: salt lake city, utah, united states, seattle, washington, united states, san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T01:17:26.884Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-14T01:17:26.884Z] [BOT] 📍 [ROUTING] "Data Dictionary Software Engineer 1" @ ORG_1954b120
[2026-01-14T01:17:26.884Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T01:17:26.901Z] [BOT ERROR] (node:2439) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T01:17:27.185Z] [BOT] ✅ Created forum post: 🏢 Data Dictionary Software Engineer 1 @ ORG_1954b120 in #💻・tech-jobs
  ✅ Industry: Data Dictionary Software Engineer 1 @ ORG_1954b120
[2026-01-14T01:17:28.879Z] [BOT] ✅ Created forum post: 🏢 Data Dictionary Software Engineer 1 @ ORG_1954b120 in #💻・remote-usa
[2026-01-14T01:17:28.879Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T01:17:30.380Z] [BOT] 💾 Marked as posted: Data Dictionary Software Engineer 1 @ ORG_1954b120 (instance #1)
[2026-01-14T01:17:30.380Z] [BOT] 💾 BEFORE ARCHIVING: 1098 jobs in database
[2026-01-14T01:17:30.381Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T01:17:30.386Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
[2026-01-14T01:17:30.386Z] [BOT] ✅ Archiving complete: 5 archived, 1093 active
[2026-01-14T01:17:30.395Z] [BOT] 💾 Saved posted_jobs.json: 1093 active jobs
[2026-01-14T01:17:30.395Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T01:17:30.395Z] [BOT] 📍 [ROUTING] "Junior Backend Engineer" @ ORG_81885e17
[2026-01-14T01:17:30.395Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T01:17:30.623Z] [BOT] ✅ Created forum post: 🏢 Junior Backend Engineer @ ORG_81885e17 in #💻・tech-jobs
[2026-01-14T01:17:30.624Z] [BOT] ✅ Industry: Junior Backend Engineer @ ORG_81885e17
[2026-01-14T01:17:32.444Z] [BOT] ✅ Created forum post: 🏢 Junior Backend Engineer @ ORG_81885e17 in #🌉・san-francisco
[2026-01-14T01:17:32.444Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T01:17:33.944Z] [BOT] 💾 Marked as posted: Junior Backend Engineer @ ORG_81885e17 (instance #1)
[2026-01-14T01:17:33.945Z] [BOT] 💾 BEFORE ARCHIVING: 1094 jobs in database
[2026-01-14T01:17:33.946Z] [BOT] ✅ No jobs to archive (all 1094 jobs within 7-day window)
[2026-01-14T01:17:33.953Z] [BOT] 💾 Saved posted_jobs.json: 1094 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T01:17:33.953Z] [BOT] 📍 [ROUTING] "Software Engineer I, Frontend" @ ORG_a731a58c
[2026-01-14T01:17:33.953Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T01:17:34.373Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I, Frontend @ ORG_a731a58c in #💻・tech-jobs
  ✅ Industry: Software Engineer I, Frontend @ ORG_a731a58c
[2026-01-14T01:17:36.111Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I, Frontend @ ORG_a731a58c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T01:17:37.611Z] [BOT] 💾 Marked as posted: Software Engineer I, Frontend @ ORG_a731a58c (instance #1)
[2026-01-14T01:17:37.612Z] [BOT] 💾 BEFORE ARCHIVING: 1095 jobs in database
[2026-01-14T01:17:37.613Z] [BOT] ✅ No jobs to archive (all 1095 jobs within 7-day window)
[2026-01-14T01:17:37.622Z] [BOT] 💾 Saved posted_jobs.json: 1095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T01:17:37.622Z] [BOT] 💾 Marked as posted: Software Engineer I, Frontend @ ORG_a731a58c (instance #1)
[2026-01-14T01:17:37.622Z] [BOT] 💾 BEFORE ARCHIVING: 1096 jobs in database
[2026-01-14T01:17:37.623Z] [BOT] ✅ No jobs to archive (all 1096 jobs within 7-day window)
[2026-01-14T01:17:37.631Z] [BOT] 💾 Saved posted_jobs.json: 1096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T01:17:37.632Z] [BOT] 📍 [ROUTING] "Scientist – Akron Technical Center" @ ORG_907ed49e
[2026-01-14T01:17:37.632Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T01:17:37.884Z] [BOT] ✅ Created forum post: 🏢 Scientist – Akron Technical Center @ ORG_907ed49e in #💻・tech-jobs
[2026-01-14T01:17:37.884Z] [BOT] ✅ Industry: Scientist – Akron Technical Center @ ORG_907ed49e
[2026-01-14T01:17:39.718Z] [BOT] ✅ Created forum post: 🏢 Scientist – Akron Technical Center @ ORG_907ed49e in #💻・remote-usa
[2026-01-14T01:17:39.718Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T01:17:41.220Z] [BOT] 💾 Marked as posted: Scientist – Akron Technical Center @ ORG_907ed49e (instance #1)
[2026-01-14T01:17:41.220Z] [BOT] 💾 BEFORE ARCHIVING: 1097 jobs in database
[2026-01-14T01:17:41.221Z] [BOT] ✅ No jobs to archive (all 1097 jobs within 7-day window)
[2026-01-14T01:17:41.229Z] [BOT] 💾 Saved posted_jobs.json: 1097 active jobs
[2026-01-14T01:17:41.230Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T01:17:44.230Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-14T01:17:44.231Z] [BOT] 📍 [ROUTING] "Fiber Network Mapping Specialist 4" @ ORG_8d0003a5
[2026-01-14T01:17:44.231Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T01:17:44.581Z] [BOT] ✅ Created forum post: 🏢 Fiber Network Mapping Specialist 4 @ ORG_8d0003a5 in #📣・marketing-jobs
  ✅ Industry: Fiber Network Mapping Specialist 4 @ ORG_8d0003a5
[2026-01-14T01:17:46.291Z] [BOT] ✅ Created forum post: 🏢 Fiber Network Mapping Specialist 4 @ ORG_8d0003a5 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T01:17:47.791Z] [BOT] 💾 Marked as posted: Fiber Network Mapping Specialist 4 @ ORG_8d0003a5 (instance #1)
[2026-01-14T01:17:47.791Z] [BOT] 💾 BEFORE ARCHIVING: 1098 jobs in database
[2026-01-14T01:17:47.792Z] [BOT] ✅ No jobs to archive (all 1098 jobs within 7-day window)
[2026-01-14T01:17:47.801Z] [BOT] 💾 Saved posted_jobs.json: 1098 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T01:17:47.801Z] [BOT] 📍 [ROUTING] "Fiber Network Mapping Specialist 3" @ ORG_8d0003a5
[2026-01-14T01:17:47.802Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T01:17:48.047Z] [BOT] ✅ Created forum post: 🏢 Fiber Network Mapping Specialist 3 @ ORG_8d0003a5 in #📣・marketing-jobs
  ✅ Industry: Fiber Network Mapping Specialist 3 @ ORG_8d0003a5
[2026-01-14T01:17:49.940Z] [BOT] ✅ Created forum post: 🏢 Fiber Network Mapping Specialist 3 @ ORG_8d0003a5 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T01:17:51.441Z] [BOT] 💾 Marked as posted: Fiber Network Mapping Specialist 3 @ ORG_8d0003a5 (instance #1)
[2026-01-14T01:17:51.441Z] [BOT] 💾 BEFORE ARCHIVING: 1099 jobs in database
[2026-01-14T01:17:51.442Z] [BOT] ✅ No jobs to archive (all 1099 jobs within 7-day window)
[2026-01-14T01:17:51.451Z] [BOT] 💾 Saved posted_jobs.json: 1099 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T01:17:54.452Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-14T01:17:54.453Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate - Physics" @ ORG_f5f75c9b U
   Category: AI (matched: "machine learning")
[2026-01-14T01:17:54.453Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T01:17:54.709Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate - Physics @ ORG_f5f75c9b U in #🤖・ai-jobs
[2026-01-14T01:17:54.709Z] [BOT] ✅ Industry: Postdoctoral Research Associate - Physics @ ORG_f5f75c9b U
[2026-01-14T01:17:56.448Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate - Physics @ ORG_f5f75c9b U in #💻・remote-usa
[2026-01-14T01:17:56.448Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T01:17:57.950Z] [BOT] 💾 Marked as posted: Postdoctoral Research Associate - Physics @ ORG_f5f75c9b U (instance #1)
[2026-01-14T01:17:57.950Z] [BOT] 💾 BEFORE ARCHIVING: 1100 jobs in database
[2026-01-14T01:17:57.951Z] [BOT] ✅ No jobs to archive (all 1100 jobs within 7-day window)
[2026-01-14T01:17:57.960Z] [BOT] 💾 Saved posted_jobs.json: 1100 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T01:17:57.960Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer" @ spotify
   Category: AI (matched: "machine learning")
[2026-01-14T01:17:57.960Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-14T01:17:58.333Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer @ spotify in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer @ spotify
[2026-01-14T01:18:00.068Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T01:18:01.568Z] [BOT] 💾 Marked as posted: Machine Learning Engineer @ spotify (instance #1)
[2026-01-14T01:18:01.568Z] [BOT] 💾 BEFORE ARCHIVING: 1101 jobs in database
[2026-01-14T01:18:01.569Z] [BOT] ✅ No jobs to archive (all 1101 jobs within 7-day window)
[2026-01-14T01:18:01.579Z] [BOT] 💾 Saved posted_jobs.json: 1101 active jobs
[2026-01-14T01:18:01.579Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T01:18:01.579Z] [BOT] 📍 [ROUTING] "Backend Engineer" @ spotify
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T01:18:01.795Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer @ spotify in #🤖・ai-jobs
  ✅ Industry: Backend Engineer @ spotify
[2026-01-14T01:18:03.714Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T01:18:05.214Z] [BOT] 💾 Marked as posted: Backend Engineer @ spotify (instance #1)
[2026-01-14T01:18:05.215Z] [BOT] 💾 BEFORE ARCHIVING: 1102 jobs in database
[2026-01-14T01:18:05.215Z] [BOT] ✅ No jobs to archive (all 1102 jobs within 7-day window)
[2026-01-14T01:18:05.224Z] [BOT] 💾 Saved posted_jobs.json: 1102 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T01:18:08.225Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T01:18:08.225Z] [BOT] 📍 [ROUTING] "Junior Business & Technology Analyst" @ ORG_dac437fc Bank
[2026-01-14T01:18:08.225Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-14T01:18:08.417Z] [BOT] ✅ Created forum post: 🏢 Junior Business & Technology Analyst @ ORG_dac437fc Bank in #📈・JID_fb739488
  ✅ Industry: Junior Business & Technology Analyst @ ORG_dac437fc Bank
[2026-01-14T01:18:10.104Z] [BOT] ✅ Created forum post: 🏢 Junior Business & Technology Analyst @ ORG_dac437fc Bank in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T01:18:11.606Z] [BOT] 💾 Marked as posted: Junior Business & Technology Analyst @ ORG_dac437fc Bank (instance #1)
[2026-01-14T01:18:11.606Z] [BOT] 💾 BEFORE ARCHIVING: 1103 jobs in database
[2026-01-14T01:18:11.607Z] [BOT] ✅ No jobs to archive (all 1103 jobs within 7-day window)
[2026-01-14T01:18:11.616Z] [BOT] 💾 Saved posted_jobs.json: 1103 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T01:18:14.616Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T01:18:14.617Z] [BOT] ⏭️  Skipping duplicate: JID_e7388d16-1_320288 (posted within 7 days)
[2026-01-14T01:18:14.617Z] [BOT] ⏭️  Skipping duplicate: JID_9ff5d674 (posted within 7 days)
[2026-01-14T01:18:14.617Z] [BOT] ⏭️  Skipping duplicate: JID_74713f9b (posted within 7 days)
[2026-01-14T01:18:14.617Z] [BOT] ⏭️  Skipping duplicate: JID_c7109edb-iv_r0014038 (posted within 7 days)
[2026-01-14T01:18:14.617Z] [BOT] ⏭️  Skipping duplicate: JID_fc72070d-physics_jr91660 (posted within 7 days)
[2026-01-14T01:18:14.617Z] [BOT] ⏭️  Skipping duplicate: JID_51162df5-engineer_jr3704 (posted within 7 days)
[2026-01-14T01:18:14.617Z] [BOT] ⏭️  Skipping duplicate: JID_c7109edb-iii_r0014033 (posted within 7 days)
[2026-01-14T01:18:14.617Z] [BOT] ⏭️  Skipping duplicate: JID_189c953b-onsite_r6616 (posted within 7 days)
[2026-01-14T01:18:14.618Z] [BOT] ⏭️  Skipping duplicate: JID_bf3e2eb6 (posted within 7 days)
⏭️  Skipping duplicate: JID_6cf2538f (posted within 7 days)
[2026-01-14T01:18:14.736Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[2026-01-14T01:18:14.907Z] [BOT] ✅ Saved pending queue: 2725 total (2705 pending, 10 enriched, 10 posted)
[2026-01-14T01:18:14.907Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T01:18:14.961Z] [BOT] 📂 Loaded 3265 existing routing entries
[2026-01-14T01:18:15.021Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3275
[2026-01-14T01:18:15.021Z] [BOT] Timestamp: 2026-01-14T01:18:15.007Z
[2026-01-14T01:18:15.022Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T01:18:15.022Z] [BOT] Total attempts: 20
   Successful: 20
[2026-01-14T01:18:15.022Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-14T01:18:15.022Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T01:18:15.022Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
     1. #💻・remote-usa: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🗽・new-york: 3 posts
     5. #🌉・san-francisco: 2 posts
[2026-01-14T01:18:15.023Z] [BOT] [STATS] Channel stats saved
[2026-01-14T01:18:17.050Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2439) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*