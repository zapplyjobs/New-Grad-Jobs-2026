# Discord Bot Execution Audit
**Timestamp:** 2025-12-23T00:43:16.229Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-23T00:42:38.597Z] ========================================
[2025-12-23T00:42:38.599Z] Discord Bot Execution Log
[2025-12-23T00:42:38.599Z] Environment: GitHub Actions
[2025-12-23T00:42:38.599Z] Node Version: v20.19.6
[2025-12-23T00:42:38.599Z] ========================================
[2025-12-23T00:42:38.599Z] Environment Variables Check:
[2025-12-23T00:42:38.599Z] DISCORD_TOKEN: ✅ Set
[2025-12-23T00:42:38.599Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-23T00:42:38.599Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-23T00:42:38.599Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-23T00:42:38.600Z] 
Multi-Channel Configuration:
[2025-12-23T00:42:38.600Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-23T00:42:38.600Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-23T00:42:38.600Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-23T00:42:38.600Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-23T00:42:38.600Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-23T00:42:38.600Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-23T00:42:38.600Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-23T00:42:38.600Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-23T00:42:38.600Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-23T00:42:38.600Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-23T00:42:38.600Z] 
Data Files Check:
[2025-12-23T00:42:38.601Z] .github/data/new_jobs.json: ✅ Exists (8 items, 33094 bytes)
[2025-12-23T00:42:38.605Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 533379 bytes)
[2025-12-23T00:42:38.605Z] 
========================================
[2025-12-23T00:42:38.605Z] Starting Enhanced Discord Bot...
[2025-12-23T00:42:38.605Z] ========================================
[2025-12-23T00:42:39.120Z] [BOT] ✅ Loaded V2 database: 910 jobs
[2025-12-23T00:42:39.830Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-23T00:42:39.830Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-23T00:42:39.831Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-23T00:42:39.831Z] [BOT] 📦 Exporting 8 jobs to encrypted JSON...
[2025-12-23T00:42:39.889Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-23T00:42:39.953Z] [BOT] ✅ Export complete: Added 1, Skipped 7, Total 163
[2025-12-23T00:42:39.956Z] [BOT] 📬 Found 8 new jobs (0 already posted)...
[2025-12-23T00:42:39.956Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-23T00:42:39.957Z] [BOT] 📋 After blacklist filter: 7 jobs (1 blacklisted)
[2025-12-23T00:42:39.957Z] [BOT] 📋 After data quality filter: 7 jobs (0 invalid)
[2025-12-23T00:42:39.958Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
[2025-12-23T00:42:39.958Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
[2025-12-23T00:42:39.958Z] [BOT] 📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-23T00:42:39.960Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2025-12-23T00:42:39.962Z] [BOT] 📍 [ROUTING] "Associate – Business Intelligence Analyst - Cincinnati - OH" @ L3Harris Technologies
[2025-12-23T00:42:39.962Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-23T00:42:39.962Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-23T00:42:39.968Z] [BOT ERROR] (node:2718) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-23T00:42:40.448Z] [BOT] ✅ Created forum post: 🏢 Associate – Business Intelligence Analyst - Cincinnati - OH @ L3Harris Technologies in #📈・JID_fb739488
  ✅ Industry: Associate – Business Intelligence Analyst - Cincinnati - OH @ L3Harris Technologies
[2025-12-23T00:42:42.846Z] [BOT] ✅ Created forum post: 🏢 Associate – Business Intelligence Analyst - Cincinnati - OH @ L3Harris Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-23T00:42:44.346Z] [BOT] 💾 Marked as posted: Associate – Business Intelligence Analyst - Cincinnati - OH @ L3Harris Technologies (instance #1)
[2025-12-23T00:42:44.347Z] [BOT] 💾 BEFORE ARCHIVING: 911 jobs in database
[2025-12-23T00:42:44.348Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-23T00:42:44.367Z] [BOT] 📦 Archived 4 jobs to 2025-12.json (4 total in archive)
[2025-12-23T00:42:44.367Z] [BOT] ✅ Archiving complete: 4 archived, 907 active
[2025-12-23T00:42:44.374Z] [BOT] 💾 Saved posted_jobs.json: 907 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-23T00:42:44.375Z] [BOT] 📍 [ROUTING] "Data Analyst 1 Healthcare Analytics" @ ORG_441f2234
[2025-12-23T00:42:44.375Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-23T00:42:44.753Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 Healthcare Analytics @ ORG_441f2234 in #📈・JID_fb739488
[2025-12-23T00:42:44.753Z] [BOT] ✅ Industry: Data Analyst 1 Healthcare Analytics @ ORG_441f2234
[2025-12-23T00:42:46.254Z] [BOT] 💾 Marked as posted: Data Analyst 1 Healthcare Analytics @ ORG_441f2234 (instance #1)
[2025-12-23T00:42:46.254Z] [BOT] 💾 BEFORE ARCHIVING: 908 jobs in database
[2025-12-23T00:42:46.255Z] [BOT] ✅ No jobs to archive (all 908 jobs within 7-day window)
[2025-12-23T00:42:46.261Z] [BOT] 💾 Saved posted_jobs.json: 908 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-23T00:42:46.262Z] [BOT] 📍 [ROUTING] "Data Analyst Graduate Assistant - Neuroscience and Behavior" @ ORG_cb827b77 College
[2025-12-23T00:42:46.262Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-23T00:42:46.505Z] [BOT] ✅ Created forum post: 🏢 Data Analyst Graduate Assistant - Neuroscience and Behavior @ ORG_cb827b77 College in #📈・JID_fb739488
[2025-12-23T00:42:46.506Z] [BOT] ✅ Industry: Data Analyst Graduate Assistant - Neuroscience and Behavior @ ORG_cb827b77 College
[2025-12-23T00:42:48.341Z] [BOT] ✅ Created forum post: 🏢 Data Analyst Graduate Assistant - Neuroscience and Behavior @ ORG_cb827b77 College in #🗽・new-york
[2025-12-23T00:42:48.341Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-23T00:42:49.843Z] [BOT] 💾 Marked as posted: Data Analyst Graduate Assistant - Neuroscience and Behavior @ ORG_cb827b77 College (instance #1)
[2025-12-23T00:42:49.843Z] [BOT] 💾 BEFORE ARCHIVING: 909 jobs in database
[2025-12-23T00:42:49.844Z] [BOT] ✅ No jobs to archive (all 909 jobs within 7-day window)
[2025-12-23T00:42:49.852Z] [BOT] 💾 Saved posted_jobs.json: 909 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-23T00:42:52.853Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2025-12-23T00:42:52.854Z] [BOT] 📍 [ROUTING] "Associate Data Scientist" @ ORG_b344d80e Walt Disney Company
[2025-12-23T00:42:52.855Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-23T00:42:53.099Z] [BOT] ✅ Created forum post: 🏢 Associate Data Scientist @ ORG_b344d80e Walt Disney Company in #🤖・ai-jobs
[2025-12-23T00:42:53.099Z] [BOT] ✅ Industry: Associate Data Scientist @ ORG_b344d80e Walt Disney Company
[2025-12-23T00:42:54.888Z] [BOT] ✅ Created forum post: 🏢 Associate Data Scientist @ ORG_b344d80e Walt Disney Company in #🗽・new-york
[2025-12-23T00:42:54.888Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-23T00:42:56.388Z] [BOT] 💾 Marked as posted: Associate Data Scientist @ ORG_b344d80e Walt Disney Company (instance #1)
[2025-12-23T00:42:56.388Z] [BOT] 💾 BEFORE ARCHIVING: 910 jobs in database
[2025-12-23T00:42:56.389Z] [BOT] ✅ No jobs to archive (all 910 jobs within 7-day window)
[2025-12-23T00:42:56.398Z] [BOT] 💾 Saved posted_jobs.json: 910 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-23T00:42:56.399Z] [BOT] 📍 [ROUTING] "Data Engineer" @ ORG_15a5b314 Mellon University
[2025-12-23T00:42:56.399Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-23T00:42:56.724Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ ORG_15a5b314 Mellon University in #🤖・ai-jobs
  ✅ Industry: Data Engineer @ ORG_15a5b314 Mellon University
[2025-12-23T00:42:58.427Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ ORG_15a5b314 Mellon University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-23T00:42:59.927Z] [BOT] 💾 Marked as posted: Data Engineer @ ORG_15a5b314 Mellon University (instance #1)
[2025-12-23T00:42:59.928Z] [BOT] 💾 BEFORE ARCHIVING: 911 jobs in database
[2025-12-23T00:42:59.928Z] [BOT] ✅ No jobs to archive (all 911 jobs within 7-day window)
[2025-12-23T00:42:59.936Z] [BOT] 💾 Saved posted_jobs.json: 911 active jobs
[2025-12-23T00:42:59.936Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-23T00:42:59.936Z] [BOT] 📍 [ROUTING] "Software Engineer - Entry" @ ORG_7b717950
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-23T00:43:00.194Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Entry @ ORG_7b717950 in #🤖・ai-jobs
[2025-12-23T00:43:00.194Z] [BOT] ✅ Industry: Software Engineer - Entry @ ORG_7b717950
[2025-12-23T00:43:01.895Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Entry @ ORG_7b717950 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-23T00:43:03.395Z] [BOT] 💾 Marked as posted: Software Engineer - Entry @ ORG_7b717950 (instance #1)
[2025-12-23T00:43:03.396Z] [BOT] 💾 BEFORE ARCHIVING: 912 jobs in database
[2025-12-23T00:43:03.396Z] [BOT] ✅ No jobs to archive (all 912 jobs within 7-day window)
[2025-12-23T00:43:03.405Z] [BOT] 💾 Saved posted_jobs.json: 912 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-23T00:43:06.405Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-23T00:43:06.405Z] [BOT] 📍 [ROUTING] "Software Implementation Engineer 1" @ ORG_32d13e4c
[2025-12-23T00:43:06.405Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-23T00:43:06.685Z] [BOT] ✅ Created forum post: 🏢 Software Implementation Engineer 1 @ ORG_32d13e4c in #💻・tech-jobs
[2025-12-23T00:43:06.685Z] [BOT] ✅ Industry: Software Implementation Engineer 1 @ ORG_32d13e4c
[2025-12-23T00:43:08.401Z] [BOT] ✅ Created forum post: 🏢 Software Implementation Engineer 1 @ ORG_32d13e4c in #💻・remote-usa
[2025-12-23T00:43:08.401Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-23T00:43:09.901Z] [BOT] 💾 Marked as posted: Software Implementation Engineer 1 @ ORG_32d13e4c (instance #1)
[2025-12-23T00:43:09.901Z] [BOT] 💾 BEFORE ARCHIVING: 913 jobs in database
[2025-12-23T00:43:09.902Z] [BOT] ✅ No jobs to archive (all 913 jobs within 7-day window)
[2025-12-23T00:43:09.910Z] [BOT] 💾 Saved posted_jobs.json: 913 active jobs
[2025-12-23T00:43:09.910Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-23T00:43:12.911Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2025-12-23T00:43:12.911Z] [BOT] ⏭️  Skipping duplicate: JID_79342241 (posted within 7 days)
[2025-12-23T00:43:12.912Z] [BOT] ⏭️  Skipping duplicate: JID_8ff7c535-scientist_10138200 (posted within 7 days)
[2025-12-23T00:43:12.912Z] [BOT] ⏭️  Skipping duplicate: JID_02aca0ec-services_2024012 (posted within 7 days)
[2025-12-23T00:43:12.912Z] [BOT] ⏭️  Skipping duplicate: JID_6f58f2a4-centene_external-JID_f52c320a-analytics_1624336 (posted within 7 days)
[2025-12-23T00:43:12.912Z] [BOT] ⏭️  Skipping duplicate: JID_31d35ffd-_jr5303-1 (posted within 7 days)
[2025-12-23T00:43:12.912Z] [BOT] ⏭️  Skipping duplicate: JID_4c7ee457 (posted within 7 days)
[2025-12-23T00:43:12.912Z] [BOT] ⏭️  Skipping duplicate: JID_3a2f67a2 (posted within 7 days)
[2025-12-23T00:43:12.913Z] [BOT] ✅ Loaded pending queue: 8 total (0 pending, 8 enriched, 0 posted)
[2025-12-23T00:43:12.913Z] [BOT] ✅ Saved pending queue: 8 total (0 pending, 1 enriched, 7 posted)
[2025-12-23T00:43:12.914Z] [BOT] 📋 Updated queue: marked 7 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-23T00:43:12.960Z] [BOT] 📂 Loaded 1020 existing routing entries
[2025-12-23T00:43:13.008Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
[2025-12-23T00:43:13.009Z] [BOT] Total entries: 1027
   Timestamp: 2025-12-23T00:43:13.003Z
[2025-12-23T00:43:13.009Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_805c58df.jsonl
   Total attempts: 14
   Successful: 13
   Failed: 0
   Skipped: 1
[2025-12-23T00:43:13.010Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 6
   Top channels:
     1. #📈・JID_fb739488: 3 posts
     2. #💻・remote-usa: 3 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🗽・new-york: 2 posts
     5. #🌉・san-francisco: 1 posts
[STATS] Channel stats saved
[2025-12-23T00:43:15.021Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2718) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*