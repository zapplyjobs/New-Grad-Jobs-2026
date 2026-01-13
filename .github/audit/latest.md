# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T21:53:46.692Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T21:52:52.445Z] ========================================
[2026-01-13T21:52:52.447Z] Discord Bot Execution Log
[2026-01-13T21:52:52.447Z] Environment: GitHub Actions
[2026-01-13T21:52:52.447Z] Node Version: v20.19.6
[2026-01-13T21:52:52.447Z] ========================================
[2026-01-13T21:52:52.447Z] Environment Variables Check:
[2026-01-13T21:52:52.447Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T21:52:52.447Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T21:52:52.448Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T21:52:52.448Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T21:52:52.448Z] 
Multi-Channel Configuration:
[2026-01-13T21:52:52.448Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T21:52:52.448Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T21:52:52.448Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T21:52:52.448Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T21:52:52.448Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T21:52:52.448Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T21:52:52.448Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T21:52:52.448Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T21:52:52.448Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T21:52:52.448Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T21:52:52.448Z] 
Data Files Check:
[2026-01-13T21:52:52.449Z] .github/data/new_jobs.json: ✅ Exists (10 items, 63339 bytes)
[2026-01-13T21:52:52.454Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 532177 bytes)
[2026-01-13T21:52:52.454Z] 
========================================
[2026-01-13T21:52:52.454Z] Starting Enhanced Discord Bot...
[2026-01-13T21:52:52.454Z] ========================================
[2026-01-13T21:52:52.984Z] [BOT] ✅ Loaded V2 database: 1004 jobs
[2026-01-13T21:52:53.508Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T21:52:53.509Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T21:52:53.509Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T21:52:53.627Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Regulatory Data Analyst 1 at First Financial
[2026-01-13T21:52:53.629Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T21:52:53.629Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T21:52:53.629Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T21:52:53.630Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-13T21:52:53.630Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-13T21:52:53.630Z] [BOT] - Senior Growth Marketing Manager @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T21:52:53.635Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T21:52:53.635Z] [BOT] 📍 [ROUTING] "Regulatory Data Analyst 1" @ ORG_a151ceb1 Financial
[2026-01-13T21:52:53.635Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-13T21:52:53.636Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T21:52:53.640Z] [BOT ERROR] (node:2538) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T21:52:53.816Z] [BOT] ✅ Created forum post: 🏢 Regulatory Data Analyst 1 @ ORG_a151ceb1 Financial  in #📈・JID_fb739488
  ✅ Industry: Regulatory Data Analyst 1 @ ORG_a151ceb1 Financial
[2026-01-13T21:52:55.497Z] [BOT] ✅ Created forum post: 🏢 Regulatory Data Analyst 1 @ ORG_a151ceb1 Financial  in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-13T21:52:56.999Z] [BOT] 💾 Marked as posted: Regulatory Data Analyst 1 @ ORG_a151ceb1 Financial  (instance #1)
[2026-01-13T21:52:56.999Z] [BOT] 💾 BEFORE ARCHIVING: 1005 jobs in database
[2026-01-13T21:52:57.000Z] [BOT] ✅ No jobs to archive (all 1005 jobs within 7-day window)
[2026-01-13T21:52:57.011Z] [BOT] 💾 Saved posted_jobs.json: 1005 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T21:53:00.012Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-13T21:53:00.012Z] [BOT] 📍 [ROUTING] "Research Scientist - AI-Mediated Reality and Interaction Research" @ ORG_0890f456
[2026-01-13T21:53:00.012Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T21:53:00.237Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - AI-Mediated Reality and Interaction Research @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-13T21:53:00.238Z] [BOT] ✅ Industry: Research Scientist - AI-Mediated Reality and Interaction Research @ ORG_0890f456
[2026-01-13T21:53:01.983Z] [BOT] ✅ Created forum post: 🏢 Research Scientist - AI-Mediated Reality and Interaction Research @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T21:53:03.484Z] [BOT] 💾 Marked as posted: Research Scientist - AI-Mediated Reality and Interaction Research @ ORG_0890f456 (instance #1)
[2026-01-13T21:53:03.484Z] [BOT] 💾 BEFORE ARCHIVING: 1006 jobs in database
[2026-01-13T21:53:03.485Z] [BOT] ✅ No jobs to archive (all 1006 jobs within 7-day window)
[2026-01-13T21:53:03.495Z] [BOT] 💾 Saved posted_jobs.json: 1006 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T21:53:03.495Z] [BOT] 📍 [ROUTING] "Software Engineer 2" @ ORG_8b09cf05
[2026-01-13T21:53:03.496Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T21:53:03.496Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T21:53:03.678Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 @ ORG_8b09cf05 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 2 @ ORG_8b09cf05
[2026-01-13T21:53:05.491Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 @ ORG_8b09cf05 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T21:53:06.992Z] [BOT] 💾 Marked as posted: Software Engineer 2 @ ORG_8b09cf05 (instance #1)
[2026-01-13T21:53:06.992Z] [BOT] 💾 BEFORE ARCHIVING: 1007 jobs in database
[2026-01-13T21:53:06.993Z] [BOT] ✅ No jobs to archive (all 1007 jobs within 7-day window)
[2026-01-13T21:53:07.002Z] [BOT] 💾 Saved posted_jobs.json: 1007 active jobs
[2026-01-13T21:53:07.002Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:53:07.003Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer, Personalization" @ spotify
[2026-01-13T21:53:07.003Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-13T21:53:07.267Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer, Personalization @ spotify in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer, Personalization @ spotify
[2026-01-13T21:53:09.045Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer, Personalization @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T21:53:10.546Z] [BOT] 💾 Marked as posted: Machine Learning Engineer, Personalization @ spotify (instance #1)
[2026-01-13T21:53:10.546Z] [BOT] 💾 BEFORE ARCHIVING: 1008 jobs in database
[2026-01-13T21:53:10.547Z] [BOT] ✅ No jobs to archive (all 1008 jobs within 7-day window)
[2026-01-13T21:53:10.554Z] [BOT] 💾 Saved posted_jobs.json: 1008 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T21:53:13.555Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-13T21:53:13.555Z] [BOT] 📍 [ROUTING] "EA Sports Academy Software Engineer" @ ORG_a284c4f1 Arts
[2026-01-13T21:53:13.555Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T21:53:13.741Z] [BOT] ✅ Created forum post: 🏢 EA Sports Academy Software Engineer @ ORG_a284c4f1 Arts in #💻・tech-jobs
  ✅ Industry: EA Sports Academy Software Engineer @ ORG_a284c4f1 Arts
[2026-01-13T21:53:15.497Z] [BOT] ✅ Created forum post: 🏢 EA Sports Academy Software Engineer @ ORG_a284c4f1 Arts in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T21:53:16.998Z] [BOT] 💾 Marked as posted: EA Sports Academy Software Engineer @ ORG_a284c4f1 Arts (instance #1)
[2026-01-13T21:53:16.998Z] [BOT] 💾 BEFORE ARCHIVING: 1009 jobs in database
[2026-01-13T21:53:16.999Z] [BOT] ✅ No jobs to archive (all 1009 jobs within 7-day window)
[2026-01-13T21:53:17.008Z] [BOT] 💾 Saved posted_jobs.json: 1009 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T21:53:17.008Z] [BOT] 📍 [ROUTING] "Backend Engineer - AI" @ ORG_dec20a22ing
[2026-01-13T21:53:17.009Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T21:53:17.382Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer - AI @ ORG_dec20a22ing in #💻・tech-jobs
  ✅ Industry: Backend Engineer - AI @ ORG_dec20a22ing
[2026-01-13T21:53:19.077Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer - AI @ ORG_dec20a22ing in #🌉・san-francisco
[2026-01-13T21:53:19.077Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T21:53:20.577Z] [BOT] 💾 Marked as posted: Backend Engineer - AI @ ORG_dec20a22ing (instance #1)
[2026-01-13T21:53:20.577Z] [BOT] 💾 BEFORE ARCHIVING: 1010 jobs in database
[2026-01-13T21:53:20.578Z] [BOT] ✅ No jobs to archive (all 1010 jobs within 7-day window)
[2026-01-13T21:53:20.586Z] [BOT] 💾 Saved posted_jobs.json: 1010 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T21:53:20.587Z] [BOT] 📍 [ROUTING] "Software Engineer - Windows Servicing and Delivery" @ ORG_c7bac469
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T21:53:21.113Z] [BOT] ✅ Created forum post: 🟦 Software Engineer - Windows Servicing and Delivery @ ORG_c7bac469 in #💻・tech-jobs
[2026-01-13T21:53:21.114Z] [BOT] ✅ Industry: Software Engineer - Windows Servicing and Delivery @ ORG_c7bac469
[2026-01-13T21:53:22.886Z] [BOT] ✅ Created forum post: 🟦 Software Engineer - Windows Servicing and Delivery @ ORG_c7bac469 in #🖥️・redmond
  ✅ Location: 🖥️・redmond
[2026-01-13T21:53:24.388Z] [BOT] 💾 Marked as posted: Software Engineer - Windows Servicing and Delivery @ ORG_c7bac469 (instance #1)
[2026-01-13T21:53:24.388Z] [BOT] 💾 BEFORE ARCHIVING: 1011 jobs in database
[2026-01-13T21:53:24.389Z] [BOT] ✅ No jobs to archive (all 1011 jobs within 7-day window)
[2026-01-13T21:53:24.397Z] [BOT] 💾 Saved posted_jobs.json: 1011 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T21:53:24.397Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_c7bac469 (instance #1)
[2026-01-13T21:53:24.397Z] [BOT] 💾 BEFORE ARCHIVING: 1012 jobs in database
[2026-01-13T21:53:24.398Z] [BOT] ✅ No jobs to archive (all 1012 jobs within 7-day window)
[2026-01-13T21:53:24.405Z] [BOT] 💾 Saved posted_jobs.json: 1012 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T21:53:27.406Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-13T21:53:27.406Z] [BOT] 📍 [ROUTING] "Clinical Analyst 1" @ ORG_b344d80e University of Kansas Hospital
   Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-13T21:53:27.686Z] [BOT] ✅ Created forum post: 🏢 Clinical Analyst 1 @ ORG_b344d80e University of Kansas Hospital in #🩺・healthcare-jobs
  ✅ Industry: Clinical Analyst 1 @ ORG_b344d80e University of Kansas Hospital
[2026-01-13T21:53:29.333Z] [BOT] ✅ Created forum post: 🏢 Clinical Analyst 1 @ ORG_b344d80e University of Kansas Hospital in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T21:53:30.835Z] [BOT] 💾 Marked as posted: Clinical Analyst 1 @ ORG_b344d80e University of Kansas Hospital (instance #1)
[2026-01-13T21:53:30.835Z] [BOT] 💾 BEFORE ARCHIVING: 1013 jobs in database
[2026-01-13T21:53:30.836Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-13T21:53:30.843Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
[2026-01-13T21:53:30.844Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:53:33.845Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-13T21:53:33.845Z] [BOT] 📍 [ROUTING] "Compliance Manager, Customer Trust & Third Party Risk" @ figma
[2026-01-13T21:53:33.845Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T21:53:34.040Z] [BOT] ✅ Created forum post: 🏢 Compliance Manager, Customer Trust & Third Party Risk @ figma in #💲・sales-jobs
  ✅ Industry: Compliance Manager, Customer Trust & Third Party Risk @ figma
[2026-01-13T21:53:35.708Z] [BOT] ✅ Created forum post: 🏢 Compliance Manager, Customer Trust & Third Party Risk @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T21:53:37.209Z] [BOT] 💾 Marked as posted: Compliance Manager, Customer Trust & Third Party Risk @ figma (instance #1)
[2026-01-13T21:53:37.209Z] [BOT] 💾 BEFORE ARCHIVING: 1014 jobs in database
[2026-01-13T21:53:37.210Z] [BOT] ✅ No jobs to archive (all 1014 jobs within 7-day window)
[2026-01-13T21:53:37.219Z] [BOT] 💾 Saved posted_jobs.json: 1014 active jobs
[2026-01-13T21:53:37.219Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:53:37.220Z] [BOT] 📍 [ROUTING] "Senior Manager, Revenue Transformation" @ figma
[2026-01-13T21:53:37.220Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T21:53:37.363Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Revenue Transformation @ figma in #💲・sales-jobs
  ✅ Industry: Senior Manager, Revenue Transformation @ figma
[2026-01-13T21:53:39.020Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Revenue Transformation @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T21:53:40.521Z] [BOT] 💾 Marked as posted: Senior Manager, Revenue Transformation @ figma (instance #1)
[2026-01-13T21:53:40.521Z] [BOT] 💾 BEFORE ARCHIVING: 1015 jobs in database
[2026-01-13T21:53:40.522Z] [BOT] ✅ No jobs to archive (all 1015 jobs within 7-day window)
[2026-01-13T21:53:40.531Z] [BOT] 💾 Saved posted_jobs.json: 1015 active jobs
[2026-01-13T21:53:40.531Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:53:43.531Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T21:53:43.531Z] [BOT] ⏭️  Skipping duplicate: JID_64861b63-first_financial_bank-JID_96b813c1-i_jr102396 (posted within 7 days)
[2026-01-13T21:53:43.531Z] [BOT] ⏭️  Skipping duplicate: JID_23c6ec66-2026_jr2009485 (posted within 7 days)
[2026-01-13T21:53:43.531Z] [BOT] ⏭️  Skipping duplicate: JID_6e075de9-en_us-JID_ec2660f8 (posted within 7 days)
[2026-01-13T21:53:43.532Z] [BOT] ⏭️  Skipping duplicate: JID_35f7e58c (posted within 7 days)
[2026-01-13T21:53:43.532Z] [BOT] ⏭️  Skipping duplicate: JID_66f5ee0d (posted within 7 days)
[2026-01-13T21:53:43.532Z] [BOT] ⏭️  Skipping duplicate: JID_cbe31eb0 (posted within 7 days)
[2026-01-13T21:53:43.532Z] [BOT] ⏭️  Skipping duplicate: JID_f10069af (posted within 7 days)
[2026-01-13T21:53:43.532Z] [BOT] ⏭️  Skipping duplicate: JID_6334e6c1-_r-48868-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_000d52dc (posted within 7 days)
⏭️  Skipping duplicate: JID_7ec2eb0c (posted within 7 days)
[2026-01-13T21:53:43.658Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[2026-01-13T21:53:43.820Z] [BOT] ✅ Saved pending queue: 2725 total (2705 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-13T21:53:43.820Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-13T21:53:43.879Z] [BOT] 📂 Loaded 3155 existing routing entries
[2026-01-13T21:53:43.939Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3165
   Timestamp: 2026-01-13T21:53:43.929Z
[2026-01-13T21:53:43.940Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T21:53:43.940Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-13T21:53:43.940Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T21:53:43.940Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 10
   Top channels:
     1. #🌉・san-francisco: 4 posts
[2026-01-13T21:53:43.940Z] [BOT] 2. #🤖・ai-jobs: 3 posts
     3. #💻・remote-usa: 3 posts
     4. #💻・tech-jobs: 3 posts
     5. #💲・sales-jobs: 2 posts
[2026-01-13T21:53:43.941Z] [BOT] [STATS] Channel stats saved
[2026-01-13T21:53:45.967Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2538) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*