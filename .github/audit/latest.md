# Discord Bot Execution Audit
**Timestamp:** 2025-12-18T22:24:39.159Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-18T22:23:58.111Z] ========================================
[2025-12-18T22:23:58.113Z] Discord Bot Execution Log
[2025-12-18T22:23:58.113Z] Environment: GitHub Actions
[2025-12-18T22:23:58.113Z] Node Version: v20.19.6
[2025-12-18T22:23:58.113Z] ========================================
[2025-12-18T22:23:58.113Z] Environment Variables Check:
[2025-12-18T22:23:58.113Z] DISCORD_TOKEN: ✅ Set
[2025-12-18T22:23:58.113Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-18T22:23:58.113Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-18T22:23:58.114Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-18T22:23:58.114Z] 
Multi-Channel Configuration:
[2025-12-18T22:23:58.114Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-18T22:23:58.114Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-18T22:23:58.114Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-18T22:23:58.114Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-18T22:23:58.114Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-18T22:23:58.114Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-18T22:23:58.114Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-18T22:23:58.114Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-18T22:23:58.115Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-18T22:23:58.115Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-18T22:23:58.115Z] 
Data Files Check:
[2025-12-18T22:23:58.115Z] .github/data/new_jobs.json: ✅ Exists (10 items, 30367 bytes)
[2025-12-18T22:23:58.118Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 359086 bytes)
[2025-12-18T22:23:58.118Z] 
========================================
[2025-12-18T22:23:58.118Z] Starting Enhanced Discord Bot...
[2025-12-18T22:23:58.118Z] ========================================
[2025-12-18T22:23:58.646Z] [BOT] ✅ Loaded V2 database: 595 jobs
[2025-12-18T22:23:59.168Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-18T22:23:59.168Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-18T22:23:59.169Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-18T22:23:59.169Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-18T22:23:59.216Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-18T22:23:59.267Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 100
[2025-12-18T22:23:59.269Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-18T22:23:59.270Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-18T22:23:59.271Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-18T22:23:59.271Z] [BOT] (1 grouped as same job with different locations)
[2025-12-18T22:23:59.271Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-18T22:23:59.273Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-18T22:23:59.274Z] [BOT] 📍 [ROUTING] "Software Engineer - Direct To Cell" @ ORG_afd623b1
[2025-12-18T22:23:59.274Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T22:23:59.292Z] [BOT ERROR] (node:2919) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-18T22:23:59.631Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Direct To Cell @ ORG_afd623b1 in #💻・tech-jobs
[2025-12-18T22:23:59.631Z] [BOT] ✅ Industry: Software Engineer - Direct To Cell @ ORG_afd623b1
[2025-12-18T22:24:01.548Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Direct To Cell @ ORG_afd623b1 in #☀️・sunnyvale
[2025-12-18T22:24:01.548Z] [BOT] ✅ Location: ☀️・sunnyvale
[2025-12-18T22:24:03.049Z] [BOT] 💾 Marked as posted: Software Engineer - Direct To Cell @ ORG_afd623b1 (instance #1)
[2025-12-18T22:24:03.050Z] [BOT] 💾 BEFORE ARCHIVING: 596 jobs in database
[2025-12-18T22:24:03.050Z] [BOT] ✅ No jobs to archive (all 596 jobs within 7-day window)
[2025-12-18T22:24:03.059Z] [BOT] 💾 Saved posted_jobs.json: 596 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T22:24:03.060Z] [BOT] 📍 [ROUTING] "BNY Analyst Program-Engineering - Developer" @ ORG_01d9a8c4
[2025-12-18T22:24:03.061Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T22:24:03.321Z] [BOT] ✅ Created forum post: 🏢 BNY Analyst Program-Engineering - Developer @ ORG_01d9a8c4 in #💻・tech-jobs
[2025-12-18T22:24:03.321Z] [BOT] ✅ Industry: BNY Analyst Program-Engineering - Developer @ ORG_01d9a8c4
[2025-12-18T22:24:05.024Z] [BOT] ✅ Created forum post: 🏢 BNY Analyst Program-Engineering - Developer @ ORG_01d9a8c4 in #🗽・new-york
[2025-12-18T22:24:05.025Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-18T22:24:06.525Z] [BOT] 💾 Marked as posted: BNY Analyst Program-Engineering - Developer @ ORG_01d9a8c4 (instance #1)
[2025-12-18T22:24:06.525Z] [BOT] 💾 BEFORE ARCHIVING: 597 jobs in database
[2025-12-18T22:24:06.526Z] [BOT] ✅ No jobs to archive (all 597 jobs within 7-day window)
[2025-12-18T22:24:06.531Z] [BOT] 💾 Saved posted_jobs.json: 597 active jobs
[2025-12-18T22:24:06.531Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:24:06.531Z] [BOT] 💾 Marked as posted: BNY Analyst Program-Engineering - Data Science @ ORG_01d9a8c4 (instance #1)
💾 BEFORE ARCHIVING: 598 jobs in database
[2025-12-18T22:24:06.532Z] [BOT] ✅ No jobs to archive (all 598 jobs within 7-day window)
[2025-12-18T22:24:06.537Z] [BOT] 💾 Saved posted_jobs.json: 598 active jobs
[2025-12-18T22:24:06.537Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:24:06.537Z] [BOT] 📍 [ROUTING] "Moodle Developer" @ ORG_0aa5052d State University (LSU)
[2025-12-18T22:24:06.537Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T22:24:06.704Z] [BOT] ✅ Created forum post: 🏢 Moodle Developer @ ORG_0aa5052d State University (LSU) in #💻・tech-jobs
[2025-12-18T22:24:06.704Z] [BOT] ✅ Industry: Moodle Developer @ ORG_0aa5052d State University (LSU)
[2025-12-18T22:24:08.436Z] [BOT] ✅ Created forum post: 🏢 Moodle Developer @ ORG_0aa5052d State University (LSU) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T22:24:09.937Z] [BOT] 💾 Marked as posted: Moodle Developer @ ORG_0aa5052d State University (LSU) (instance #1)
[2025-12-18T22:24:09.937Z] [BOT] 💾 BEFORE ARCHIVING: 599 jobs in database
[2025-12-18T22:24:09.938Z] [BOT] ✅ No jobs to archive (all 599 jobs within 7-day window)
[2025-12-18T22:24:09.944Z] [BOT] 💾 Saved posted_jobs.json: 599 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T22:24:09.946Z] [BOT] 📍 [ROUTING] "Application Development Engineer I" @ ORG_441f2234
[2025-12-18T22:24:09.946Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T22:24:10.100Z] [BOT] ✅ Created forum post: 🏢 Application Development Engineer I @ ORG_441f2234 in #💻・tech-jobs
  ✅ Industry: Application Development Engineer I @ ORG_441f2234
[2025-12-18T22:24:11.601Z] [BOT] 💾 Marked as posted: Application Development Engineer I @ ORG_441f2234 (instance #1)
[2025-12-18T22:24:11.601Z] [BOT] 💾 BEFORE ARCHIVING: 600 jobs in database
[2025-12-18T22:24:11.602Z] [BOT] ✅ No jobs to archive (all 600 jobs within 7-day window)
[2025-12-18T22:24:11.607Z] [BOT] 💾 Saved posted_jobs.json: 600 active jobs
[2025-12-18T22:24:11.607Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:24:11.608Z] [BOT] 📍 [ROUTING] "Software Development Engineer 1 - Engineering - Development" @ ORG_a06522bc Scientific
[2025-12-18T22:24:11.608Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T22:24:11.759Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 - Engineering - Development @ ORG_a06522bc Scientific in #💻・tech-jobs
  ✅ Industry: Software Development Engineer 1 - Engineering - Development @ ORG_a06522bc Scientific
[2025-12-18T22:24:13.947Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 - Engineering - Development @ ORG_a06522bc Scientific in #🚌・boston
[2025-12-18T22:24:13.947Z] [BOT] ✅ Location: 🚌・boston
[2025-12-18T22:24:15.448Z] [BOT] 💾 Marked as posted: Software Development Engineer 1 - Engineering - Development @ ORG_a06522bc Scientific (instance #1)
[2025-12-18T22:24:15.448Z] [BOT] 💾 BEFORE ARCHIVING: 601 jobs in database
[2025-12-18T22:24:15.449Z] [BOT] ✅ No jobs to archive (all 601 jobs within 7-day window)
[2025-12-18T22:24:15.454Z] [BOT] 💾 Saved posted_jobs.json: 601 active jobs
[2025-12-18T22:24:15.454Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:24:18.455Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2025-12-18T22:24:18.455Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search" @ ORG_1bb6fcfb
[2025-12-18T22:24:18.455Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T22:24:18.766Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-18T22:24:18.766Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb
[2025-12-18T22:24:21.448Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb in #🌧️・seattle
[2025-12-18T22:24:21.448Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-18T22:24:22.948Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb (instance #1)
[2025-12-18T22:24:22.949Z] [BOT] 💾 BEFORE ARCHIVING: 602 jobs in database
[2025-12-18T22:24:22.949Z] [BOT] ✅ No jobs to archive (all 602 jobs within 7-day window)
[2025-12-18T22:24:22.955Z] [BOT] 💾 Saved posted_jobs.json: 602 active jobs
[2025-12-18T22:24:22.955Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:24:22.955Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Global E-commerce Recommendation/Search" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-18T22:24:22.955Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T22:24:23.116Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-18T22:24:23.116Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb
[2025-12-18T22:24:24.773Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb in #🌧️・seattle
[2025-12-18T22:24:24.773Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-18T22:24:26.275Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - Global E-commerce Recommendation/Search @ ORG_1bb6fcfb (instance #1)
[2025-12-18T22:24:26.275Z] [BOT] 💾 BEFORE ARCHIVING: 603 jobs in database
[2025-12-18T22:24:26.275Z] [BOT] ✅ No jobs to archive (all 603 jobs within 7-day window)
[2025-12-18T22:24:26.281Z] [BOT] 💾 Saved posted_jobs.json: 603 active jobs
[2025-12-18T22:24:26.281Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:24:26.282Z] [BOT] 📍 [ROUTING] "Artificial Intelligence Graduate" @ ORG_09b26be7
[2025-12-18T22:24:26.282Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T22:24:26.447Z] [BOT] ✅ Created forum post: 🏢 Artificial Intelligence Graduate @ ORG_09b26be7 in #🤖・ai-jobs
[2025-12-18T22:24:26.447Z] [BOT] ✅ Industry: Artificial Intelligence Graduate @ ORG_09b26be7
[2025-12-18T22:24:28.315Z] [BOT] ✅ Created forum post: 🏢 Artificial Intelligence Graduate @ ORG_09b26be7 in #🦢・los-angeles
[2025-12-18T22:24:28.315Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-18T22:24:29.815Z] [BOT] 💾 Marked as posted: Artificial Intelligence Graduate @ ORG_09b26be7 (instance #1)
[2025-12-18T22:24:29.815Z] [BOT] 💾 BEFORE ARCHIVING: 604 jobs in database
[2025-12-18T22:24:29.816Z] [BOT] ✅ No jobs to archive (all 604 jobs within 7-day window)
[2025-12-18T22:24:29.822Z] [BOT] 💾 Saved posted_jobs.json: 604 active jobs
[2025-12-18T22:24:29.822Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T22:24:29.823Z] [BOT] 📍 [ROUTING] "Founder in Residence - Embedfi - SMB Hardware Leasing" @ ORG_11fb682b Fund
[2025-12-18T22:24:29.823Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-18T22:24:30.145Z] [BOT] ✅ Created forum post: 🏢 Founder in Residence - Embedfi - SMB Hardware Leasing @ ORG_11fb682b Fund in #🤖・ai-jobs
[2025-12-18T22:24:30.145Z] [BOT] ✅ Industry: Founder in Residence - Embedfi - SMB Hardware Leasing @ ORG_11fb682b Fund
[2025-12-18T22:24:31.939Z] [BOT] ✅ Created forum post: 🏢 Founder in Residence - Embedfi - SMB Hardware Leasing @ ORG_11fb682b Fund in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T22:24:33.441Z] [BOT] 💾 Marked as posted: Founder in Residence - Embedfi - SMB Hardware Leasing @ ORG_11fb682b Fund (instance #1)
[2025-12-18T22:24:33.441Z] [BOT] 💾 BEFORE ARCHIVING: 605 jobs in database
[2025-12-18T22:24:33.442Z] [BOT] ✅ No jobs to archive (all 605 jobs within 7-day window)
[2025-12-18T22:24:33.448Z] [BOT] 💾 Saved posted_jobs.json: 605 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T22:24:36.449Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-18T22:24:36.450Z] [BOT] ⏭️  Skipping duplicate: JID_e1726c67 (posted within 7 days)
[2025-12-18T22:24:36.450Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f125be66 (posted within 7 days)
[2025-12-18T22:24:36.450Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_ede63458 (posted within 7 days)
[2025-12-18T22:24:36.450Z] [BOT] ⏭️  Skipping duplicate: JID_a3f17800-cx_1001-JID_0788be3f (posted within 7 days)
[2025-12-18T22:24:36.450Z] [BOT] ⏭️  Skipping duplicate: JID_59da8200-developer_r00109175 (posted within 7 days)
[2025-12-18T22:24:36.450Z] [BOT] ⏭️  Skipping duplicate: JID_165b6c5e-aveva_careers-JID_e98af70d-us_r011630 (posted within 7 days)
[2025-12-18T22:24:36.450Z] [BOT] ⏭️  Skipping duplicate: JID_8db734ba (posted within 7 days)
[2025-12-18T22:24:36.450Z] [BOT] ⏭️  Skipping duplicate: JID_6f58f2a4-centene_external-JID_3db5fdbf-i_1592119-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_06576a8b (posted within 7 days)
[2025-12-18T22:24:36.453Z] [BOT] ✅ Loaded pending queue: 377 total (357 pending, 20 enriched, 0 posted)
[2025-12-18T22:24:36.459Z] [BOT] ✅ Saved pending queue: 377 total (357 pending, 11 enriched, 9 posted)
[2025-12-18T22:24:36.459Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-18T22:24:36.500Z] [BOT] 📂 Loaded 576 existing routing entries
[2025-12-18T22:24:36.542Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 585
   Timestamp: 2025-12-18T22:24:36.539Z
[2025-12-18T22:24:36.543Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6b1de7e9.jsonl
[2025-12-18T22:24:36.543Z] [BOT] Total attempts: 17
   Successful: 17
   Failed: 0
   Skipped: 0
[2025-12-18T22:24:36.543Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2025-12-18T22:24:36.543Z] [BOT] Total posts: 17
   Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
[2025-12-18T22:24:36.544Z] [BOT] 3. #🌧️・seattle: 2 posts
     4. #☀️・sunnyvale: 1 posts
     5. #🗽・new-york: 1 posts
[2025-12-18T22:24:36.544Z] [BOT] [STATS] Channel stats saved
[2025-12-18T22:24:38.557Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2919) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*