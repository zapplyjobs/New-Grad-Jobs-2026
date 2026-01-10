# Discord Bot Execution Audit
**Timestamp:** 2026-01-10T00:45:49.566Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 13
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-10T00:45:09.719Z] ========================================
[2026-01-10T00:45:09.720Z] Discord Bot Execution Log
[2026-01-10T00:45:09.720Z] Environment: GitHub Actions
[2026-01-10T00:45:09.721Z] Node Version: v20.19.6
[2026-01-10T00:45:09.721Z] ========================================
[2026-01-10T00:45:09.721Z] Environment Variables Check:
[2026-01-10T00:45:09.721Z] DISCORD_TOKEN: ✅ Set
[2026-01-10T00:45:09.721Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-10T00:45:09.721Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-10T00:45:09.721Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-10T00:45:09.721Z] 
Multi-Channel Configuration:
[2026-01-10T00:45:09.721Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-10T00:45:09.721Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-10T00:45:09.721Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-10T00:45:09.721Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-10T00:45:09.721Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-10T00:45:09.721Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-10T00:45:09.721Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-10T00:45:09.721Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-10T00:45:09.722Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-10T00:45:09.722Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-10T00:45:09.722Z] 
Data Files Check:
[2026-01-10T00:45:09.722Z] .github/data/new_jobs.json: ✅ Exists (10 items, 97007 bytes)
[2026-01-10T00:45:09.728Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 770899 bytes)
[2026-01-10T00:45:09.728Z] 
========================================
[2026-01-10T00:45:09.728Z] Starting Enhanced Discord Bot...
[2026-01-10T00:45:09.728Z] ========================================
[2026-01-10T00:45:10.254Z] [BOT] ✅ Loaded V2 database: 1503 jobs
[2026-01-10T00:45:10.906Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-10T00:45:10.906Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-10T00:45:10.906Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-10T00:45:10.916Z] [BOT] ✅ Loaded pending queue: 241 total (221 pending, 20 enriched, 0 posted)
[2026-01-10T00:45:10.916Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer at BillionToOne
[2026-01-10T00:45:10.918Z] [BOT] ⏭️  Skipping duplicate: JID_3154d390 (posted within 7 days)
[2026-01-10T00:45:10.918Z] [BOT] ⏭️ Skipping already posted: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-01-10T00:45:10.918Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_8d139cbf-scientist_r00028796-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate - Environmental Engineering - Geology / Scientist at ERM
[2026-01-10T00:45:10.919Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671420 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-10T00:45:10.919Z] [BOT] ⏭️  Skipping duplicate: JID_fa4b2a4c-_r10228-1 (posted within 7 days)
⏭️ Skipping already posted: Analyst Geospatial - GIS at Invenergy
[2026-01-10T00:45:10.919Z] [BOT] ⏭️  Skipping duplicate: JID_09f269c8 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
⏭️  Skipping duplicate: JID_73fc7f0e (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
[2026-01-10T00:45:10.919Z] [BOT] ⏭️  Skipping duplicate: JID_e4f7b470 (posted within 7 days)
[2026-01-10T00:45:10.919Z] [BOT] ⏭️ Skipping already posted: ROLE_40d95d81 at anthropic
⏭️  Skipping duplicate: JID_44a3ab36-developer_r0068238 (posted within 7 days)
[2026-01-10T00:45:10.920Z] [BOT] ⏭️ Skipping already posted: ROLE_4fc63349 at Huntington Bancshares
⏭️  Skipping duplicate: JID_39398126 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer, Cybersecurity Products at anthropic
[2026-01-10T00:45:10.920Z] [BOT] ⏭️  Skipping duplicate: JID_ce1f556b (posted within 7 days)
⏭️ Skipping already posted: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-01-10T00:45:10.920Z] [BOT] ⏭️  Skipping duplicate: JID_9a274ef8 (posted within 7 days)
⏭️ Skipping already posted: Channel Development Representative, West (Phoenix)  at verkada
[2026-01-10T00:45:10.920Z] [BOT] ⏭️  Skipping duplicate: JID_e8212de3 (posted within 7 days)
⏭️ Skipping already posted: Senior Sales Engineer - Key Accounts (West) at datadog
[2026-01-10T00:45:10.920Z] [BOT] ⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer, Universes at anthropic
📬 Found 7 new jobs (13 already posted)...
[2026-01-10T00:45:10.920Z] [BOT] 📋 After blacklist filter: 7 jobs (0 blacklisted)
[2026-01-10T00:45:10.920Z] [BOT] 📋 After data quality filter: 7 jobs (0 invalid)
[2026-01-10T00:45:10.921Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
[2026-01-10T00:45:10.921Z] [BOT] 📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-10T00:45:10.924Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-10T00:45:10.925Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_f5ed86b6
[2026-01-10T00:45:10.926Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-10T00:45:10.930Z] [BOT ERROR] (node:2938) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-10T00:45:11.298Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_f5ed86b6 in #💻・tech-jobs
[2026-01-10T00:45:11.298Z] [BOT] ✅ Industry: Software Engineer @ ORG_f5ed86b6
[2026-01-10T00:45:13.415Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_f5ed86b6 in #🦢・los-angeles
[2026-01-10T00:45:13.415Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-10T00:45:14.917Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_f5ed86b6 (instance #1)
[2026-01-10T00:45:14.917Z] [BOT] 💾 BEFORE ARCHIVING: 1504 jobs in database
[2026-01-10T00:45:14.918Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-10T00:45:14.920Z] [BOT] 📦 Archived 9 jobs to 2026-01.json (9 total in archive)
[2026-01-10T00:45:14.920Z] [BOT] ✅ Archiving complete: 9 archived, 1495 active
[2026-01-10T00:45:14.929Z] [BOT] 💾 Saved posted_jobs.json: 1495 active jobs
[2026-01-10T00:45:14.930Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-10T00:45:14.930Z] [BOT] 📍 [ROUTING] "Integrations Engineer" @ ORG_8851aaa7
[2026-01-10T00:45:14.930Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-10T00:45:15.391Z] [BOT] ✅ Created forum post: 🏢 Integrations Engineer @ ORG_8851aaa7 in #💻・tech-jobs
  ✅ Industry: Integrations Engineer @ ORG_8851aaa7
[2026-01-10T00:45:17.251Z] [BOT] ✅ Created forum post: 🏢 Integrations Engineer @ ORG_8851aaa7 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-10T00:45:18.752Z] [BOT] 💾 Marked as posted: Integrations Engineer @ ORG_8851aaa7 (instance #1)
[2026-01-10T00:45:18.752Z] [BOT] 💾 BEFORE ARCHIVING: 1496 jobs in database
[2026-01-10T00:45:18.753Z] [BOT] ✅ No jobs to archive (all 1496 jobs within 7-day window)
[2026-01-10T00:45:18.763Z] [BOT] 💾 Saved posted_jobs.json: 1496 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-10T00:45:18.765Z] [BOT] 📍 [ROUTING] "Probabilistic Risk Assessment Engineer" @ ORG_41a6741einghouse Electric Company
[2026-01-10T00:45:18.765Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-10T00:45:18.985Z] [BOT] ✅ Created forum post: 🏢 Probabilistic Risk Assessment Engineer @ ORG_41a6741einghouse Electric Company in #💻・tech-jobs
  ✅ Industry: Probabilistic Risk Assessment Engineer @ ORG_41a6741einghouse Electric Company
[2026-01-10T00:45:20.786Z] [BOT] ✅ Created forum post: 🏢 Probabilistic Risk Assessment Engineer @ ORG_41a6741einghouse Electric Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-10T00:45:22.288Z] [BOT] 💾 Marked as posted: Probabilistic Risk Assessment Engineer @ ORG_41a6741einghouse Electric Company (instance #1)
[2026-01-10T00:45:22.288Z] [BOT] 💾 BEFORE ARCHIVING: 1497 jobs in database
[2026-01-10T00:45:22.289Z] [BOT] ✅ No jobs to archive (all 1497 jobs within 7-day window)
[2026-01-10T00:45:22.300Z] [BOT] 💾 Saved posted_jobs.json: 1497 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-10T00:45:25.301Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-10T00:45:25.302Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_6cd9e83c
[2026-01-10T00:45:25.302Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-10T00:45:25.527Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_6cd9e83c in #🤖・ai-jobs
[2026-01-10T00:45:25.527Z] [BOT] ✅ Industry: Software Engineer @ ORG_6cd9e83c
[2026-01-10T00:45:27.391Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_6cd9e83c in #🌄・mountain-view
[2026-01-10T00:45:27.391Z] [BOT] ✅ Location: 🌄・mountain-view
[2026-01-10T00:45:28.893Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_6cd9e83c (instance #1)
[2026-01-10T00:45:28.893Z] [BOT] 💾 BEFORE ARCHIVING: 1498 jobs in database
[2026-01-10T00:45:28.895Z] [BOT] ✅ No jobs to archive (all 1498 jobs within 7-day window)
[2026-01-10T00:45:28.905Z] [BOT] 💾 Saved posted_jobs.json: 1498 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-10T00:45:28.906Z] [BOT] 📍 [ROUTING] "Customer Success Manager, Digital Native Business" @ anthropic
[2026-01-10T00:45:28.907Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-10T00:45:29.119Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager, Digital Native Business @ anthropic in #🤖・ai-jobs
[2026-01-10T00:45:29.120Z] [BOT] ✅ Industry: Customer Success Manager, Digital Native Business @ anthropic
[2026-01-10T00:45:31.028Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager, Digital Native Business @ anthropic in #🌉・san-francisco
[2026-01-10T00:45:31.029Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-10T00:45:32.530Z] [BOT] 💾 Marked as posted: Customer Success Manager, Digital Native Business @ anthropic (instance #1)
[2026-01-10T00:45:32.530Z] [BOT] 💾 BEFORE ARCHIVING: 1499 jobs in database
[2026-01-10T00:45:32.531Z] [BOT] ✅ No jobs to archive (all 1499 jobs within 7-day window)
[2026-01-10T00:45:32.541Z] [BOT] 💾 Saved posted_jobs.json: 1499 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-10T00:45:32.542Z] [BOT] 📍 [ROUTING] "Software Engineer - Entry" @ ORG_7b717950
[2026-01-10T00:45:32.542Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-10T00:45:33.173Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Entry @ ORG_7b717950 in #🤖・ai-jobs
[2026-01-10T00:45:33.173Z] [BOT] ✅ Industry: Software Engineer - Entry @ ORG_7b717950
[2026-01-10T00:45:34.924Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Entry @ ORG_7b717950 in #🌉・san-francisco
[2026-01-10T00:45:34.924Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-10T00:45:36.425Z] [BOT] 💾 Marked as posted: Software Engineer - Entry @ ORG_7b717950 (instance #1)
[2026-01-10T00:45:36.426Z] [BOT] 💾 BEFORE ARCHIVING: 1500 jobs in database
[2026-01-10T00:45:36.427Z] [BOT] ✅ No jobs to archive (all 1500 jobs within 7-day window)
[2026-01-10T00:45:36.436Z] [BOT] 💾 Saved posted_jobs.json: 1500 active jobs
[2026-01-10T00:45:36.436Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-10T00:45:39.437Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-10T00:45:39.438Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate - Mathematics" @ ORG_64dba1b4 University
[2026-01-10T00:45:39.439Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-10T00:45:39.756Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate - Mathematics @ ORG_64dba1b4 University in #📈・JID_fb739488
[2026-01-10T00:45:39.756Z] [BOT] ✅ Industry: Postdoctoral Research Associate - Mathematics @ ORG_64dba1b4 University
[2026-01-10T00:45:41.534Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate - Mathematics @ ORG_64dba1b4 University in #🚌・boston
[2026-01-10T00:45:41.534Z] [BOT] ✅ Location: 🚌・boston
[2026-01-10T00:45:43.036Z] [BOT] 💾 Marked as posted: Postdoctoral Research Associate - Mathematics @ ORG_64dba1b4 University (instance #1)
[2026-01-10T00:45:43.036Z] [BOT] 💾 BEFORE ARCHIVING: 1501 jobs in database
[2026-01-10T00:45:43.037Z] [BOT] ✅ No jobs to archive (all 1501 jobs within 7-day window)
[2026-01-10T00:45:43.048Z] [BOT] 💾 Saved posted_jobs.json: 1501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-10T00:45:46.049Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2026-01-10T00:45:46.049Z] [BOT] ⏭️  Skipping duplicate: JID_9c83c8f4 (posted within 7 days)
[2026-01-10T00:45:46.050Z] [BOT] ⏭️  Skipping duplicate: JID_e568aeac (posted within 7 days)
[2026-01-10T00:45:46.050Z] [BOT] ⏭️  Skipping duplicate: JID_a44e73ca-6078923_13942107 (posted within 7 days)
[2026-01-10T00:45:46.050Z] [BOT] ⏭️  Skipping duplicate: JID_b52ff88b (posted within 7 days)
[2026-01-10T00:45:46.050Z] [BOT] ⏭️  Skipping duplicate: JID_2ea70d65-mathematics_r138207 (posted within 7 days)
[2026-01-10T00:45:46.050Z] [BOT] ⏭️  Skipping duplicate: JID_b26e7c99 (posted within 7 days)
[2026-01-10T00:45:46.050Z] [BOT] ⏭️  Skipping duplicate: JID_73356eb6 (posted within 7 days)
[2026-01-10T00:45:46.062Z] [BOT] ✅ Loaded pending queue: 241 total (221 pending, 20 enriched, 0 posted)
[2026-01-10T00:45:46.083Z] [BOT] ✅ Saved pending queue: 241 total (221 pending, 13 enriched, 7 posted)
[2026-01-10T00:45:46.084Z] [BOT] 📋 Updated queue: marked 7 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-10T00:45:46.136Z] [BOT] 📂 Loaded 2520 existing routing entries
[2026-01-10T00:45:46.196Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
[2026-01-10T00:45:46.196Z] [BOT] Total entries: 2527
   Timestamp: 2026-01-10T00:45:46.185Z
[2026-01-10T00:45:46.197Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c5a28238.jsonl
[2026-01-10T00:45:46.197Z] [BOT] Total attempts: 27
   Successful: 14
   Failed: 0
   Skipped: 13
[2026-01-10T00:45:46.197Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 9
   Top channels:
[2026-01-10T00:45:46.198Z] [BOT] 1. #💻・tech-jobs: 3 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🌉・san-francisco: 2 posts
     4. #🦢・los-angeles: 1 posts
     5. #🗽・new-york: 1 posts
[STATS] Channel stats saved
[2026-01-10T00:45:48.212Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2938) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*