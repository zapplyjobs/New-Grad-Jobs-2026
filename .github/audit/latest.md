# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T15:05:32.682Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T15:04:38.745Z] ========================================
[2026-01-03T15:04:38.747Z] Discord Bot Execution Log
[2026-01-03T15:04:38.747Z] Environment: GitHub Actions
[2026-01-03T15:04:38.747Z] Node Version: v20.19.6
[2026-01-03T15:04:38.747Z] ========================================
[2026-01-03T15:04:38.747Z] Environment Variables Check:
[2026-01-03T15:04:38.747Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T15:04:38.747Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T15:04:38.748Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T15:04:38.748Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T15:04:38.748Z] 
Multi-Channel Configuration:
[2026-01-03T15:04:38.748Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T15:04:38.748Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T15:04:38.748Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T15:04:38.748Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T15:04:38.748Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T15:04:38.748Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T15:04:38.748Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T15:04:38.748Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T15:04:38.748Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T15:04:38.748Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T15:04:38.749Z] 
Data Files Check:
[2026-01-03T15:04:38.750Z] .github/data/new_jobs.json: ✅ Exists (10 items, 176141 bytes)
[2026-01-03T15:04:38.752Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 287710 bytes)
[2026-01-03T15:04:38.752Z] 
========================================
[2026-01-03T15:04:38.752Z] Starting Enhanced Discord Bot...
[2026-01-03T15:04:38.752Z] ========================================
[2026-01-03T15:04:39.274Z] [BOT] ✅ Loaded V2 database: 553 jobs
[2026-01-03T15:04:40.021Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T15:04:40.022Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T15:04:40.022Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T15:04:40.026Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T15:04:40.097Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T15:04:40.188Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T15:04:40.190Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T15:04:40.190Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T15:04:40.190Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T15:04:40.191Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T15:04:40.191Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T15:04:40.196Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T15:04:40.196Z] [BOT] 📍 [ROUTING] "Product Manager, Developer Tools" @ figma
[2026-01-03T15:04:40.196Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
   ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-03T15:04:40.201Z] [BOT ERROR] (node:2380) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T15:04:40.578Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Developer Tools @ figma in #💻・tech-jobs
[2026-01-03T15:04:40.578Z] [BOT] ✅ Industry: Product Manager, Developer Tools @ figma
[2026-01-03T15:04:42.223Z] [BOT] ✅ Created forum post: 🏢 Product Manager, Developer Tools @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:04:43.724Z] [BOT] 💾 Marked as posted: Product Manager, Developer Tools @ figma (instance #1)
[2026-01-03T15:04:43.724Z] [BOT] 💾 BEFORE ARCHIVING: 554 jobs in database
[2026-01-03T15:04:43.725Z] [BOT] ✅ No jobs to archive (all 554 jobs within 7-day window)
[2026-01-03T15:04:43.733Z] [BOT] 💾 Saved posted_jobs.json: 554 active jobs
[2026-01-03T15:04:43.734Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:04:46.734Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T15:04:46.736Z] [BOT] 📍 [ROUTING] "Executive Assistant, Product Support " @ figma
   Category: SALES (matched: "sales")
[2026-01-03T15:04:46.736Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T15:04:46.949Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant, Product Support  @ figma in #💲・sales-jobs
  ✅ Industry: Executive Assistant, Product Support  @ figma
[2026-01-03T15:04:48.599Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant, Product Support  @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:04:50.100Z] [BOT] 💾 Marked as posted: Executive Assistant, Product Support  @ figma (instance #1)
[2026-01-03T15:04:50.100Z] [BOT] 💾 BEFORE ARCHIVING: 555 jobs in database
[2026-01-03T15:04:50.100Z] [BOT] ✅ No jobs to archive (all 555 jobs within 7-day window)
[2026-01-03T15:04:50.106Z] [BOT] 💾 Saved posted_jobs.json: 555 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T15:04:50.107Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial Accounts" @ airtable
[2026-01-03T15:04:50.107Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T15:04:50.381Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Commercial Accounts @ airtable in #💲・sales-jobs
  ✅ Industry: Account Executive, Commercial Accounts @ airtable
[2026-01-03T15:04:52.134Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Commercial Accounts @ airtable in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-03T15:04:53.635Z] [BOT] 💾 Marked as posted: Account Executive, Commercial Accounts @ airtable (instance #1)
[2026-01-03T15:04:53.635Z] [BOT] 💾 BEFORE ARCHIVING: 556 jobs in database
[2026-01-03T15:04:53.636Z] [BOT] ✅ No jobs to archive (all 556 jobs within 7-day window)
[2026-01-03T15:04:53.641Z] [BOT] 💾 Saved posted_jobs.json: 556 active jobs
[2026-01-03T15:04:53.641Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:04:53.642Z] [BOT] 📍 [ROUTING] "Business Development Representative" @ airtable
[2026-01-03T15:04:53.642Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T15:04:53.811Z] [BOT] ✅ Created forum post: 🏢 Business Development Representative @ airtable in #💲・sales-jobs
  ✅ Industry: Business Development Representative @ airtable
[2026-01-03T15:04:55.815Z] [BOT] ✅ Created forum post: 🏢 Business Development Representative @ airtable in #🤠・austin
[2026-01-03T15:04:55.816Z] [BOT] ✅ Location: 🤠・austin
[2026-01-03T15:04:57.316Z] [BOT] 💾 Marked as posted: Business Development Representative @ airtable (instance #1)
[2026-01-03T15:04:57.316Z] [BOT] 💾 BEFORE ARCHIVING: 557 jobs in database
[2026-01-03T15:04:57.317Z] [BOT] ✅ No jobs to archive (all 557 jobs within 7-day window)
[2026-01-03T15:04:57.322Z] [BOT] 💾 Saved posted_jobs.json: 557 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T15:05:00.323Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-03T15:05:00.323Z] [BOT] 📍 [ROUTING] "Analytics Engineer, Product Analytics" @ airtable
[2026-01-03T15:05:00.324Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-03T15:05:00.537Z] [BOT] ✅ Created forum post: 🏢 Analytics Engineer, Product Analytics @ airtable in #🤖・ai-jobs
[2026-01-03T15:05:00.537Z] [BOT] ✅ Industry: Analytics Engineer, Product Analytics @ airtable
[2026-01-03T15:05:02.201Z] [BOT] ✅ Created forum post: 🏢 Analytics Engineer, Product Analytics @ airtable in #🌉・san-francisco
[2026-01-03T15:05:02.202Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T15:05:03.702Z] [BOT] 💾 Marked as posted: Analytics Engineer, Product Analytics @ airtable (instance #1)
[2026-01-03T15:05:03.702Z] [BOT] 💾 BEFORE ARCHIVING: 558 jobs in database
[2026-01-03T15:05:03.702Z] [BOT] ✅ No jobs to archive (all 558 jobs within 7-day window)
[2026-01-03T15:05:03.708Z] [BOT] 💾 Saved posted_jobs.json: 558 active jobs
[2026-01-03T15:05:03.709Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:05:03.709Z] [BOT] 📍 [ROUTING] "Data Scientist, GTM Analytics" @ airtable
   Category: AI (matched: "AI/ML")
[2026-01-03T15:05:03.709Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-03T15:05:03.943Z] [BOT] ✅ Created forum post: 🏢 Data Scientist, GTM Analytics @ airtable in #🤖・ai-jobs
  ✅ Industry: Data Scientist, GTM Analytics @ airtable
[2026-01-03T15:05:05.596Z] [BOT] ✅ Created forum post: 🏢 Data Scientist, GTM Analytics @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:05:07.097Z] [BOT] 💾 Marked as posted: Data Scientist, GTM Analytics @ airtable (instance #1)
[2026-01-03T15:05:07.097Z] [BOT] 💾 BEFORE ARCHIVING: 559 jobs in database
[2026-01-03T15:05:07.097Z] [BOT] ✅ No jobs to archive (all 559 jobs within 7-day window)
[2026-01-03T15:05:07.102Z] [BOT] 💾 Saved posted_jobs.json: 559 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T15:05:07.103Z] [BOT] 📍 [ROUTING] "Engineering Manager, AI Platform " @ airtable
[2026-01-03T15:05:07.103Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T15:05:07.103Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T15:05:07.417Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, AI Platform  @ airtable in #🤖・ai-jobs
  ✅ Industry: Engineering Manager, AI Platform  @ airtable
[2026-01-03T15:05:09.080Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, AI Platform  @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:05:10.581Z] [BOT] 💾 Marked as posted: Engineering Manager, AI Platform  @ airtable (instance #1)
[2026-01-03T15:05:10.581Z] [BOT] 💾 BEFORE ARCHIVING: 560 jobs in database
[2026-01-03T15:05:10.582Z] [BOT] ✅ No jobs to archive (all 560 jobs within 7-day window)
[2026-01-03T15:05:10.587Z] [BOT] 💾 Saved posted_jobs.json: 560 active jobs
[2026-01-03T15:05:10.587Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:05:13.587Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T15:05:13.588Z] [BOT] 📍 [ROUTING] "Builder Relations Lead" @ airtable
[2026-01-03T15:05:13.588Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T15:05:13.784Z] [BOT] ✅ Created forum post: 🏢 Builder Relations Lead @ airtable in #📣・marketing-jobs
[2026-01-03T15:05:13.784Z] [BOT] ✅ Industry: Builder Relations Lead @ airtable
[2026-01-03T15:05:15.477Z] [BOT] ✅ Created forum post: 🏢 Builder Relations Lead @ airtable in #🌉・san-francisco
[2026-01-03T15:05:15.477Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T15:05:16.978Z] [BOT] 💾 Marked as posted: Builder Relations Lead @ airtable (instance #1)
[2026-01-03T15:05:16.978Z] [BOT] 💾 BEFORE ARCHIVING: 561 jobs in database
[2026-01-03T15:05:16.979Z] [BOT] ✅ No jobs to archive (all 561 jobs within 7-day window)
[2026-01-03T15:05:16.984Z] [BOT] 💾 Saved posted_jobs.json: 561 active jobs
[2026-01-03T15:05:16.984Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:05:19.985Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-03T15:05:19.985Z] [BOT] 📍 [ROUTING] "Data Engineer" @ airtable
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T15:05:20.228Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ airtable in #📈・JID_fb739488
  ✅ Industry: Data Engineer @ airtable
[2026-01-03T15:05:21.901Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:05:23.402Z] [BOT] 💾 Marked as posted: Data Engineer @ airtable (instance #1)
[2026-01-03T15:05:23.402Z] [BOT] 💾 BEFORE ARCHIVING: 562 jobs in database
[2026-01-03T15:05:23.403Z] [BOT] ✅ No jobs to archive (all 562 jobs within 7-day window)
[2026-01-03T15:05:23.408Z] [BOT] 💾 Saved posted_jobs.json: 562 active jobs
[2026-01-03T15:05:23.408Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:05:23.408Z] [BOT] 📍 [ROUTING] "Data Scientist, Product Analytics" @ airtable
[2026-01-03T15:05:23.408Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T15:05:23.602Z] [BOT] ✅ Created forum post: 🏢 Data Scientist, Product Analytics @ airtable in #📈・JID_fb739488
  ✅ Industry: Data Scientist, Product Analytics @ airtable
[2026-01-03T15:05:25.293Z] [BOT] ✅ Created forum post: 🏢 Data Scientist, Product Analytics @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:05:26.794Z] [BOT] 💾 Marked as posted: Data Scientist, Product Analytics @ airtable (instance #1)
[2026-01-03T15:05:26.794Z] [BOT] 💾 BEFORE ARCHIVING: 563 jobs in database
[2026-01-03T15:05:26.795Z] [BOT] ✅ No jobs to archive (all 563 jobs within 7-day window)
[2026-01-03T15:05:26.800Z] [BOT] 💾 Saved posted_jobs.json: 563 active jobs
[2026-01-03T15:05:26.800Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:05:29.801Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T15:05:29.801Z] [BOT] ⏭️  Skipping duplicate: JID_88b69ca5 (posted within 7 days)
[2026-01-03T15:05:29.801Z] [BOT] ⏭️  Skipping duplicate: JID_8ae602e1 (posted within 7 days)
⏭️  Skipping duplicate: JID_2a1eeff5 (posted within 7 days)
[2026-01-03T15:05:29.801Z] [BOT] ⏭️  Skipping duplicate: JID_c4ad9978 (posted within 7 days)
⏭️  Skipping duplicate: JID_85cc823a (posted within 7 days)
[2026-01-03T15:05:29.801Z] [BOT] ⏭️  Skipping duplicate: JID_4a63e2fd (posted within 7 days)
[2026-01-03T15:05:29.801Z] [BOT] ⏭️  Skipping duplicate: JID_7548c722 (posted within 7 days)
[2026-01-03T15:05:29.801Z] [BOT] ⏭️  Skipping duplicate: JID_00f8aad3 (posted within 7 days)
⏭️  Skipping duplicate: JID_669502c0 (posted within 7 days)
[2026-01-03T15:05:29.802Z] [BOT] ⏭️  Skipping duplicate: JID_676cc112 (posted within 7 days)
[2026-01-03T15:05:29.863Z] [BOT] ✅ Loaded pending queue: 736 total (716 pending, 20 enriched, 0 posted)
[2026-01-03T15:05:29.950Z] [BOT] ✅ Saved pending queue: 736 total (716 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-03T15:05:29.951Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T15:05:29.995Z] [BOT] 📂 Loaded 1528 existing routing entries
[2026-01-03T15:05:30.043Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-03T15:05:30.043Z] [BOT] Total entries: 1538
   Timestamp: 2026-01-03T15:05:30.036Z
[2026-01-03T15:05:30.044Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T15:05:30.044Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-03T15:05:30.044Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
     1. #🌉・san-francisco: 8 posts
     2. #💲・sales-jobs: 3 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🤠・austin: 2 posts
     5. #📈・JID_fb739488: 2 posts
[2026-01-03T15:05:30.045Z] [BOT] [STATS] Channel stats saved
[2026-01-03T15:05:32.060Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2380) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*