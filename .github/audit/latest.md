# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T06:48:55.813Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T06:48:01.032Z] ========================================
[2026-01-15T06:48:01.034Z] Discord Bot Execution Log
[2026-01-15T06:48:01.034Z] Environment: GitHub Actions
[2026-01-15T06:48:01.034Z] Node Version: v20.19.6
[2026-01-15T06:48:01.034Z] ========================================
[2026-01-15T06:48:01.034Z] Environment Variables Check:
[2026-01-15T06:48:01.034Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T06:48:01.034Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T06:48:01.034Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T06:48:01.035Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T06:48:01.035Z] 
Multi-Channel Configuration:
[2026-01-15T06:48:01.035Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T06:48:01.035Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T06:48:01.035Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T06:48:01.035Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T06:48:01.035Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T06:48:01.035Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T06:48:01.035Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T06:48:01.035Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T06:48:01.035Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T06:48:01.035Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T06:48:01.035Z] 
Data Files Check:
[2026-01-15T06:48:01.036Z] .github/data/new_jobs.json: ✅ Exists (10 items, 115767 bytes)
[2026-01-15T06:48:01.043Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 876127 bytes)
[2026-01-15T06:48:01.043Z] 
========================================
[2026-01-15T06:48:01.043Z] Starting Enhanced Discord Bot...
[2026-01-15T06:48:01.043Z] ========================================
[2026-01-15T06:48:01.481Z] [BOT] ✅ Loaded V2 database: 1646 jobs
[2026-01-15T06:48:02.365Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T06:48:02.366Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T06:48:02.366Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T06:48:02.508Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Product Design Manager, Player & Developer Experience at discord
[2026-01-15T06:48:02.510Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T06:48:02.510Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T06:48:02.511Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T06:48:02.511Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
   (1 grouped as same job with different locations)
[2026-01-15T06:48:02.512Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T06:48:02.515Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2026-01-15T06:48:02.516Z] [BOT] 📍 [ROUTING] "Senior Product Design Manager, Player & Developer Experience" @ discord
[2026-01-15T06:48:02.516Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T06:48:02.532Z] [BOT ERROR] (node:3333) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T06:48:02.879Z] [BOT] ✅ Created forum post: 🏢 Senior Product Design Manager, Player & Developer Experience @ discord in #📈・JID_fb739488
  ✅ Industry: Senior Product Design Manager, Player & Developer Experience @ discord
[2026-01-15T06:48:04.774Z] [BOT] ✅ Created forum post: 🏢 Senior Product Design Manager, Player & Developer Experience @ discord in #🌉・san-francisco
[2026-01-15T06:48:04.774Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T06:48:06.275Z] [BOT] 💾 Marked as posted: Senior Product Design Manager, Player & Developer Experience @ discord (instance #1)
💾 BEFORE ARCHIVING: 1647 jobs in database
[2026-01-15T06:48:06.276Z] [BOT] ✅ No jobs to archive (all 1647 jobs within 7-day window)
[2026-01-15T06:48:06.290Z] [BOT] 💾 Saved posted_jobs.json: 1647 active jobs
[2026-01-15T06:48:06.290Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T06:48:06.291Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Consumer Revenue" @ discord
[2026-01-15T06:48:06.291Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T06:48:06.635Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Consumer Revenue @ discord in #📈・JID_fb739488
  ✅ Industry: Senior Software Engineer, Consumer Revenue @ discord
[2026-01-15T06:48:08.372Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Consumer Revenue @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T06:48:09.872Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Consumer Revenue @ discord (instance #1)
[2026-01-15T06:48:09.872Z] [BOT] 💾 BEFORE ARCHIVING: 1648 jobs in database
[2026-01-15T06:48:09.873Z] [BOT] ✅ No jobs to archive (all 1648 jobs within 7-day window)
[2026-01-15T06:48:09.882Z] [BOT] 💾 Saved posted_jobs.json: 1648 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:48:09.883Z] [BOT] 📍 [ROUTING] "Staff Data Scientist, Strategic Research & Reporting" @ discord
[2026-01-15T06:48:09.883Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T06:48:10.324Z] [BOT] ✅ Created forum post: 🏢 Staff Data Scientist, Strategic Research & Reporting @ discord in #📈・JID_fb739488
  ✅ Industry: Staff Data Scientist, Strategic Research & Reporting @ discord
[2026-01-15T06:48:12.196Z] [BOT] ✅ Created forum post: 🏢 Staff Data Scientist, Strategic Research & Reporting @ discord in #🌉・san-francisco
[2026-01-15T06:48:12.196Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T06:48:13.696Z] [BOT] 💾 Marked as posted: Staff Data Scientist, Strategic Research & Reporting @ discord (instance #1)
[2026-01-15T06:48:13.696Z] [BOT] 💾 BEFORE ARCHIVING: 1649 jobs in database
[2026-01-15T06:48:13.697Z] [BOT] ✅ No jobs to archive (all 1649 jobs within 7-day window)
[2026-01-15T06:48:13.708Z] [BOT] 💾 Saved posted_jobs.json: 1649 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:48:16.709Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-15T06:48:16.710Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Ads" @ discord
   Category: AI (matched: "machine learning")
[2026-01-15T06:48:16.710Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-15T06:48:16.964Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Ads @ discord in #🤖・ai-jobs
[2026-01-15T06:48:16.964Z] [BOT] ✅ Industry: Senior Software Engineer, Ads @ discord
[2026-01-15T06:48:18.628Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Ads @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T06:48:20.129Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Ads @ discord (instance #1)
[2026-01-15T06:48:20.130Z] [BOT] 💾 BEFORE ARCHIVING: 1650 jobs in database
[2026-01-15T06:48:20.131Z] [BOT] ✅ No jobs to archive (all 1650 jobs within 7-day window)
[2026-01-15T06:48:20.142Z] [BOT] 💾 Saved posted_jobs.json: 1650 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:48:20.143Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Ads @ discord (instance #1)
[2026-01-15T06:48:20.143Z] [BOT] 💾 BEFORE ARCHIVING: 1651 jobs in database
[2026-01-15T06:48:20.144Z] [BOT] ✅ No jobs to archive (all 1651 jobs within 7-day window)
[2026-01-15T06:48:20.153Z] [BOT] 💾 Saved posted_jobs.json: 1651 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:48:20.154Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Data Platform" @ discord
[2026-01-15T06:48:20.154Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T06:48:20.475Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Data Platform @ discord in #🤖・ai-jobs
  ✅ Industry: Senior Software Engineer, Data Platform @ discord
[2026-01-15T06:48:22.192Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Data Platform @ discord in #🌉・san-francisco
[2026-01-15T06:48:22.192Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T06:48:23.692Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Data Platform @ discord (instance #1)
[2026-01-15T06:48:23.693Z] [BOT] 💾 BEFORE ARCHIVING: 1652 jobs in database
[2026-01-15T06:48:23.694Z] [BOT] ✅ No jobs to archive (all 1652 jobs within 7-day window)
[2026-01-15T06:48:23.704Z] [BOT] 💾 Saved posted_jobs.json: 1652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:48:23.705Z] [BOT] 📍 [ROUTING] "Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence" @ ORG_569ec613 Morgan Chase
[2026-01-15T06:48:23.705Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T06:48:24.110Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence  in #🤖・ai-jobs
[2026-01-15T06:48:24.110Z] [BOT] ✅ Industry: Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence @ ORG_569ec613 Morgan Chase
[2026-01-15T06:48:26.312Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence  in #🗽・new-york
[2026-01-15T06:48:26.312Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-15T06:48:27.813Z] [BOT] 💾 Marked as posted: Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence @ ORG_569ec613 Morgan Chase (instance #1)
💾 BEFORE ARCHIVING: 1653 jobs in database
[2026-01-15T06:48:27.814Z] [BOT] ✅ No jobs to archive (all 1653 jobs within 7-day window)
[2026-01-15T06:48:27.824Z] [BOT] 💾 Saved posted_jobs.json: 1653 active jobs
[2026-01-15T06:48:27.824Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T06:48:30.826Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-15T06:48:30.826Z] [BOT] 📍 [ROUTING] "Senior Software Engineer - Platform Infrastructure" @ discord
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T06:48:31.201Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - Platform Infrastructure @ discord in #💻・tech-jobs
[2026-01-15T06:48:31.201Z] [BOT] ✅ Industry: Senior Software Engineer - Platform Infrastructure @ discord
[2026-01-15T06:48:32.967Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - Platform Infrastructure @ discord in #🌉・san-francisco
[2026-01-15T06:48:32.968Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T06:48:34.469Z] [BOT] 💾 Marked as posted: Senior Software Engineer - Platform Infrastructure @ discord (instance #1)
[2026-01-15T06:48:34.469Z] [BOT] 💾 BEFORE ARCHIVING: 1654 jobs in database
[2026-01-15T06:48:34.470Z] [BOT] ✅ No jobs to archive (all 1654 jobs within 7-day window)
[2026-01-15T06:48:34.482Z] [BOT] 💾 Saved posted_jobs.json: 1654 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:48:34.482Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Safety Processing" @ discord
[2026-01-15T06:48:34.482Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T06:48:34.864Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Safety Processing @ discord in #💻・tech-jobs
[2026-01-15T06:48:34.864Z] [BOT] ✅ Industry: Staff Software Engineer, Safety Processing @ discord
[2026-01-15T06:48:36.752Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Safety Processing @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T06:48:38.253Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Safety Processing @ discord (instance #1)
[2026-01-15T06:48:38.253Z] [BOT] 💾 BEFORE ARCHIVING: 1655 jobs in database
[2026-01-15T06:48:38.254Z] [BOT] ✅ No jobs to archive (all 1655 jobs within 7-day window)
[2026-01-15T06:48:38.265Z] [BOT] 💾 Saved posted_jobs.json: 1655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:48:38.266Z] [BOT] 📍 [ROUTING] "Product Engineer" @ 3M
[2026-01-15T06:48:38.266Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T06:48:38.572Z] [BOT] ✅ Created forum post: 🏢 Product Engineer @ 3M in #💻・tech-jobs
[2026-01-15T06:48:38.572Z] [BOT] ✅ Industry: Product Engineer @ 3M
[2026-01-15T06:48:40.461Z] [BOT] ✅ Created forum post: 🏢 Product Engineer @ 3M in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T06:48:41.962Z] [BOT] 💾 Marked as posted: Product Engineer @ 3M (instance #1)
💾 BEFORE ARCHIVING: 1656 jobs in database
[2026-01-15T06:48:41.963Z] [BOT] ✅ No jobs to archive (all 1656 jobs within 7-day window)
[2026-01-15T06:48:41.973Z] [BOT] 💾 Saved posted_jobs.json: 1656 active jobs
[2026-01-15T06:48:41.973Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T06:48:44.973Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-15T06:48:44.974Z] [BOT] 📍 [ROUTING] "Product Designer" @ railway
[2026-01-15T06:48:44.974Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-15T06:48:45.247Z] [BOT] ✅ Created forum post: 🏢 Product Designer @ railway in #📣・marketing-jobs
  ✅ Industry: Product Designer @ railway
[2026-01-15T06:48:47.309Z] [BOT] ✅ Created forum post: 🏢 Product Designer @ railway in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T06:48:48.809Z] [BOT] 💾 Marked as posted: Product Designer @ railway (instance #1)
💾 BEFORE ARCHIVING: 1657 jobs in database
[2026-01-15T06:48:48.810Z] [BOT] ✅ No jobs to archive (all 1657 jobs within 7-day window)
[2026-01-15T06:48:48.820Z] [BOT] 💾 Saved posted_jobs.json: 1657 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:48:51.821Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T06:48:51.821Z] [BOT] ⏭️  Skipping duplicate: JID_61a0fdc3 (posted within 7 days)
[2026-01-15T06:48:51.821Z] [BOT] ⏭️  Skipping duplicate: JID_bd84dc8b (posted within 7 days)
[2026-01-15T06:48:51.821Z] [BOT] ⏭️  Skipping duplicate: JID_ead14ba8 (posted within 7 days)
[2026-01-15T06:48:51.822Z] [BOT] ⏭️  Skipping duplicate: JID_1b4ebcac (posted within 7 days)
[2026-01-15T06:48:51.822Z] [BOT] ⏭️  Skipping duplicate: JID_aacbfa99 (posted within 7 days)
⏭️  Skipping duplicate: JID_963977f9 (posted within 7 days)
[2026-01-15T06:48:51.822Z] [BOT] ⏭️  Skipping duplicate: JID_e038a1d3 (posted within 7 days)
[2026-01-15T06:48:51.822Z] [BOT] ⏭️  Skipping duplicate: JID_fe2e9e63 (posted within 7 days)
[2026-01-15T06:48:51.822Z] [BOT] ⏭️  Skipping duplicate: JID_860e27d6-cx_1001-job-210682815 (posted within 7 days)
[2026-01-15T06:48:51.822Z] [BOT] ⏭️  Skipping duplicate: JID_c55e1fc7-engineer_r01158471 (posted within 7 days)
[2026-01-15T06:48:51.971Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[2026-01-15T06:48:52.131Z] [BOT] ✅ Saved pending queue: 2725 total (2705 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-15T06:48:52.131Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-15T06:48:52.189Z] [BOT] 📂 Loaded 3825 existing routing entries
[2026-01-15T06:48:52.246Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T06:48:52.247Z] [BOT] Total entries: 3835
   Timestamp: 2026-01-15T06:48:52.233Z
[2026-01-15T06:48:52.247Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T06:48:52.247Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-15T06:48:52.247Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T06:48:52.247Z] [BOT] Last cleanup: Never
[2026-01-15T06:48:52.248Z] [BOT] Total posts: 20
   Channels used: 7
   Top channels:
     1. #🌉・san-francisco: 7 posts
     2. #📈・JID_fb739488: 3 posts
     3. #🤖・ai-jobs: 3 posts
     4. #💻・tech-jobs: 3 posts
     5. #💻・remote-usa: 2 posts
[2026-01-15T06:48:52.248Z] [BOT] [STATS] Channel stats saved
[2026-01-15T06:48:54.265Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3333) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*