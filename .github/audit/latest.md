# Discord Bot Execution Audit
**Timestamp:** 2025-12-18T21:04:59.798Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-18T21:04:08.548Z] ========================================
[2025-12-18T21:04:08.550Z] Discord Bot Execution Log
[2025-12-18T21:04:08.550Z] Environment: GitHub Actions
[2025-12-18T21:04:08.550Z] Node Version: v20.19.6
[2025-12-18T21:04:08.550Z] ========================================
[2025-12-18T21:04:08.550Z] Environment Variables Check:
[2025-12-18T21:04:08.550Z] DISCORD_TOKEN: ✅ Set
[2025-12-18T21:04:08.550Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-18T21:04:08.550Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-18T21:04:08.550Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-18T21:04:08.551Z] 
Multi-Channel Configuration:
[2025-12-18T21:04:08.551Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-18T21:04:08.551Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-18T21:04:08.551Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-18T21:04:08.551Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-18T21:04:08.551Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-18T21:04:08.551Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-18T21:04:08.551Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-18T21:04:08.551Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-18T21:04:08.551Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-18T21:04:08.551Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-18T21:04:08.551Z] 
Data Files Check:
[2025-12-18T21:04:08.552Z] .github/data/new_jobs.json: ✅ Exists (10 items, 46532 bytes)
[2025-12-18T21:04:08.555Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 331347 bytes)
[2025-12-18T21:04:08.555Z] 
========================================
[2025-12-18T21:04:08.555Z] Starting Enhanced Discord Bot...
[2025-12-18T21:04:08.555Z] ========================================
[2025-12-18T21:04:09.081Z] [BOT] ✅ Loaded V2 database: 545 jobs
[2025-12-18T21:04:09.599Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-18T21:04:09.600Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-18T21:04:09.600Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-18T21:04:09.600Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-18T21:04:09.649Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-18T21:04:09.701Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 100
[2025-12-18T21:04:09.703Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-18T21:04:09.703Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-18T21:04:09.703Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-18T21:04:09.704Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-18T21:04:09.704Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-18T21:04:09.709Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-18T21:04:09.709Z] [BOT] 📍 [ROUTING] "Technology Development Program 2026 - Servicenow" @ ORG_4048dd74 Bank
[2025-12-18T21:04:09.709Z] [BOT] Category: MARKETING (matched: "brand")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-18T21:04:09.727Z] [BOT ERROR] (node:2433) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-18T21:04:09.937Z] [BOT] ✅ Created forum post: 🏢 Technology Development Program 2026 - Servicenow @ ORG_4048dd74 Bank in #📣・marketing-jobs
[2025-12-18T21:04:09.937Z] [BOT] ✅ Industry: Technology Development Program 2026 - Servicenow @ ORG_4048dd74 Bank
[2025-12-18T21:04:11.974Z] [BOT] ✅ Created forum post: 🏢 Technology Development Program 2026 - Servicenow @ ORG_4048dd74 Bank in #🗽・new-york
[2025-12-18T21:04:11.974Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-18T21:04:13.475Z] [BOT] 💾 Marked as posted: Technology Development Program 2026 - Servicenow @ ORG_4048dd74 Bank (instance #1)
[2025-12-18T21:04:13.476Z] [BOT] 💾 BEFORE ARCHIVING: 546 jobs in database
[2025-12-18T21:04:13.476Z] [BOT] ✅ No jobs to archive (all 546 jobs within 7-day window)
[2025-12-18T21:04:13.485Z] [BOT] 💾 Saved posted_jobs.json: 546 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:04:16.486Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2025-12-18T21:04:16.486Z] [BOT] 📍 [ROUTING] "Software Engineer - Test & Infrastructure I" @ ORG_ba13c5a3 Systems
[2025-12-18T21:04:16.486Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T21:04:16.666Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Test & Infrastructure I @ ORG_ba13c5a3 Systems in #🤖・ai-jobs
[2025-12-18T21:04:16.666Z] [BOT] ✅ Industry: Software Engineer - Test & Infrastructure I @ ORG_ba13c5a3 Systems
[2025-12-18T21:04:18.376Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Test & Infrastructure I @ ORG_ba13c5a3 Systems in #🌆・chicago
[2025-12-18T21:04:18.377Z] [BOT] ✅ Location: 🌆・chicago
[2025-12-18T21:04:19.877Z] [BOT] 💾 Marked as posted: Software Engineer - Test & Infrastructure I @ ORG_ba13c5a3 Systems (instance #1)
[2025-12-18T21:04:19.878Z] [BOT] 💾 BEFORE ARCHIVING: 547 jobs in database
[2025-12-18T21:04:19.878Z] [BOT] ✅ No jobs to archive (all 547 jobs within 7-day window)
[2025-12-18T21:04:19.883Z] [BOT] 💾 Saved posted_jobs.json: 547 active jobs
[2025-12-18T21:04:19.883Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:04:19.885Z] [BOT] 📍 [ROUTING] "Machine Learning Fellowship" @ 10a Labs
[2025-12-18T21:04:19.885Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-18T21:04:19.885Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T21:04:20.107Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Fellowship @ 10a Labs in #🤖・ai-jobs
  ✅ Industry: Machine Learning Fellowship @ 10a Labs
[2025-12-18T21:04:21.994Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Fellowship @ 10a Labs in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-18T21:04:23.495Z] [BOT] 💾 Marked as posted: Machine Learning Fellowship @ 10a Labs (instance #1)
[2025-12-18T21:04:23.495Z] [BOT] 💾 BEFORE ARCHIVING: 548 jobs in database
[2025-12-18T21:04:23.496Z] [BOT] ✅ No jobs to archive (all 548 jobs within 7-day window)
[2025-12-18T21:04:23.501Z] [BOT] 💾 Saved posted_jobs.json: 548 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:04:23.502Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow - Department of Computer Science" @ ORG_9d38443e of Texas - Austin
[2025-12-18T21:04:23.502Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-18T21:04:23.880Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow - Department of Computer Science @ ORG_9d38443e of Texas - Austin in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Fellow - Department of Computer Science @ ORG_9d38443e of Texas - Austin
[2025-12-18T21:04:25.944Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow - Department of Computer Science @ ORG_9d38443e of Texas - Austin in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-18T21:04:27.446Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow - Department of Computer Science @ ORG_9d38443e of Texas - Austin (instance #1)
[2025-12-18T21:04:27.446Z] [BOT] 💾 BEFORE ARCHIVING: 549 jobs in database
[2025-12-18T21:04:27.446Z] [BOT] ✅ No jobs to archive (all 549 jobs within 7-day window)
[2025-12-18T21:04:27.454Z] [BOT] 💾 Saved posted_jobs.json: 549 active jobs
[2025-12-18T21:04:27.455Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:04:27.455Z] [BOT] 📍 [ROUTING] "Entry Level Engineer" @ ORG_fdffd77e
   Category: AI (matched: "AI/ML")
[2025-12-18T21:04:27.455Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T21:04:27.620Z] [BOT] ✅ Created forum post: 🏢 Entry Level Engineer @ ORG_fdffd77e in #🤖・ai-jobs
  ✅ Industry: Entry Level Engineer @ ORG_fdffd77e
[2025-12-18T21:04:29.343Z] [BOT] ✅ Created forum post: 🏢 Entry Level Engineer @ ORG_fdffd77e in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-18T21:04:30.845Z] [BOT] 💾 Marked as posted: Entry Level Engineer @ ORG_fdffd77e (instance #1)
[2025-12-18T21:04:30.845Z] [BOT] 💾 BEFORE ARCHIVING: 550 jobs in database
[2025-12-18T21:04:30.845Z] [BOT] ✅ No jobs to archive (all 550 jobs within 7-day window)
[2025-12-18T21:04:30.851Z] [BOT] 💾 Saved posted_jobs.json: 550 active jobs
[2025-12-18T21:04:30.851Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:04:30.851Z] [BOT] 📍 [ROUTING] "Assistant Professor" @ ORG_f19d0512 Polytechnic Institute
[2025-12-18T21:04:30.851Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-18T21:04:31.080Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor @ ORG_f19d0512 Polytechnic Institute in #🤖・ai-jobs
  ✅ Industry: Assistant Professor @ ORG_f19d0512 Polytechnic Institute
[2025-12-18T21:04:32.925Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor @ ORG_f19d0512 Polytechnic Institute in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-18T21:04:34.425Z] [BOT] 💾 Marked as posted: Assistant Professor @ ORG_f19d0512 Polytechnic Institute (instance #1)
[2025-12-18T21:04:34.426Z] [BOT] 💾 BEFORE ARCHIVING: 551 jobs in database
[2025-12-18T21:04:34.426Z] [BOT] ✅ No jobs to archive (all 551 jobs within 7-day window)
[2025-12-18T21:04:34.432Z] [BOT] 💾 Saved posted_jobs.json: 551 active jobs
[2025-12-18T21:04:34.432Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:04:37.433Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-18T21:04:37.433Z] [BOT] 📍 [ROUTING] "Business Systems Analyst - Data Warehouse" @ ORG_a258b30f Lending Services
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-18T21:04:37.434Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T21:04:37.724Z] [BOT] ✅ Created forum post: 🏢 Business Systems Analyst - Data Warehouse @ ORG_a258b30f Lending Services in #📈・JID_fb739488
  ✅ Industry: Business Systems Analyst - Data Warehouse @ ORG_a258b30f Lending Services
[2025-12-18T21:04:39.390Z] [BOT] ✅ Created forum post: 🏢 Business Systems Analyst - Data Warehouse @ ORG_a258b30f Lending Services in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T21:04:40.891Z] [BOT] 💾 Marked as posted: Business Systems Analyst - Data Warehouse @ ORG_a258b30f Lending Services (instance #1)
[2025-12-18T21:04:40.891Z] [BOT] 💾 BEFORE ARCHIVING: 552 jobs in database
[2025-12-18T21:04:40.892Z] [BOT] ✅ No jobs to archive (all 552 jobs within 7-day window)
[2025-12-18T21:04:40.897Z] [BOT] 💾 Saved posted_jobs.json: 552 active jobs
[2025-12-18T21:04:40.897Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:04:40.898Z] [BOT] 📍 [ROUTING] "Associate Data Scientist" @ ORG_f8d13f3b Health
[2025-12-18T21:04:40.898Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T21:04:41.104Z] [BOT] ✅ Created forum post: 🏢 Associate Data Scientist @ ORG_f8d13f3b Health in #📈・JID_fb739488
[2025-12-18T21:04:41.105Z] [BOT] ✅ Industry: Associate Data Scientist @ ORG_f8d13f3b Health
[2025-12-18T21:04:42.799Z] [BOT] ✅ Created forum post: 🏢 Associate Data Scientist @ ORG_f8d13f3b Health in #🗽・new-york
[2025-12-18T21:04:42.800Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-18T21:04:44.301Z] [BOT] 💾 Marked as posted: Associate Data Scientist @ ORG_f8d13f3b Health (instance #1)
[2025-12-18T21:04:44.301Z] [BOT] 💾 BEFORE ARCHIVING: 553 jobs in database
[2025-12-18T21:04:44.301Z] [BOT] ✅ No jobs to archive (all 553 jobs within 7-day window)
[2025-12-18T21:04:44.307Z] [BOT] 💾 Saved posted_jobs.json: 553 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:04:47.308Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-18T21:04:47.308Z] [BOT] 📍 [ROUTING] "Hoffman Distinguished Postdoctoral Fellow - Nuclear Nonproliferation" @ ORG_76364d81 Berkeley National Laboratory
   Category: TECH (default)
[2025-12-18T21:04:47.308Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T21:04:47.515Z] [BOT] ✅ Created forum post: 🏢 Hoffman Distinguished Postdoctoral Fellow - Nuclear Nonproliferation @ ORG_76364d81 Berkeley National in #💻・tech-jobs
[2025-12-18T21:04:47.515Z] [BOT] ✅ Industry: Hoffman Distinguished Postdoctoral Fellow - Nuclear Nonproliferation @ ORG_76364d81 Berkeley National Laboratory
[2025-12-18T21:04:49.192Z] [BOT] ✅ Created forum post: 🏢 Hoffman Distinguished Postdoctoral Fellow - Nuclear Nonproliferation @ ORG_76364d81 Berkeley National in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T21:04:50.693Z] [BOT] 💾 Marked as posted: Hoffman Distinguished Postdoctoral Fellow - Nuclear Nonproliferation @ ORG_76364d81 Berkeley National Laboratory (instance #1)
[2025-12-18T21:04:50.693Z] [BOT] 💾 BEFORE ARCHIVING: 554 jobs in database
[2025-12-18T21:04:50.693Z] [BOT] ✅ No jobs to archive (all 554 jobs within 7-day window)
[2025-12-18T21:04:50.699Z] [BOT] 💾 Saved posted_jobs.json: 554 active jobs
[2025-12-18T21:04:50.699Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:04:50.699Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_f8d13f3b Health
[2025-12-18T21:04:50.699Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T21:04:50.918Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_f8d13f3b Health in #💻・tech-jobs
[2025-12-18T21:04:50.919Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_f8d13f3b Health
[2025-12-18T21:04:52.571Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_f8d13f3b Health in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-18T21:04:54.071Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_f8d13f3b Health (instance #1)
[2025-12-18T21:04:54.072Z] [BOT] 💾 BEFORE ARCHIVING: 555 jobs in database
[2025-12-18T21:04:54.072Z] [BOT] ✅ No jobs to archive (all 555 jobs within 7-day window)
[2025-12-18T21:04:54.077Z] [BOT] 💾 Saved posted_jobs.json: 555 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:04:57.078Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-18T21:04:57.079Z] [BOT] ⏭️  Skipping duplicate: JID_383acc4d-servicenow_r80405 (posted within 7 days)
[2025-12-18T21:04:57.079Z] [BOT] ⏭️  Skipping duplicate: JID_add51d87 (posted within 7 days)
⏭️  Skipping duplicate: JID_8311e04d (posted within 7 days)
[2025-12-18T21:04:57.079Z] [BOT] ⏭️  Skipping duplicate: JID_2095ae8c (posted within 7 days)
⏭️  Skipping duplicate: JID_feac3e22 (posted within 7 days)
[2025-12-18T21:04:57.079Z] [BOT] ⏭️  Skipping duplicate: JID_87398140 (posted within 7 days)
[2025-12-18T21:04:57.079Z] [BOT] ⏭️  Skipping duplicate: JID_4bd14ce6-science_r_00042583 (posted within 7 days)
[2025-12-18T21:04:57.079Z] [BOT] ⏭️  Skipping duplicate: JID_270ff750 (posted within 7 days)
[2025-12-18T21:04:57.079Z] [BOT] ⏭️  Skipping duplicate: JID_c7528939 (posted within 7 days)
[2025-12-18T21:04:57.079Z] [BOT] ⏭️  Skipping duplicate: JID_681daa8d-wpi_external_career_site-JID_259259e9-professor_r0003284 (posted within 7 days)
[2025-12-18T21:04:57.083Z] [BOT] ✅ Loaded pending queue: 427 total (407 pending, 20 enriched, 0 posted)
[2025-12-18T21:04:57.089Z] [BOT] ✅ Saved pending queue: 427 total (407 pending, 10 enriched, 10 posted)
[2025-12-18T21:04:57.089Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-18T21:04:57.131Z] [BOT] 📂 Loaded 528 existing routing entries
[2025-12-18T21:04:57.176Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2025-12-18T21:04:57.176Z] [BOT] Total entries: 538
   Timestamp: 2025-12-18T21:04:57.173Z
[2025-12-18T21:04:57.177Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6b1de7e9.jsonl
[2025-12-18T21:04:57.177Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-18T21:04:57.177Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-18T21:04:57.177Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 10
   Top channels:
     1. #🗽・new-york: 5 posts
     2. #🤖・ai-jobs: 5 posts
[2025-12-18T21:04:57.177Z] [BOT] 3. #📈・JID_fb739488: 2 posts
     4. #💻・tech-jobs: 2 posts
[2025-12-18T21:04:57.178Z] [BOT] 5. #📣・marketing-jobs: 1 posts
[2025-12-18T21:04:57.178Z] [BOT] [STATS] Channel stats saved
[2025-12-18T21:04:59.190Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2433) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*