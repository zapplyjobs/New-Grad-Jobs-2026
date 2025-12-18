# Discord Bot Execution Audit
**Timestamp:** 2025-12-18T20:37:36.717Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-18T20:36:42.332Z] ========================================
[2025-12-18T20:36:42.333Z] Discord Bot Execution Log
[2025-12-18T20:36:42.334Z] Environment: GitHub Actions
[2025-12-18T20:36:42.334Z] Node Version: v20.19.6
[2025-12-18T20:36:42.334Z] ========================================
[2025-12-18T20:36:42.334Z] Environment Variables Check:
[2025-12-18T20:36:42.334Z] DISCORD_TOKEN: ✅ Set
[2025-12-18T20:36:42.334Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-18T20:36:42.334Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-18T20:36:42.334Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-18T20:36:42.334Z] 
Multi-Channel Configuration:
[2025-12-18T20:36:42.334Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-18T20:36:42.334Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-18T20:36:42.334Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-18T20:36:42.334Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-18T20:36:42.335Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-18T20:36:42.335Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-18T20:36:42.335Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-18T20:36:42.335Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-18T20:36:42.335Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-18T20:36:42.335Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-18T20:36:42.335Z] 
Data Files Check:
[2025-12-18T20:36:42.336Z] .github/data/new_jobs.json: ✅ Exists (10 items, 185019 bytes)
[2025-12-18T20:36:42.339Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 314878 bytes)
[2025-12-18T20:36:42.339Z] 
========================================
[2025-12-18T20:36:42.339Z] Starting Enhanced Discord Bot...
[2025-12-18T20:36:42.339Z] ========================================
[2025-12-18T20:36:42.857Z] [BOT] ✅ Loaded V2 database: 515 jobs
[2025-12-18T20:36:44.052Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-18T20:36:44.052Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-18T20:36:44.052Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-18T20:36:44.053Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-18T20:36:44.104Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-18T20:36:44.160Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 100
[2025-12-18T20:36:44.162Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-18T20:36:44.162Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-18T20:36:44.162Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-18T20:36:44.163Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-18T20:36:44.163Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-18T20:36:44.170Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-18T20:36:44.170Z] [BOT] 📍 [ROUTING] "Marketing Science Analyst - February 16th - 2026 Start" @ ORG_a7dddf79 Partners
[2025-12-18T20:36:44.170Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-18T20:36:44.187Z] [BOT ERROR] (node:2742) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-18T20:36:45.684Z] [BOT] ✅ Created forum post: 🏢 Marketing Science Analyst - February 16th - 2026 Start @ ORG_a7dddf79 Partners in #📣・marketing-jobs
[2025-12-18T20:36:45.684Z] [BOT] ✅ Industry: Marketing Science Analyst - February 16th - 2026 Start @ ORG_a7dddf79 Partners
[2025-12-18T20:36:47.608Z] [BOT] ✅ Created forum post: 🏢 Marketing Science Analyst - February 16th - 2026 Start @ ORG_a7dddf79 Partners in #🗽・new-york
[2025-12-18T20:36:47.609Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-18T20:36:49.109Z] [BOT] 💾 Marked as posted: Marketing Science Analyst - February 16th - 2026 Start @ ORG_a7dddf79 Partners (instance #1)
[2025-12-18T20:36:49.109Z] [BOT] 💾 BEFORE ARCHIVING: 516 jobs in database
[2025-12-18T20:36:49.110Z] [BOT] ✅ No jobs to archive (all 516 jobs within 7-day window)
[2025-12-18T20:36:49.118Z] [BOT] 💾 Saved posted_jobs.json: 516 active jobs
[2025-12-18T20:36:49.118Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:36:52.119Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-18T20:36:52.120Z] [BOT] 📍 [ROUTING] "Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction" @ ORG_08c9a13c
[2025-12-18T20:36:52.120Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:36:52.559Z] [BOT] ✅ Created forum post: 🏢 Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction @ ORG_08c9a13c in #💻・tech-jobs
[2025-12-18T20:36:52.559Z] [BOT] ✅ Industry: Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction @ ORG_08c9a13c
[2025-12-18T20:36:54.293Z] [BOT] ✅ Created forum post: 🏢 Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T20:36:55.794Z] [BOT] 💾 Marked as posted: Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction @ ORG_08c9a13c (instance #1)
[2025-12-18T20:36:55.794Z] [BOT] 💾 BEFORE ARCHIVING: 517 jobs in database
[2025-12-18T20:36:55.794Z] [BOT] ✅ No jobs to archive (all 517 jobs within 7-day window)
[2025-12-18T20:36:55.800Z] [BOT] 💾 Saved posted_jobs.json: 517 active jobs
[2025-12-18T20:36:55.800Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:36:55.800Z] [BOT] 📍 [ROUTING] "Instrument Operator - Surveying" @ ORG_b01859ad
[2025-12-18T20:36:55.801Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:36:56.130Z] [BOT] ✅ Created forum post: 🏢 Instrument Operator - Surveying @ ORG_b01859ad in #💻・tech-jobs
  ✅ Industry: Instrument Operator - Surveying @ ORG_b01859ad
[2025-12-18T20:36:57.938Z] [BOT] ✅ Created forum post: 🏢 Instrument Operator - Surveying @ ORG_b01859ad in #🗽・new-york
[2025-12-18T20:36:57.938Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-18T20:36:59.438Z] [BOT] 💾 Marked as posted: Instrument Operator - Surveying @ ORG_b01859ad (instance #1)
[2025-12-18T20:36:59.438Z] [BOT] 💾 BEFORE ARCHIVING: 518 jobs in database
[2025-12-18T20:36:59.438Z] [BOT] ✅ No jobs to archive (all 518 jobs within 7-day window)
[2025-12-18T20:36:59.443Z] [BOT] 💾 Saved posted_jobs.json: 518 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:36:59.444Z] [BOT] 📍 [ROUTING] "Java Developer" @ 360 IT Professionals
   Category: TECH (matched: "software")
[2025-12-18T20:36:59.444Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:36:59.630Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ 360 IT Professionals in #💻・tech-jobs
[2025-12-18T20:36:59.630Z] [BOT] ✅ Industry: Java Developer @ 360 IT Professionals
[2025-12-18T20:37:01.392Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ 360 IT Professionals in #🌆・chicago
[2025-12-18T20:37:01.392Z] [BOT] ✅ Location: 🌆・chicago
[2025-12-18T20:37:02.892Z] [BOT] 💾 Marked as posted: Java Developer @ 360 IT Professionals (instance #1)
[2025-12-18T20:37:02.892Z] [BOT] 💾 BEFORE ARCHIVING: 519 jobs in database
[2025-12-18T20:37:02.893Z] [BOT] ✅ No jobs to archive (all 519 jobs within 7-day window)
[2025-12-18T20:37:02.898Z] [BOT] 💾 Saved posted_jobs.json: 519 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:37:02.900Z] [BOT] 📍 [ROUTING] "Associate Software Engineer – Seeking 2025 & 2026 Grads" @ ORG_d0ca1d93 Systems
[2025-12-18T20:37:02.900Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:37:03.162Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems
[2025-12-18T20:37:04.902Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T20:37:06.403Z] [BOT] 💾 Marked as posted: Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems (instance #1)
[2025-12-18T20:37:06.403Z] [BOT] 💾 BEFORE ARCHIVING: 520 jobs in database
[2025-12-18T20:37:06.404Z] [BOT] ✅ No jobs to archive (all 520 jobs within 7-day window)
[2025-12-18T20:37:06.409Z] [BOT] 💾 Saved posted_jobs.json: 520 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:37:06.410Z] [BOT] 📍 [ROUTING] "Data Management Analyst 1 - Data Management - Analyst I" @ ORG_d01167bb
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:37:06.631Z] [BOT] ✅ Created forum post: 🏢 Data Management Analyst 1 - Data Management - Analyst I @ ORG_d01167bb in #💻・tech-jobs
  ✅ Industry: Data Management Analyst 1 - Data Management - Analyst I @ ORG_d01167bb
[2025-12-18T20:37:08.501Z] [BOT] ✅ Created forum post: 🏢 Data Management Analyst 1 - Data Management - Analyst I @ ORG_d01167bb in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-18T20:37:10.001Z] [BOT] 💾 Marked as posted: Data Management Analyst 1 - Data Management - Analyst I @ ORG_d01167bb (instance #1)
[2025-12-18T20:37:10.001Z] [BOT] 💾 BEFORE ARCHIVING: 521 jobs in database
[2025-12-18T20:37:10.001Z] [BOT] ✅ No jobs to archive (all 521 jobs within 7-day window)
[2025-12-18T20:37:10.007Z] [BOT] 💾 Saved posted_jobs.json: 521 active jobs
[2025-12-18T20:37:10.007Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:37:13.007Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2025-12-18T20:37:13.007Z] [BOT] 📍 [ROUTING] "Associate Data Scientist" @ ORG_20c5cb2f
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-18T20:37:13.007Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-18T20:37:13.335Z] [BOT] ✅ Created forum post: 🏢 Associate Data Scientist @ ORG_20c5cb2f in #🤖・ai-jobs
[2025-12-18T20:37:13.335Z] [BOT] ✅ Industry: Associate Data Scientist @ ORG_20c5cb2f
[2025-12-18T20:37:15.062Z] [BOT] ✅ Created forum post: 🏢 Associate Data Scientist @ ORG_20c5cb2f in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-18T20:37:16.563Z] [BOT] 💾 Marked as posted: Associate Data Scientist @ ORG_20c5cb2f (instance #1)
[2025-12-18T20:37:16.564Z] [BOT] 💾 BEFORE ARCHIVING: 522 jobs in database
[2025-12-18T20:37:16.564Z] [BOT] ✅ No jobs to archive (all 522 jobs within 7-day window)
[2025-12-18T20:37:16.570Z] [BOT] 💾 Saved posted_jobs.json: 522 active jobs
[2025-12-18T20:37:16.570Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:37:16.570Z] [BOT] 📍 [ROUTING] "Research Engineer - Cbrn" @ ORG_0418e87bind
[2025-12-18T20:37:16.570Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T20:37:16.919Z] [BOT] ✅ Created forum post: 🏢 Research Engineer - Cbrn @ ORG_0418e87bind in #🤖・ai-jobs
  ✅ Industry: Research Engineer - Cbrn @ ORG_0418e87bind
[2025-12-18T20:37:18.970Z] [BOT] ✅ Created forum post: 🏢 Research Engineer - Cbrn @ ORG_0418e87bind in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-18T20:37:20.470Z] [BOT] 💾 Marked as posted: Research Engineer - Cbrn @ ORG_0418e87bind (instance #1)
[2025-12-18T20:37:20.470Z] [BOT] 💾 BEFORE ARCHIVING: 523 jobs in database
[2025-12-18T20:37:20.470Z] [BOT] ✅ No jobs to archive (all 523 jobs within 7-day window)
[2025-12-18T20:37:20.476Z] [BOT] 💾 Saved posted_jobs.json: 523 active jobs
[2025-12-18T20:37:20.476Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:37:20.476Z] [BOT] 📍 [ROUTING] "Product Artificial Intelligence - Engineer" @ ORG_cdb83ff1
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-18T20:37:20.717Z] [BOT] ✅ Created forum post: 🏢 Product Artificial Intelligence - Engineer @ ORG_cdb83ff1 in #🤖・ai-jobs
  ✅ Industry: Product Artificial Intelligence - Engineer @ ORG_cdb83ff1
[2025-12-18T20:37:22.425Z] [BOT] ✅ Created forum post: 🏢 Product Artificial Intelligence - Engineer @ ORG_cdb83ff1 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T20:37:23.927Z] [BOT] 💾 Marked as posted: Product Artificial Intelligence - Engineer @ ORG_cdb83ff1 (instance #1)
[2025-12-18T20:37:23.927Z] [BOT] 💾 BEFORE ARCHIVING: 524 jobs in database
[2025-12-18T20:37:23.927Z] [BOT] ✅ No jobs to archive (all 524 jobs within 7-day window)
[2025-12-18T20:37:23.933Z] [BOT] 💾 Saved posted_jobs.json: 524 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:37:26.935Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-18T20:37:26.936Z] [BOT] 📍 [ROUTING] "Marketing Analytics - Data Analyst - Adp" @ ORG_d0ca1d93 Systems
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-18T20:37:26.936Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T20:37:27.261Z] [BOT] ✅ Created forum post: 🏢 Marketing Analytics - Data Analyst - Adp @ ORG_d0ca1d93 Systems in #📈・JID_fb739488
  ✅ Industry: Marketing Analytics - Data Analyst - Adp @ ORG_d0ca1d93 Systems
[2025-12-18T20:37:29.043Z] [BOT] ✅ Created forum post: 🏢 Marketing Analytics - Data Analyst - Adp @ ORG_d0ca1d93 Systems in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-18T20:37:30.544Z] [BOT] 💾 Marked as posted: Marketing Analytics - Data Analyst - Adp @ ORG_d0ca1d93 Systems (instance #1)
[2025-12-18T20:37:30.544Z] [BOT] 💾 BEFORE ARCHIVING: 525 jobs in database
[2025-12-18T20:37:30.545Z] [BOT] ✅ No jobs to archive (all 525 jobs within 7-day window)
[2025-12-18T20:37:30.551Z] [BOT] 💾 Saved posted_jobs.json: 525 active jobs
[2025-12-18T20:37:30.551Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:37:33.551Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-18T20:37:33.552Z] [BOT] ⏭️  Skipping duplicate: JID_3701653c (posted within 7 days)
[2025-12-18T20:37:33.552Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_4f8514a9-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_113f9ae5-cx_2001-job-73900 (posted within 7 days)
[2025-12-18T20:37:33.552Z] [BOT] ⏭️  Skipping duplicate: JID_13dcb04f (posted within 7 days)
[2025-12-18T20:37:33.552Z] [BOT] ⏭️  Skipping duplicate: JID_ea1316a0 (posted within 7 days)
⏭️  Skipping duplicate: JID_0385974a (posted within 7 days)
⏭️  Skipping duplicate: JID_87f71e81 (posted within 7 days)
[2025-12-18T20:37:33.552Z] [BOT] ⏭️  Skipping duplicate: JID_37aabcfc (posted within 7 days)
[2025-12-18T20:37:33.552Z] [BOT] ⏭️  Skipping duplicate: JID_2a212ed3-engineer_r41757 (posted within 7 days)
[2025-12-18T20:37:33.552Z] [BOT] ⏭️  Skipping duplicate: JID_2d37859d-i_6035 (posted within 7 days)
[2025-12-18T20:37:33.557Z] [BOT] ✅ Loaded pending queue: 457 total (437 pending, 20 enriched, 0 posted)
[2025-12-18T20:37:33.564Z] [BOT] ✅ Saved pending queue: 457 total (437 pending, 10 enriched, 10 posted)
[2025-12-18T20:37:33.564Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-18T20:37:33.603Z] [BOT] 📂 Loaded 499 existing routing entries
[2025-12-18T20:37:33.643Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 509
   Timestamp: 2025-12-18T20:37:33.641Z
[2025-12-18T20:37:33.644Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6b1de7e9.jsonl
   Total attempts: 20
[2025-12-18T20:37:33.644Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-18T20:37:33.644Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 10
   Top channels:
[2025-12-18T20:37:33.644Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🗽・new-york: 4 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🌉・san-francisco: 2 posts
     5. #📣・marketing-jobs: 1 posts
[2025-12-18T20:37:33.645Z] [BOT] [STATS] Channel stats saved
[2025-12-18T20:37:35.657Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2742) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*