# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T01:13:12.504Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T01:12:17.594Z] ========================================
[2026-01-13T01:12:17.596Z] Discord Bot Execution Log
[2026-01-13T01:12:17.596Z] Environment: GitHub Actions
[2026-01-13T01:12:17.596Z] Node Version: v20.19.6
[2026-01-13T01:12:17.596Z] ========================================
[2026-01-13T01:12:17.597Z] Environment Variables Check:
[2026-01-13T01:12:17.597Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T01:12:17.597Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T01:12:17.597Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T01:12:17.597Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T01:12:17.597Z] 
Multi-Channel Configuration:
[2026-01-13T01:12:17.597Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T01:12:17.597Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T01:12:17.597Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T01:12:17.597Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T01:12:17.598Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T01:12:17.598Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T01:12:17.598Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T01:12:17.598Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T01:12:17.598Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T01:12:17.598Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T01:12:17.598Z] 
Data Files Check:
[2026-01-13T01:12:17.599Z] .github/data/new_jobs.json: ✅ Exists (10 items, 89091 bytes)
[2026-01-13T01:12:17.601Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 346023 bytes)
[2026-01-13T01:12:17.601Z] 
========================================
[2026-01-13T01:12:17.602Z] Starting Enhanced Discord Bot...
[2026-01-13T01:12:17.602Z] ========================================
[2026-01-13T01:12:18.125Z] [BOT] ✅ Loaded V2 database: 650 jobs
[2026-01-13T01:12:18.776Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T01:12:18.776Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T01:12:18.777Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T01:12:18.884Z] [BOT] ✅ Loaded pending queue: 2686 total (2666 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Developer Support Engineer-West Coast at airtable
[2026-01-13T01:12:18.886Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T01:12:18.886Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T01:12:18.886Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T01:12:18.887Z] [BOT] 📋 After multi-location grouping: 15 unique jobs to post
[2026-01-13T01:12:18.887Z] [BOT] (5 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Technical Consultant @ brex: san francisco, california, united states, seattle, washington, united states, new york, new york, united states, salt lake city, utah, united states
   - Associate Technical Consultant @ brex: salt lake city, utah, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-13T01:12:18.888Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T01:12:18.892Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-13T01:12:18.893Z] [BOT] 📍 [ROUTING] "Senior Developer Support Engineer-West Coast" @ airtable
[2026-01-13T01:12:18.893Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T01:12:18.897Z] [BOT ERROR] (node:2643) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T01:12:19.145Z] [BOT] ✅ Created forum post: 🏢 Senior Developer Support Engineer-West Coast @ airtable in #💻・tech-jobs
  ✅ Industry: Senior Developer Support Engineer-West Coast @ airtable
[2026-01-13T01:12:20.917Z] [BOT] ✅ Created forum post: 🏢 Senior Developer Support Engineer-West Coast @ airtable in #🌉・san-francisco
[2026-01-13T01:12:20.917Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T01:12:22.417Z] [BOT] 💾 Marked as posted: Senior Developer Support Engineer-West Coast @ airtable (instance #1)
[2026-01-13T01:12:22.417Z] [BOT] 💾 BEFORE ARCHIVING: 651 jobs in database
[2026-01-13T01:12:22.418Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T01:12:22.427Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-13T01:12:22.427Z] [BOT] ✅ Archiving complete: 10 archived, 641 active
[2026-01-13T01:12:22.434Z] [BOT] 💾 Saved posted_jobs.json: 641 active jobs
[2026-01-13T01:12:22.434Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T01:12:22.434Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Media Network Global Engineering - 2026 Start" @ ORG_08c9a13c
[2026-01-13T01:12:22.434Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T01:12:22.627Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Media Network Global Engineering - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-13T01:12:22.627Z] [BOT] ✅ Industry: Software Engineer Graduate - Media Network Global Engineering - 2026 Start @ ORG_08c9a13c
[2026-01-13T01:12:24.334Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Media Network Global Engineering - 2026 Start @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T01:12:25.834Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Media Network Global Engineering - 2026 Start @ ORG_08c9a13c (instance #1)
[2026-01-13T01:12:25.834Z] [BOT] 💾 BEFORE ARCHIVING: 642 jobs in database
[2026-01-13T01:12:25.835Z] [BOT] ✅ No jobs to archive (all 642 jobs within 7-day window)
[2026-01-13T01:12:25.841Z] [BOT] 💾 Saved posted_jobs.json: 642 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T01:12:25.841Z] [BOT] 📍 [ROUTING] "MFG System Implementations Engineer 1" @ ORG_3a7d2c6a Bottling
   Category: TECH (matched: "engineer/engineering")
[2026-01-13T01:12:25.841Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T01:12:26.089Z] [BOT] ✅ Created forum post: 🏢 MFG System Implementations Engineer 1 @ ORG_3a7d2c6a Bottling in #💻・tech-jobs
  ✅ Industry: MFG System Implementations Engineer 1 @ ORG_3a7d2c6a Bottling
[2026-01-13T01:12:27.808Z] [BOT] ✅ Created forum post: 🏢 MFG System Implementations Engineer 1 @ ORG_3a7d2c6a Bottling in #🦢・los-angeles
[2026-01-13T01:12:27.808Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-13T01:12:29.309Z] [BOT] 💾 Marked as posted: MFG System Implementations Engineer 1 @ ORG_3a7d2c6a Bottling (instance #1)
[2026-01-13T01:12:29.309Z] [BOT] 💾 BEFORE ARCHIVING: 643 jobs in database
[2026-01-13T01:12:29.310Z] [BOT] ✅ No jobs to archive (all 643 jobs within 7-day window)
[2026-01-13T01:12:29.318Z] [BOT] 💾 Saved posted_jobs.json: 643 active jobs
[2026-01-13T01:12:29.318Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T01:12:29.319Z] [BOT] 📍 [ROUTING] "Software Engineer 3" @ ORG_3eab285c
[2026-01-13T01:12:29.319Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T01:12:29.530Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 3 @ ORG_3eab285c in #💻・tech-jobs
[2026-01-13T01:12:29.530Z] [BOT] ✅ Industry: Software Engineer 3 @ ORG_3eab285c
[2026-01-13T01:12:31.422Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 3 @ ORG_3eab285c in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2026-01-13T01:12:32.922Z] [BOT] 💾 Marked as posted: Software Engineer 3 @ ORG_3eab285c (instance #1)
[2026-01-13T01:12:32.922Z] [BOT] 💾 BEFORE ARCHIVING: 644 jobs in database
[2026-01-13T01:12:32.923Z] [BOT] ✅ No jobs to archive (all 644 jobs within 7-day window)
[2026-01-13T01:12:32.929Z] [BOT] 💾 Saved posted_jobs.json: 644 active jobs
[2026-01-13T01:12:32.929Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T01:12:32.930Z] [BOT] 📍 [ROUTING] "Search Quality Rater" @ ORG_f3ae3598
[2026-01-13T01:12:32.930Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T01:12:33.348Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater @ ORG_f3ae3598 in #💻・tech-jobs
  ✅ Industry: Search Quality Rater @ ORG_f3ae3598
[2026-01-13T01:12:35.215Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater @ ORG_f3ae3598 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T01:12:36.715Z] [BOT] 💾 Marked as posted: Search Quality Rater @ ORG_f3ae3598 (instance #1)
[2026-01-13T01:12:36.716Z] [BOT] 💾 BEFORE ARCHIVING: 645 jobs in database
[2026-01-13T01:12:36.716Z] [BOT] ✅ No jobs to archive (all 645 jobs within 7-day window)
[2026-01-13T01:12:36.722Z] [BOT] 💾 Saved posted_jobs.json: 645 active jobs
[2026-01-13T01:12:36.722Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T01:12:39.723Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-13T01:12:39.723Z] [BOT] 📍 [ROUTING] "Data Scientist, GTM Analytics" @ airtable
[2026-01-13T01:12:39.723Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-13T01:12:39.935Z] [BOT] ✅ Created forum post: 🏢 Data Scientist, GTM Analytics @ airtable in #🤖・ai-jobs
[2026-01-13T01:12:39.935Z] [BOT] ✅ Industry: Data Scientist, GTM Analytics @ airtable
[2026-01-13T01:12:41.652Z] [BOT] ✅ Created forum post: 🏢 Data Scientist, GTM Analytics @ airtable in #🌉・san-francisco
[2026-01-13T01:12:41.652Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T01:12:43.153Z] [BOT] 💾 Marked as posted: Data Scientist, GTM Analytics @ airtable (instance #1)
[2026-01-13T01:12:43.153Z] [BOT] 💾 BEFORE ARCHIVING: 646 jobs in database
[2026-01-13T01:12:43.153Z] [BOT] ✅ No jobs to archive (all 646 jobs within 7-day window)
[2026-01-13T01:12:43.159Z] [BOT] 💾 Saved posted_jobs.json: 646 active jobs
[2026-01-13T01:12:43.159Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T01:12:43.159Z] [BOT] 📍 [ROUTING] "Research Scientist in Large Language Model Graduate - Seed-LLM" @ ORG_08c9a13c
   Category: AI (matched: "AI/ML")
[2026-01-13T01:12:43.160Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T01:12:43.399Z] [BOT] ✅ Created forum post: 🏢 Research Scientist in Large Language Model Graduate - Seed-LLM @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-13T01:12:43.399Z] [BOT] ✅ Industry: Research Scientist in Large Language Model Graduate - Seed-LLM @ ORG_08c9a13c
[2026-01-13T01:12:45.085Z] [BOT] ✅ Created forum post: 🏢 Research Scientist in Large Language Model Graduate - Seed-LLM @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-13T01:12:45.085Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T01:12:46.585Z] [BOT] 💾 Marked as posted: Research Scientist in Large Language Model Graduate - Seed-LLM @ ORG_08c9a13c (instance #1)
[2026-01-13T01:12:46.585Z] [BOT] 💾 BEFORE ARCHIVING: 647 jobs in database
[2026-01-13T01:12:46.586Z] [BOT] ✅ No jobs to archive (all 647 jobs within 7-day window)
[2026-01-13T01:12:46.591Z] [BOT] 💾 Saved posted_jobs.json: 647 active jobs
[2026-01-13T01:12:46.592Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T01:12:49.593Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T01:12:49.593Z] [BOT] 📍 [ROUTING] "Data Scientist, Product Analytics" @ airtable
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T01:12:49.932Z] [BOT] ✅ Created forum post: 🏢 Data Scientist, Product Analytics @ airtable in #📈・JID_fb739488
  ✅ Industry: Data Scientist, Product Analytics @ airtable
[2026-01-13T01:12:51.630Z] [BOT] ✅ Created forum post: 🏢 Data Scientist, Product Analytics @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T01:12:53.130Z] [BOT] 💾 Marked as posted: Data Scientist, Product Analytics @ airtable (instance #1)
[2026-01-13T01:12:53.130Z] [BOT] 💾 BEFORE ARCHIVING: 648 jobs in database
[2026-01-13T01:12:53.131Z] [BOT] ✅ No jobs to archive (all 648 jobs within 7-day window)
[2026-01-13T01:12:53.137Z] [BOT] 💾 Saved posted_jobs.json: 648 active jobs
[2026-01-13T01:12:53.138Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T01:12:56.139Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-13T01:12:56.139Z] [BOT] 📍 [ROUTING] "Financial Crimes Investigator" @ brex
[2026-01-13T01:12:56.139Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-13T01:12:56.453Z] [BOT] ✅ Created forum post: 🏢 Financial Crimes Investigator @ brex in #📁・JID_e938df7b
[2026-01-13T01:12:56.453Z] [BOT] ✅ Industry: Financial Crimes Investigator @ brex
[2026-01-13T01:12:58.300Z] [BOT] ✅ Created forum post: 🏢 Financial Crimes Investigator @ brex in #💻・remote-usa
[2026-01-13T01:12:58.301Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T01:12:59.802Z] [BOT] 💾 Marked as posted: Financial Crimes Investigator @ brex (instance #1)
[2026-01-13T01:12:59.802Z] [BOT] 💾 BEFORE ARCHIVING: 649 jobs in database
[2026-01-13T01:12:59.803Z] [BOT] ✅ No jobs to archive (all 649 jobs within 7-day window)
[2026-01-13T01:12:59.809Z] [BOT] 💾 Saved posted_jobs.json: 649 active jobs
[2026-01-13T01:12:59.809Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T01:13:02.809Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-13T01:13:02.809Z] [BOT] 📍 [ROUTING] "EDI Coordinator" @ ORG_22fa11a5ingham & Butler
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T01:13:03.068Z] [BOT] ✅ Created forum post: 🏢 EDI Coordinator @ ORG_22fa11a5ingham & Butler in #📣・marketing-jobs
  ✅ Industry: EDI Coordinator @ ORG_22fa11a5ingham & Butler
[2026-01-13T01:13:04.848Z] [BOT] ✅ Created forum post: 🏢 EDI Coordinator @ ORG_22fa11a5ingham & Butler in #💻・remote-usa
[2026-01-13T01:13:04.849Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T01:13:06.350Z] [BOT] 💾 Marked as posted: EDI Coordinator @ ORG_22fa11a5ingham & Butler (instance #1)
[2026-01-13T01:13:06.350Z] [BOT] 💾 BEFORE ARCHIVING: 650 jobs in database
[2026-01-13T01:13:06.350Z] [BOT] ✅ No jobs to archive (all 650 jobs within 7-day window)
[2026-01-13T01:13:06.356Z] [BOT] 💾 Saved posted_jobs.json: 650 active jobs
[2026-01-13T01:13:06.356Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T01:13:09.357Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T01:13:09.357Z] [BOT] ⏭️  Skipping duplicate: JID_1a0e44d8 (posted within 7 days)
[2026-01-13T01:13:09.357Z] [BOT] ⏭️  Skipping duplicate: JID_00f8aad3 (posted within 7 days)
[2026-01-13T01:13:09.357Z] [BOT] ⏭️  Skipping duplicate: JID_669502c0 (posted within 7 days)
[2026-01-13T01:13:09.357Z] [BOT] ⏭️  Skipping duplicate: JID_b8727a6a (posted within 7 days)
[2026-01-13T01:13:09.358Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_9c80e33d-detail (posted within 7 days)
[2026-01-13T01:13:09.358Z] [BOT] ⏭️  Skipping duplicate: JID_d918151e-i_r52026 (posted within 7 days)
[2026-01-13T01:13:09.358Z] [BOT] ⏭️  Skipping duplicate: JID_3a39db73-iii_r-2347075 (posted within 7 days)
[2026-01-13T01:13:09.358Z] [BOT] ⏭️  Skipping duplicate: JID_9138a48f (posted within 7 days)
[2026-01-13T01:13:09.358Z] [BOT] ⏭️  Skipping duplicate: JID_59128a5e (posted within 7 days)
[2026-01-13T01:13:09.358Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_6deadf27-detail (posted within 7 days)
[2026-01-13T01:13:09.486Z] [BOT] ✅ Loaded pending queue: 2686 total (2666 pending, 20 enriched, 0 posted)
[2026-01-13T01:13:09.642Z] [BOT] ✅ Saved pending queue: 2686 total (2666 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-13T01:13:09.642Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-13T01:13:09.694Z] [BOT] 📂 Loaded 2818 existing routing entries
[2026-01-13T01:13:09.749Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2828
   Timestamp: 2026-01-13T01:13:09.737Z
[2026-01-13T01:13:09.750Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T01:13:09.750Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-13T01:13:09.750Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T01:13:09.750Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 9
[2026-01-13T01:13:09.750Z] [BOT] Top channels:
[2026-01-13T01:13:09.750Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🌉・san-francisco: 5 posts
[2026-01-13T01:13:09.751Z] [BOT] 3. #💻・remote-usa: 3 posts
     4. #🤖・ai-jobs: 2 posts
     5. #🦢・los-angeles: 1 posts
[2026-01-13T01:13:09.751Z] [BOT] [STATS] Channel stats saved
[2026-01-13T01:13:11.776Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2643) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*