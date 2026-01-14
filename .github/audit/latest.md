# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T07:27:47.737Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T07:27:00.411Z] ========================================
[2026-01-14T07:27:00.413Z] Discord Bot Execution Log
[2026-01-14T07:27:00.413Z] Environment: GitHub Actions
[2026-01-14T07:27:00.413Z] Node Version: v20.19.6
[2026-01-14T07:27:00.413Z] ========================================
[2026-01-14T07:27:00.413Z] Environment Variables Check:
[2026-01-14T07:27:00.413Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T07:27:00.413Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T07:27:00.413Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T07:27:00.413Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T07:27:00.413Z] 
Multi-Channel Configuration:
[2026-01-14T07:27:00.414Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T07:27:00.414Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T07:27:00.414Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T07:27:00.414Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T07:27:00.414Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T07:27:00.414Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T07:27:00.414Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T07:27:00.414Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T07:27:00.414Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T07:27:00.414Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T07:27:00.414Z] 
Data Files Check:
[2026-01-14T07:27:00.415Z] .github/data/new_jobs.json: ✅ Exists (10 items, 74471 bytes)
[2026-01-14T07:27:00.420Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 685808 bytes)
[2026-01-14T07:27:00.420Z] 
========================================
[2026-01-14T07:27:00.420Z] Starting Enhanced Discord Bot...
[2026-01-14T07:27:00.420Z] ========================================
[2026-01-14T07:27:00.932Z] [BOT] ✅ Loaded V2 database: 1295 jobs
[2026-01-14T07:27:01.578Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T07:27:01.578Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T07:27:01.579Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T07:27:01.687Z] [BOT] ✅ Loaded pending queue: 2728 total (2708 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Business Intelligence Developer at Auto-Owners Insurance
[2026-01-14T07:27:01.689Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T07:27:01.690Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T07:27:01.690Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T07:27:01.690Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T07:27:01.691Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T07:27:01.693Z] [BOT] 📌 Posting 4 jobs to #📈・JID_fb739488
[2026-01-14T07:27:01.694Z] [BOT] 📍 [ROUTING] "Business Intelligence Developer" @ Auto-Owners Insurance
[2026-01-14T07:27:01.694Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T07:27:01.711Z] [BOT ERROR] (node:2554) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T07:27:01.909Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer @ Auto-Owners Insurance in #📈・JID_fb739488
  ✅ Industry: Business Intelligence Developer @ Auto-Owners Insurance
[2026-01-14T07:27:03.615Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer @ Auto-Owners Insurance in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T07:27:05.116Z] [BOT] 💾 Marked as posted: Business Intelligence Developer @ Auto-Owners Insurance (instance #1)
[2026-01-14T07:27:05.117Z] [BOT] 💾 BEFORE ARCHIVING: 1296 jobs in database
[2026-01-14T07:27:05.118Z] [BOT] ✅ No jobs to archive (all 1296 jobs within 7-day window)
[2026-01-14T07:27:05.131Z] [BOT] 💾 Saved posted_jobs.json: 1296 active jobs
[2026-01-14T07:27:05.131Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:27:05.132Z] [BOT] 📍 [ROUTING] "Human Performance Data Scientist 1" @ ORG_c910d474 Dynamics Information Technology
[2026-01-14T07:27:05.132Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T07:27:05.460Z] [BOT] ✅ Created forum post: 🏢 Human Performance Data Scientist 1 @ ORG_c910d474 Dynamics Information Technology in #📈・JID_fb739488
  ✅ Industry: Human Performance Data Scientist 1 @ ORG_c910d474 Dynamics Information Technology
[2026-01-14T07:27:06.961Z] [BOT] 💾 Marked as posted: Human Performance Data Scientist 1 @ ORG_c910d474 Dynamics Information Technology (instance #1)
[2026-01-14T07:27:06.961Z] [BOT] 💾 BEFORE ARCHIVING: 1297 jobs in database
[2026-01-14T07:27:06.962Z] [BOT] ✅ No jobs to archive (all 1297 jobs within 7-day window)
[2026-01-14T07:27:06.970Z] [BOT] 💾 Saved posted_jobs.json: 1297 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:27:06.971Z] [BOT] 📍 [ROUTING] "Market Intelligence Analyst" @ ORG_3812004b Capital Group
[2026-01-14T07:27:06.971Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-14T07:27:07.170Z] [BOT] ✅ Created forum post: 🏢 Market Intelligence Analyst @ ORG_3812004b Capital Group in #📈・JID_fb739488
[2026-01-14T07:27:07.170Z] [BOT] ✅ Industry: Market Intelligence Analyst @ ORG_3812004b Capital Group
[2026-01-14T07:27:08.875Z] [BOT] ✅ Created forum post: 🏢 Market Intelligence Analyst @ ORG_3812004b Capital Group in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-14T07:27:10.376Z] [BOT] 💾 Marked as posted: Market Intelligence Analyst @ ORG_3812004b Capital Group (instance #1)
[2026-01-14T07:27:10.376Z] [BOT] 💾 BEFORE ARCHIVING: 1298 jobs in database
[2026-01-14T07:27:10.378Z] [BOT] ✅ No jobs to archive (all 1298 jobs within 7-day window)
[2026-01-14T07:27:10.387Z] [BOT] 💾 Saved posted_jobs.json: 1298 active jobs
[2026-01-14T07:27:10.387Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:27:10.388Z] [BOT] 📍 [ROUTING] "Business Intelligence Developer 1" @ ORG_d5eef8ad Space
[2026-01-14T07:27:10.388Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T07:27:10.642Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer 1 @ ORG_d5eef8ad Space in #📈・JID_fb739488
[2026-01-14T07:27:10.643Z] [BOT] ✅ Industry: Business Intelligence Developer 1 @ ORG_d5eef8ad Space
[2026-01-14T07:27:12.391Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer 1 @ ORG_d5eef8ad Space in #💻・remote-usa
[2026-01-14T07:27:12.391Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T07:27:13.892Z] [BOT] 💾 Marked as posted: Business Intelligence Developer 1 @ ORG_d5eef8ad Space (instance #1)
[2026-01-14T07:27:13.893Z] [BOT] 💾 BEFORE ARCHIVING: 1299 jobs in database
[2026-01-14T07:27:13.894Z] [BOT] ✅ No jobs to archive (all 1299 jobs within 7-day window)
[2026-01-14T07:27:13.903Z] [BOT] 💾 Saved posted_jobs.json: 1299 active jobs
[2026-01-14T07:27:13.903Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:27:16.904Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-14T07:27:16.906Z] [BOT] 📍 [ROUTING] "Founding Developer Relations Lead" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T07:27:16.906Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T07:27:17.130Z] [BOT] ✅ Created forum post: 🏢 Founding Developer Relations Lead @ anthropic in #🤖・ai-jobs
  ✅ Industry: Founding Developer Relations Lead @ anthropic
[2026-01-14T07:27:18.839Z] [BOT] ✅ Created forum post: 🏢 Founding Developer Relations Lead @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T07:27:20.340Z] [BOT] 💾 Marked as posted: Founding Developer Relations Lead @ anthropic (instance #1)
[2026-01-14T07:27:20.341Z] [BOT] 💾 BEFORE ARCHIVING: 1300 jobs in database
[2026-01-14T07:27:20.342Z] [BOT] ✅ No jobs to archive (all 1300 jobs within 7-day window)
[2026-01-14T07:27:20.352Z] [BOT] 💾 Saved posted_jobs.json: 1300 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:27:20.352Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_c7bac469
[2026-01-14T07:27:20.353Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T07:27:20.551Z] [BOT] ✅ Created forum post: 🟦 Software Engineer @ ORG_c7bac469 in #🤖・ai-jobs
  ✅ Industry: Software Engineer @ ORG_c7bac469
[2026-01-14T07:27:22.273Z] [BOT] ✅ Created forum post: 🟦 Software Engineer @ ORG_c7bac469 in #🌄・mountain-view
[2026-01-14T07:27:22.274Z] [BOT] ✅ Location: 🌄・mountain-view
[2026-01-14T07:27:23.775Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_c7bac469 (instance #1)
[2026-01-14T07:27:23.775Z] [BOT] 💾 BEFORE ARCHIVING: 1301 jobs in database
[2026-01-14T07:27:23.776Z] [BOT] ✅ No jobs to archive (all 1301 jobs within 7-day window)
[2026-01-14T07:27:23.785Z] [BOT] 💾 Saved posted_jobs.json: 1301 active jobs
[2026-01-14T07:27:23.786Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:27:23.786Z] [BOT] 📍 [ROUTING] "Associate – Investment Analytics and Data - Portfolio Analytics" @ ORG_c9e92d4e Fund Advisors
[2026-01-14T07:27:23.786Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T07:27:24.174Z] [BOT] ✅ Created forum post: 🏢 Associate – Investment Analytics and Data - Portfolio Analytics @ ORG_c9e92d4e Fund Advisors in #🤖・ai-jobs
[2026-01-14T07:27:24.174Z] [BOT] ✅ Industry: Associate – Investment Analytics and Data - Portfolio Analytics @ ORG_c9e92d4e Fund Advisors
[2026-01-14T07:27:25.941Z] [BOT] ✅ Created forum post: 🏢 Associate – Investment Analytics and Data - Portfolio Analytics @ ORG_c9e92d4e Fund Advisors in #💻・remote-usa
[2026-01-14T07:27:25.941Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T07:27:27.442Z] [BOT] 💾 Marked as posted: Associate – Investment Analytics and Data - Portfolio Analytics @ ORG_c9e92d4e Fund Advisors (instance #1)
[2026-01-14T07:27:27.442Z] [BOT] 💾 BEFORE ARCHIVING: 1302 jobs in database
[2026-01-14T07:27:27.443Z] [BOT] ✅ No jobs to archive (all 1302 jobs within 7-day window)
[2026-01-14T07:27:27.452Z] [BOT] 💾 Saved posted_jobs.json: 1302 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:27:27.453Z] [BOT] 📍 [ROUTING] "AI Scientist 1 - Healthcare" @ ORG_9f59c5cf Health Solutions
[2026-01-14T07:27:27.453Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-14T07:27:27.656Z] [BOT] ✅ Created forum post: 🏢 AI Scientist 1 - Healthcare @ ORG_9f59c5cf Health Solutions in #🤖・ai-jobs
[2026-01-14T07:27:27.657Z] [BOT] ✅ Industry: AI Scientist 1 - Healthcare @ ORG_9f59c5cf Health Solutions
[2026-01-14T07:27:29.531Z] [BOT] ✅ Created forum post: 🏢 AI Scientist 1 - Healthcare @ ORG_9f59c5cf Health Solutions in #💻・remote-usa
[2026-01-14T07:27:29.531Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T07:27:31.031Z] [BOT] 💾 Marked as posted: AI Scientist 1 - Healthcare @ ORG_9f59c5cf Health Solutions (instance #1)
[2026-01-14T07:27:31.032Z] [BOT] 💾 BEFORE ARCHIVING: 1303 jobs in database
[2026-01-14T07:27:31.033Z] [BOT] ✅ No jobs to archive (all 1303 jobs within 7-day window)
[2026-01-14T07:27:31.041Z] [BOT] 💾 Saved posted_jobs.json: 1303 active jobs
[2026-01-14T07:27:31.041Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T07:27:31.042Z] [BOT] 📍 [ROUTING] "ML Engineer 2" @ ORG_c3f8be8b
[2026-01-14T07:27:31.042Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T07:27:31.268Z] [BOT] ✅ Created forum post: 🏢 ML Engineer 2 @ ORG_c3f8be8b in #🤖・ai-jobs
  ✅ Industry: ML Engineer 2 @ ORG_c3f8be8b
[2026-01-14T07:27:32.954Z] [BOT] ✅ Created forum post: 🏢 ML Engineer 2 @ ORG_c3f8be8b in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T07:27:34.455Z] [BOT] 💾 Marked as posted: ML Engineer 2 @ ORG_c3f8be8b (instance #1)
[2026-01-14T07:27:34.455Z] [BOT] 💾 BEFORE ARCHIVING: 1304 jobs in database
[2026-01-14T07:27:34.456Z] [BOT] ✅ No jobs to archive (all 1304 jobs within 7-day window)
[2026-01-14T07:27:34.465Z] [BOT] 💾 Saved posted_jobs.json: 1304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:27:37.466Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-14T07:27:37.466Z] [BOT] 📍 [ROUTING] "Research Associate - Electrical and Computer Engineering" @ ORG_15a5b314 Mellon University
   Category: TECH (matched: "engineer/engineering")
[2026-01-14T07:27:37.467Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T07:27:37.745Z] [BOT] ✅ Created forum post: 🏢 Research Associate - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University in #💻・tech-jobs
  ✅ Industry: Research Associate - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University
[2026-01-14T07:27:39.568Z] [BOT] ✅ Created forum post: 🏢 Research Associate - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T07:27:41.068Z] [BOT] 💾 Marked as posted: Research Associate - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University (instance #1)
[2026-01-14T07:27:41.068Z] [BOT] 💾 BEFORE ARCHIVING: 1305 jobs in database
[2026-01-14T07:27:41.069Z] [BOT] ✅ No jobs to archive (all 1305 jobs within 7-day window)
[2026-01-14T07:27:41.089Z] [BOT] 💾 Saved posted_jobs.json: 1305 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T07:27:44.089Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T07:27:44.090Z] [BOT] ⏭️  Skipping duplicate: JID_3872c3b0-developer_r_12154 (posted within 7 days)
[2026-01-14T07:27:44.090Z] [BOT] ⏭️  Skipping duplicate: JID_a8d44a7a (posted within 7 days)
[2026-01-14T07:27:44.090Z] [BOT] ⏭️  Skipping duplicate: JID_3b973b7c (posted within 7 days)
[2026-01-14T07:27:44.091Z] [BOT] ⏭️  Skipping duplicate: JID_16bc128a-dfa_careers-JID_51bbdaf5-_2025-8613 (posted within 7 days)
⏭️  Skipping duplicate: JID_18a793b5-_r-5997 (posted within 7 days)
⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_bfd0c3d7-i_rq210954 (posted within 7 days)
⏭️  Skipping duplicate: JID_554da341-ii_r2882-1 (posted within 7 days)
[2026-01-14T07:27:44.091Z] [BOT] ⏭️  Skipping duplicate: JID_61cd291d-analyst_hr-19578-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_6a87daf6-engineering_2022193 (posted within 7 days)
[2026-01-14T07:27:44.091Z] [BOT] ⏭️  Skipping duplicate: JID_154d0a16-sierra_space_external_career_site-JID_756c755e-co_ara-JID_0276b17a-i_r25115-1 (posted within 7 days)
[2026-01-14T07:27:44.210Z] [BOT] ✅ Loaded pending queue: 2728 total (2708 pending, 20 enriched, 0 posted)
[2026-01-14T07:27:44.382Z] [BOT] ✅ Saved pending queue: 2728 total (2708 pending, 10 enriched, 10 posted)
[2026-01-14T07:27:44.383Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T07:27:44.438Z] [BOT] 📂 Loaded 3415 existing routing entries
[2026-01-14T07:27:44.498Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3425
   Timestamp: 2026-01-14T07:27:44.484Z
[2026-01-14T07:27:44.499Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 19
   Successful: 19
[2026-01-14T07:27:44.499Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-14T07:27:44.499Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T07:27:44.499Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 7
   Top channels:
     1. #💻・remote-usa: 6 posts
     2. #🤖・ai-jobs: 5 posts
     3. #📈・JID_fb739488: 4 posts
[2026-01-14T07:27:44.499Z] [BOT] 4. #🦢・los-angeles: 1 posts
[2026-01-14T07:27:44.499Z] [BOT] 5. #🌉・san-francisco: 1 posts
[2026-01-14T07:27:44.500Z] [BOT] [STATS] Channel stats saved
[2026-01-14T07:27:46.525Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2554) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*